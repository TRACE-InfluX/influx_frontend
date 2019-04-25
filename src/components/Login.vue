<!-- template for a login page.-->
<template>
<div>
     <h2>Login</h2>
    <form id="form" @submit.prevent="submit">
        <p><input type="text"  v-model="input.username" required placeholder="Email"></p>
        <p><input type="password"  v-model="input.password" required placeholder="Password"></p>

        <button type="button" v-on:click="login()">Login</button>
        <p><router-link to="">Forgot Password</router-link></p>
    </form>
</div>
</template>

<script>
  import API from '@/api.js'

    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    API.post('/v0/auth', { email: this.input.username, password: this.input.password })
                        .then(function(res)  {
                            localStorage.setItem("bearertoken", res.data.idToken);
                            localStorage.setItem("admin", res.data.admin);
                            console.log(localStorage.admin);
                            API.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.bearertoken}` };
                        });
                } else {
                    alert("A username and password must be present");
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
