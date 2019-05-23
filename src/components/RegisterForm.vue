<template>
    <form class="register-form" @submit.prevent="submit()">
        <h2>Register</h2>
        <input type="text"  v-model="credentials.email" required placeholder="Email">
        <input type="password"  v-model="credentials.password" required placeholder="Password">
        <button>Register</button>
        <p>Have an account?</p>
        <router-link to="/login">Log in now</router-link>
    </form>
</template>

<script>
  //package to make httprequests
  import {ACTIONS} from '@/store.js'

    export default {
        data() {
            return {
                credentials: {
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            ...ACTIONS,
            submit() {
                this.register(this.credentials).then(() => {
                    this.$router.push('/')
                })
            }
        }
    }
</script>

<style lang = "scss" scoped>
    form {
        padding: 1em;
        margin: auto;
        display: block;
        width: 40 * $units;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 5 * $units;
    }
    form > *{
        display: block;
        width: 100%;
        margin: 2 * $units auto;
    }

    input {
        height: 4 * $units;
        padding-left: 1 * $units;
        width: 25 * $units;
        border-radius: 0.5 * $units;
        border-style: solid #999999;
        border-width: 1px;

    }
    button {
        height: 5 * $units;
        background-color: $primary;
        color: white;
        padding: 1 * $units;
        display: inline-block;
        width: 25 * $units;
        border-style:none;
        border-radius: 0.5 * $units;
        font-size: 2 * $units;
    }

    .register-form{
        text-align:center;
        margin-top:10%;
        position:relative;
        height: 50 * $units;
    }

    h2{
        color:#999999;
    }

</style>
