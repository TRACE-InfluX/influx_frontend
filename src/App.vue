<!--home view default view with router view for rendering sub components-->
<template>
  <div id="app">

    <nav>
      <router-link to="/" tag="h1">InfluX</router-link>
      <div class = "nav-mid">
        <form @submit.prevent="search" class="nav-search" v-if="showSearchBar && !searching">
          <i class="zmdi zmdi-search" />
          <input class="search-bar" ref="search" type="search" v-model="query" placeholder="Type to Search...">
          <button>Discover</button>
        </form>
        <loading-screen v-else-if="showSearchBar && searching"></loading-screen>
      </div>
      <div class="nav-profile">
        <router-link class="profile-link" to="/register">Register</router-link>
        <router-link class="profile-link" to="/login">Login</router-link>
        <router-link class="profile" to="/profile"><img src="~@/assets/profile.png"></router-link>
      </div>
    </nav>

    <router-view></router-view>

    <footer>
      <h3>InfluX </h3>
      <ul>
      <li>We connect the world to you.</li>
      <li>Get in touch with us:</li>
      <li><i class="zmdi zmdi-email"></i> <a href="#"> Email</a></li>
      <li><i class="zmdi zmdi-instagram"></i> <a href="#"> Instagram</a></li>
      <li><i class="zmdi zmdi-twitter-box"></i><a href="#"> Twitter</a></li>
      <li><img id="discord" src="~@/assets/discord.svg" width="15" height="15"><a href="https://discord.gg/aEZ9Q4e"> Discord</a></li>
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
  import LoadingScreen from "./components/LoadingScreen";

  export default {
    components: {LoadingScreen},
    data() {
      return {
        query: '',
        weights_query: '',
        showSearchBar: true,
        searching: false
      }
    },
    name: 'app',
    methods: {
      ...ACTIONS,
      search() {
        this.searching = true;
        this.load_influencers(this.query)
          .then(() => {
            this.searching = false;
            localStorage.setItem('query', this.query);
            this.weights_query = this.query
            this.$router.push('/influencers');
            scrollTo(0, 0)
          })
      }
    },
    mounted() {
      this.query = localStorage.getItem('query') || ''
      if (this.query) {
        this.search()
      }
      else {
        this.$router.push('/')
      }
    },
  }
</script>

<!--styling for top level of app-->
<style lang="scss">

  $header-height: 9 * $units;

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
      position: fixed;
      justify-content: space-between;
      top:0;
      height: $header-height;
      color: #414042;
      background-color: #FFFFFF;
      width: 100%;
      z-index: 998;
      box-shadow: 0 4px 6px 0 hsla(0,0%,0%,0.2);

      > * {
        display: inline-block;
        height: $header-height;
        line-height: $header-height;
      }

      .nav-mid {
        flex: 2;
        max-width: 90 * $units;
        margin: auto;

        .loading-screen {
          display:flex;
          height: $header-height;
          img{
            margin-left: auto;
          }
          p{
            display:inline-block;
            height: $header-height;
            line-height: $header-height;
            font-size: 2.5 * $units;
            margin-right: auto;
          }
        }

        .nav-search {
          text-align: center;
          $height: 4 * $units;
          line-height: $height;
          height: $height;
          display: flex;
          margin: 2.5 * $units;

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
            width: 100%
          }

          button {
            background-color: $primary;
            color: white;
            border-radius: 0.5 * $units;
          }
        }
      }

      h1 {
        flex: 1;
        font-family: 'Puritan', sans-serif;
        font-size: 4 * $units;
        letter-spacing: 1.5 * $units;
        cursor: pointer;
        transition: 0.2s ease;
        color: $primary;
        text-align: center;

        &:hover {
          transition: 0.2s ease;
          color: #FFFFFF;
          background-color: $primary;
        }
      }

      .nav-profile {
        width: 45 * $units;
        flex: 1;
        display: flex;
        height: $header-height;

        a {
          flex: 1;
          width: 12 * $units;
          font-size: 2.5 * $units;
          text-decoration: none;
          text-align: center;
          line-height: $header-height;
          height: $header-height;
          display: inline-block;

          &:visited {
            color: #414042;
          }

          &:hover {
            border-bottom: 0.5 * $units solid $primary;
            transition: 0.2s ease;
          }
        }

        .profile {
          flex: 1;
          img {
            width: $header-height - 3 * $units;
            margin-top: 1  * $units;
            margin-bottom: 1 * $units;
            /*background: url('~@/assets/profile.png');
            background-size: 100%;
            background-repeat: no-repeat;*/
          }
        }
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

      h3{
        color: $primary;
      }

      h3, p, ul
      {
        align-self: center;
        list-style: none;
        font-size: 5 * $units;
        
      }

      li {
        margin: 1 * $units;
        font-size: 2 * $units;
      
      }

      a{
        text-decoration: none;
        font-size: 2 * $units;
        text-align:center;
      }

      a:visited{
        color: black;
      }
    }

  }

  // This is for the wordcloud, it needs to be outside the scoped css
  #app .text:hover {
    cursor: pointer !important;
    text-decoration: underline;
  }

</style>
