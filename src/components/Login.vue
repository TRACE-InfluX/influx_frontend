<!-- template for a login page.-->
<template>
<form class="login-form" @submit.prevent="submit">
    <h2>Login</h2>
    <input type="text"  v-model="input.username" required placeholder="Email">
    <input type="password"  v-model="input.password" required placeholder="Password">
    <button type="button" v-on:click="login()">Login</button>
    <router-link to="">Forgot Password</router-link>
</form>
<!--=======-->

<!--<div class="login">-->
     <!--<h2>Login</h2>-->
    <!---->
    <!--<form id="form"-->
          <!--@submit.prevent="submit">-->

 <!--<div class="user-profile"></div>      -->
 <!--<p><input type="text"  v-model="input.username" required placeholder="Email"></p>-->
 <!--<p><input type="password"  v-model="input.password" required placeholder="Password"></p>-->


 <!--<button type="button" v-on:click="login()">Login</button>                   -->

     <!---->
        <!--<p>Forgot your login details?</p><router-link to="">Get help signing in.</router-link></p>-->
    <!--</form>-->
<!--</div>-->
<!--&gt;>>>>>> fc8811d31e85540603acbf0083908b2b2043ec08-->
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
/*<style scoped>*/

/*@import url('https://fonts.googleapis.com/css?family=Lato');*/


/*.login {*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*font-family: Lato; */
/*}*/

/*img {*/
    /*display: inline-block;*/
/*}*/

/*#form {*/
    /*width: 50%;*/
    /*padding: 1em;*/
    /*display: inline-block;*/
/*}*/

/*input {*/
    /*font-family: Lato; */
    /*width: 200px; */
    /*height: 30px; */
    /*display: inline-block;*/
/*}*/

/*button { */
    /*width: 200px;*/
    /*height: 40px; */
    /*background-color: #458eff;*/
    /*color: white; */
    /*padding: 10px; */
    /*border-radius: .5em; */
    /*font-weight: 800; */
    /*font-family: Lato; */
    /*display: inline-block;*/
    /**/
/*}*/

/*.user-profile {*/

  /*background-image:url('../assets/logo.png');*/
  /*background-position: center center;*/
  /*height: 150px;*/
  /*width: 150px;*/
  /*background-color: #bbb; !* backup background *!*/
  /*border-radius: 50%;*/
  /*display: inline-block;*/

/*}*/

</style>
