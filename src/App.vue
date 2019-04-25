<!--home view default view with router view for rendering sub components-->
<template>
    <div id="app">
        <div id="nav">
            <router-link to="/register">Register</router-link>
            &nbsp;
            <router-link to="/login">Login</router-link>
            &nbsp;
        </div>
        &nbsp;
        <h1>Welcome to InfluX</h1>
        <div id="links">
            <router-link to="/influencers/influencerindex">Influencers</router-link>
            &nbsp;
            <router-link to="/accounts/accountindex">Accounts</router-link>
        </div>
        <router-view></router-view>
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

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    #nav {
        text-align: right;
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
