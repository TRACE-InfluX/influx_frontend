<template>
    <form class="register-form" @submit.prevent="submit">
        <h2>Register</h2>
        <p><input type="text"  v-model="input.email" required placeholder="Email"></p>
        <p><input type="password"  v-model="input.password" required placeholder="Password"></p>
        <button type="button" v-on:click="register()">Register</button>
        <p><router-link to="/login">Have an account?</router-link></p>
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
    .register-form > *{
        display: block;
        margin: 10px auto;
    }
</style>
