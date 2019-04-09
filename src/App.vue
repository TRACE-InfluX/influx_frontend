<template>
  <div id="app">
    <!-- <Influencers /> -->
    <router-link to="/influencers">Influencers</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Influencers from './components/Influencers.vue'

export default {
  name: 'app',
  components: {
    Influencers
  }
}
</script>
