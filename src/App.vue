<!--home view default view with router view for rendering sub components-->
<template>
<<<<<<< HEAD
    <div id="app">
        <nav>
            <router-link to="/"></router-link>
            <div class="profile">
                <router-link to="/register">Register</router-link>
                <router-link to="/login">Login</router-link>
                <img src="@/assets/profile.png">
            </div>
        </nav>
        <router-view></router-view>
        <router-link to="/influencers">Influencers</router-link> &nbsp;
        <router-link to="/accounts">Accounts</router-link>
        
    </div>
=======
  <div id="app">

    <nav>
      <router-link to="/" tag="h1">InfluX</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
      <router-link class="profile" to="/accounts/me" />
    </nav>

    <router-view></router-view>

  </div>
>>>>>>> 8cc1aa0e7bbe15140faf5f4e7ce77a03a8eeb1e0
</template>

<script>
  export default {
    name: 'app',
    mounted() {
      this.$router.push('/')
    }
  }
</script>

<!--styling for top level of app-->
<style lang="scss">

  $header-height: 8 * $units;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    > nav {
      display: flex;
      justify-content: flex-end;
      position: fixed;
      height: $header-height;
      color: white;
      background-color: rgba(0,0,0,0.5);
      width: 100%;

      > * {
        display: inline-block;
        line-height: $header-height;
      }

      h1 {
        margin-right: auto;
        font-family: 'Puritan', sans-serif;
        font-size: 4 * $units;
        padding-left: 3 * $units;
        letter-spacing: 1.5 * $units;
        cursor: pointer;
        transition: 0.2s ease;

        &:hover {
          transition: 0.2s ease;
          letter-spacing: 1.8 * $units;
        }
      }

      a {
        width: 15 * $units;
        font-size: 2.5 * $units;
        text-decoration: none;
        text-align: center;

        &:visited {
          color: white;
        }

        &:hover {
          text-decoration: underline;
        }
      }

      .profile {
        width: $header-height;
        background: url('~@/assets/profile.png');
        background-size: 100%;
      }

    }
  }

</style>
