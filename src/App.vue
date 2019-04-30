<!--home view default view with router view for rendering sub components-->
<template>
  <div id="app">

    <nav>
      <router-link to="/" tag="h1">InfluX</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
      <router-link class="profile" to="/accounts/me" />
    </nav>

    <router-view></router-view>
 <footer> <!-- Footer-->
        <div class = "column_L">
          <h2>Ready to get started? </h2>
          <p> Theon. You're good man. Thank you. </p>
        </div> <!-- left column -->

        <div class = "column_R">
          <ul>
            <p> Text Link</p>
            <p> Text Link</p>
            <p> Text Link</p>
            <p> Text Link</p>
            <p> Text Link</p>
          </ul>
        </div> <!-- right column -->
    </footer> <!-- Footer --> 

  </div>
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
    position:relative;
    height:2000px;

    > nav {
      display: flex;
      justify-content: flex-end;
     position: fixed;
      height: $header-height;
      color: white;
      background-color: rgba(57,57,57,0.9);
      opacity: 90%;
      width: 100%;
      top: 0;

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

    footer {
    
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 300px;
      background-color: #F2F2F2;
      color: black;

      > .column_L {
        padding-top: 5%;
        padding-bottom: 5%;
        margin-left:10%;
        float:left;
        width: 50%;
      }

      >.column_R{
        padding-top: 5%;
        padding-bottom: 5%;
        margin-right:10%;
        float:right;
      }

    }


  }

</style>
