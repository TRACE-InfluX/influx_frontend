<!-- template for a login page.-->
<template>
    <form class="login-form" @submit.prevent="submit">
        <h2>Login</h2>
        <input type="text"  v-model="input.username" required placeholder="Email">
        <input type="password"  v-model="input.password" required placeholder="Password">
        <button type="button" v-on:click="login()">Login</button>
        <p>Forgot your login details?</p>
        <router-link to="">Get help signing in.</router-link>
    </form>
</template>

<script>
  import API from '@/api.js'

    export default {
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
                        .then((res) => {
                            localStorage.setItem("bearertoken", res.data.idToken);
                            localStorage.setItem("admin", res.data.admin);
                            API.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.bearertoken}` };
                            if (res.data.admin) {
                              this.$router.push('/accounts/accountindex')
                            }
                            else {
                              this.$router.push('/influencers/influencerindex')
                            }
                        });
                } else {
                    alert("A username and password must be present");
                }
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

    form > * {
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
        border-radius: .5em;
        display: inline-block;
        width: 200px;
    }


    .login-form{
        text-align:center;
        margin-top:10%;
        position: relative;
        height: 400px;
    }

    h2 {
        color:#999999;
    }


</style>
