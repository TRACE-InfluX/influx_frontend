<!-- template for a login page.-->
<template>
  <form class="login-form" @submit.prevent="login">
    <h2>Login</h2>
    <input type="text"  v-model="input.username" required placeholder="Email">
    <input type="password"  v-model="input.password" required placeholder="Password">
    <button>Login</button>
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
                              this.$router.push('/accounts')
                            }
                            else {
                              this.$router.push('/influencers')
                            }
                        });
                } else {
                    alert("A username and password must be present");
                }
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
    }

    form > * {
        display: block;
        width: 100%;
        margin: 2 * $units auto;
    }

    input {
        height: 4 * $units;
        padding-left:  1* $units;
        width: 25 * $units;
        border-radius: 0.5 * $units;
        border-style: solid #999999;
        border-width: 1px;
    }

    button {
        height: 5 * $units;
        background-color: #458eff;
        color: white;
        padding: 1 * $units;
        display: inline-block;
        width:25 * $units;
        border-style:none;
        border-radius: 0.5 * $units;
    }

    .login-form{
        text-align:center;
        margin-top:10%;
        position:relative;
        height: 50 * $units;
    }

    h2{
        color:#999999;
    }


</style>
