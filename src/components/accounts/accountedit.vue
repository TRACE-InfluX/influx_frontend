<template>
  <form
    id="form"
    @submit.prevent="submit"
  >
    <p>
      <label for="name">Name: </label>
      <input
        id="name"
        v-model="account.name"
        type="text"
        name="name"
      >
    </p>
    <p>
      <label for="description">Email: </label>
      <input
        id="description"
        v-model="account.email"
        type="text"
        name="description"
      >
    </p>
    <p>
      <label for="activity">Website </label>
      <input
        id="activity"
        v-model="account.website"
        type="text"
        name="activity"
      >
    </p>
    <p>
      <label for="activity">Password </label>
      <input
        id="activity"
        v-model="account.password"
        type="text"
        name="activity"
      >
    </p>
    <p>
      <input
        type="submit"
        value="Submit"
      >
    </p>
  </form>
</template>

<script>
import API from 'axios'

export default {
  name:"influencer-form",
  data() {
    return {
        influencer: {}
    }
  },
  mounted() {
    API.get('http://localhost:4000/v0/influencers/' + this.$route.params.id)
        .then(res => {
            this.influencer = res.data.data
        })
        .catch(alert)
  },
  methods: {
    submit() {
        API.put('http://localhost:4000/v0/influencers/' + this.$route.params.id,
        {influencer: this.influencer})
        .then(res => {
            alert('saved')
            this.influencer = res.data.data
        })
        .catch(alert)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
