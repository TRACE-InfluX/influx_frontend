<template>
  <div id="app">
    <!-- <Influencers /> -->
    <router-link to="/influencers">Influencers</router-link>
      &nbsp;
    <router-link to="/accounts">Accounts</router-link>
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
