<!-- template for a login page.-->
<template>
<div class="login">
     <h1>Welcome User</h1>
    <form id="form"
          @submit.prevent="submit">
 <div class="user-profile"></div>      
 <p><input type="text"  v-model="input.username" required placeholder="Email"></p>
 <p><input type="password"  v-model="input.password" required placeholder="Password"></p>


 <button type="button" v-on:click="login()">Login</button>                   
 <p>Forgot your login details? Get help signing in.</p>

    </form>
</div>
</template>

<script>
 import API from 'axios'

    export default {
        name: 'Login',
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
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        alert("The username and / or password is incorrect");
                    }
                } else {
                    alert("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Lato');


.login {
    width: 100%;
    height: 100%;
    font-family: Lato; 
}

#form {
    width: 50%;
    padding: 1em;
    display: inline-block;
}

input {
    font-family: Lato; 
    width: 200px; 
    height: 30px; 
    display: inline-block;
}

button { 
    width: 200px;
    height: 40px; 
    background-color: #458eff;
    color: white; 
    padding: 10px; 
    border-radius: .5em; 
    font-weight: 800; 
    font-family: Lato; 
    display: inline-block;
    
}

.user-profile {

  height: 150px;
  width: 150px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;

}

</style>
