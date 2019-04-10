<template>
  <div id="app">
    <div id="welcome">
      <h1>Welcome to InfluX!</h1>
      <h2>This is our admin page</h2>
      <p>Check out:</p>
      <router-link to="/influencers">Influencers</router-link>
      &nbsp;
      <router-link to="/accounts">Accounts</router-link>
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

<style lang="scss" scoped>

  #welcome {
    margin: auto;
    width: 50%;
    text-align: center;
  }
</style>
