<template>
    <form class="register-form" @submit.prevent="submit">
        <h2>Register</h2>
        <input type="text"  v-model="input.email" required placeholder="Email">
        <input type="password"  v-model="input.password" required placeholder="Password">
        <button type="button" v-on:click="register()">Register</button>
        Have an account?
        <router-link to="/login">Log in now</router-link>
    </form>
</template>

<script>
  //package to make httprequests
  import API from '@/api.js'

    export default {
        name: "register-form",
        data() {
            return {
                input: {
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            register() {
                const new_user = this.input;
                API.post('/v0/accounts', { email: new_user.email, password: new_user.password });
            }
        }
    }
</script>

<style scoped>
    .register-form {
        padding: 1em;
        margin: auto;
        display: block;
        width: 240px;
    }
    .register-form > *{
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

</style>
