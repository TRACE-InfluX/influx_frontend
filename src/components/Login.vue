<!-- template for a login page.-->
<template>
    <form class="login-form" @submit.prevent="submit">
        <h2>Login</h2>
        <img src="@/assets/profile.png">
        <input type="text"  v-model="input.username" required placeholder="Email">
        <input type="password"  v-model="input.password" required placeholder="Password">
        <button type="button" v-on:click="login()">Login</button>
        Forgot your login details?
        <router-link to="">Get help signing in.</router-link>
    </form>
</template>

<script>
  import API from '@/api.js'

    export default {
        name: 'login-form',
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


<style scoped>
    .login-form {
        padding: 1em;
        margin: auto;
        display: block;
        width: 240px;
    }

    .login-form > * {
        display: block;
        width: 100%;
        margin: 16px auto;
    }

    input {
        height: 30px;
        padding-left: 8px;
    }

    button {
        height: 40px;
        background-color: #458eff;
        color: white;
        padding: 10px;
        border-radius: .5em;
        display: inline-block;
    }

    .login-form img {
      height: 150px;
      width: 150px;
      border-radius: 150px;
      display: block;
    }

</style>
