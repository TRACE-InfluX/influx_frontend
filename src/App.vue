<!--home view default view with router view for rendering sub components-->
<template>
  <div id="app">

    <nav>
      <router-link to="/" tag="h1">InfluX</router-link>
      <form @submit.prevent="search" class="nav-search" v-show="showSearchBar">
        <i class="zmdi zmdi-search" />
        <input class="search-bar" ref="search" type="search" v-model="query" placeholder="Type to Search...">
        <button>Discover</button>
      </form>
      <router-link to="/register">Pricing</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
      <router-link class="profile" to="/profile" />  
    </nav>

    <router-view></router-view>

    <footer>
      <h3>InfluX </h3>
      <ul>
      <li>We connect the world to you.</li>
      <li>Get in touch with us:</li>
      <li><i class="zmdi zmdi-email"></i> <a href="#"> email</a></li>
      <li><i class="zmdi zmdi-instagram"></i> <a href="#">instagram</a></li>
      <li><i class="zmdi zmdi-twitter-box"></i><a href="#">twitter</a></li>
      <li><img id="discord" src="~@/assets/discord.svg" width="15" height="15"><a href="https://discord.gg/aEZ9Q4e">discord</a></li>
      </ul>

      <ul>
      <li>Legal: </li>
      <li>Terms</li>
      <li>Privacy</li>
      <li>InfluX Co. 2019 All Rights Reserved.</li>
      </ul>


    </footer>
  </div>
</template>

<script>

  import { ACTIONS } from '@/store.js'

  export default {
    data() {
      return {
        query: '',
        showSearchBar: true,
        searching: false
      }
    },
    name: 'app',
    methods: {
      ...ACTIONS,
      search() {
        localStorage.setItem('query', this.query);
        this.$router.push('/influencers');
        this.searching = true;
        scrollTo(0, 0)
      }
    },
    mounted() {
      this.load_influencers()
      if(this.searching) {
        this.query = localStorage.getItem("query") || ''
        if (this.query) {
          this.$router.push('/influencers')
        }
        else {
          this.$router.push('/')
        }
      }
    },
    watch: {
      query(q) {
        localStorage.setItem("query", q)
        if(this.searching) {
          scrollTo(0, 0)
        }
      }
    }
  }
</script>

<!--styling for top level of app-->
<style lang="scss">

  $header-height: 12 * $units;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    background-color: $primary;
    color: white;
    border-radius: 0.5 * $units;
    border-style:none;
    padding: 1 * $units;
  }

  #app {
    font-family: 'Neutrif', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    > nav {
      display: flex;
      justify-content: space-between;
      position: fixed;
      top:0;
      height: $header-height;
      color: #414042;
      background-color: #FFFFFF;
      width: 100%;
      z-index: 9999;
      padding-left:15%;
      padding-right:15%;
      box-shadow: 0 4px 6px 0 hsla(0,0%,0%,0.2);

      > * {
        display: inline-block;
        line-height: $header-height;
      }

      .nav-search {
        $height: 4 * $units;
        line-height: $height;
        margin: auto;
        height: $height;
        display: flex;

        i {
          position: absolute;
          color: gray;
          height: $height;
          width: $height;
          padding: 1 * $units;
        }

        input, button {
          font-size: 1.8 * $units;
          border-radius: 0.5 * $units;
          border: none;
          box-shadow: inset 0 2px 4px 0 hsla(0,0%, 0%, 0.2);
        }

        input {
          flex: 1;
          padding-left: $height;
          margin-right:  1 * $units;
          padding-right: 1 * $units;
          width: 40 * $units;
        }

        button {
          background-color: $primary;
          color: white;
          border-radius: 0.5 * $units;
        }
      }

      h1 {
        margin-right: auto;
        font-family: 'Puritan', sans-serif;
        font-size: 4 * $units;
        letter-spacing: 1.5 * $units;
        cursor: pointer;
        transition: 0.2s ease;
        color: $primary;
        padding-left: 2 * $units;
        padding-right: 2 * $units;

        &:hover {
          transition: 0.2s ease;
          color: #FFFFFF;
          background-color: $primary;
        }
      }

      a {
        width: 15 * $units;
        font-size: 2.5 * $units;
        text-decoration: none;
        text-align: center;

        &:visited {
          color: #414042;
        }

        &:hover {
          border-bottom: 0.5 * $units solid $primary;
          transition: 0.2s ease;
        }
      }

      .profile {
        width: $header-height - 2 * $units;
        margin-top: 1  * $units;
        margin-bottom: 1 * $units;
        background: url('~@/assets/profile.png');
        background-size: 100%;
        background-repeat: no-repeat;
      }
    }

    footer
    {
      bottom: 0;
      display: flex;
      justify-content: space-around;
      height: 25 * $units;
      width: 100%;
      padding: 5%;
      background-color: $footer-color;
      font-size: 1.5 * $units;

      h3, p, ul
      {
        align-self: center;
        list-style: none;
      }

      li {
        margin: 1 * $units;
      }

      a{
        text-decoration: none;
      }

      a:visited{
        color: black;
      }
    }

  }

</style>
