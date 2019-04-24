<!-- template for a login page.-->
<template>
<div>
     <h1>Welcome User</h1>
    <form id="form"
          @submit.prevent="submit">
       
 <p><input type="text"  v-model="input.username" required placeholder="Email"></p>
 <p><input type="password"  v-model="input.password" required placeholder="Password"></p>

<input type="submit"
                   value="Forgot Password">
 <button type="button" v-on:click="login()">Login</button>                   
  

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

<style lang="scss" scoped>

</style>
