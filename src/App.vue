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

    <footer>

      <h3>Ready to get started?</h3>
      <p> Lorem Ipsum </p>

      <ul>

      <li>Product Company</li>  
      <li>Product Company</li>  
      <li>Product Company</li>  
      <li>Product Company</li>  
      <li>Product Company</li>  
      <li>Product Company</li>  
      <li>Product Company</li>  


      </ul>  

    </footer>  
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted() {
      let query = localStorage.getItem("query");
      if (query) {
        this.$router.push('/influencers')
      }
      else {
        this.$router.push('/')
      }
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

  button {
    cursor: pointer;
  }

  #app {
    font-family: 'Lato', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    > nav {
      display: flex;
      justify-content: flex-end;
      position: fixed;
      top:0;
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
        width: $header-height - 2 * $units;
        margin: 1 * $units;
        background: url('~@/assets/profile.png');
        background-size: 100%;
      }

    }

  footer
  {
    bottom: 0; 
    display: flex; 
    margin-top: 5 * $units; 
    justify-content: space-around; 
    height: 25 * $units; 
    width: 100%;
    background-color: $footer-color; 
    

  h3, p, ul
  {
    align-self: center; 
    list-style: none; 
  }  
  }

  }

</style>
