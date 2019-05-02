<template>
    <form class="register-form" @submit.prevent="submit">
        <h2>Register</h2>
        <input type="text"  v-model="input.email" required placeholder="Email">
        <input type="password"  v-model="input.password" required placeholder="Password">
        <button type="button" v-on:click="register()">Register</button>
        <p>Have an account?</p>
        <router-link to="/login">Log in now</router-link>
    </form>
</template>

<script>
  //package to make httprequests
  import API from '@/api.js'

    export default {
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
    form {
        padding: 1em;
        margin: auto;
        display: block;
        width: 320px; 
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    }
    form > *{
        display: block;
        width: 100%;
        margin: 16px auto;
    }
    input {
        height: 30px;
        padding-left: 8px;
        width:200px;
    }
    button {
        height: 40px;
        background-color: #458eff;
        color: white;
        padding: 10px;
        display: inline-block;
        width:200px;
        border-style:none;
    }

    .register-form{
        text-align:center;
        margin-top:10%;
        position:relative;
        height:400px;
    }

    h2{
        color:#999999;
    }

</style>
