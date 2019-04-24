<template>
    <div class="Register">
        <h2>Register</h2>
        <form id="form" @submit.prevent="submit">
            <p><input type="text"  v-model="input.email" required placeholder="Email"></p>
            <p><input type="password"  v-model="input.password" required placeholder="Password"></p>
            <button type="button" v-on:click="register()">Register</button>
        </form>
    </div>
</template>

<script>
    //package to make httprequests
    import API from 'axios'

    export default {
        name: "Register",
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
                API.post('http://localhost:3000/v0/accounts', { email: new_user.email, password: new_user.password });
            }
        }
    }
</script>

<style scoped>

</style>
