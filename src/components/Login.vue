<!-- template for a login page.-->
<template>
<form class="login-form" @submit.prevent="submit">
    <h2>Login</h2>
    <input type="text"  v-model="input.username" required placeholder="Email">
    <input type="password"  v-model="input.password" required placeholder="Password">
    <button type="button" v-on:click="login()">Login</button>
    <router-link to="">Forgot Password</router-link>
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


                    API.post('/v0/auth', { email: this.input.username, password: this.input.password });
                } else {
                    alert("A username and password must be present");
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-form > *{
        display: block;
        margin: 10px auto;
    }

</style>
