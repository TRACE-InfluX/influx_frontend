<!--home view default view with router view for rendering sub components-->
<template>
    <div id="app">
        <nav>
            <router-link to="/"></router-link>
            <div class ="profile">
                <router-link to="/register">Register</router-link>
                <router-link to="/login">Login</router-link>
                <img src="@/assets/profile.png">
            </div>
        </nav>
        <router-view></router-view>
        <router-link to="/influencers/influencerindex">Influencers</router-link> &nbsp;
        <router-link to="/accounts/accountindex">Accounts</router-link>
    </div>
</template>
<script>
    export default {
        name: 'app',
        components: {

        }
    }
</script>

<!--styling for top level of app-->
<style>

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    nav {
        text-align: left;
        height: 100px;
    }

    nav > a {
        background-image: url("assets/influxlogo.png");
        background-repeat: no-repeat;
        display: inline-block;
        width: 250px;
        height: 100px;
    }

    .profile {
        float: right;
        display: flex;
        width: 250px;
    }

    .profile > img {
        height: 100px;
    }

    .profile > a {
        flex: 1;
        height: 100px;
        line-height: 100px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
