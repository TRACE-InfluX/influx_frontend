<!-- template for editing an influencer.-->
<template>
  <form
    id="form"
        <!--calls submit function in methods array below-->
    @submit.prevent="submit"
  >
    <p>
      <label for="name">Name: </label>
      <input
        id="name"
        v-model="influencer.name"
        type="text"
        name="name"
      >
    </p>
    <p>
      <label for="description">Description: </label>
      <input
        id="description"
        v-model="influencer.description"
        type="text"
        name="description"
      >
    </p>
    <p>
      <label for="activity">Activity: </label>
      <input
        id="activity"
        v-model="influencer.activity"
        type="text"
        name="activity"
      >
    </p>
    <p>
      <label for="relevance">Relevance: </label>
      <input
        id="relevance"
        v-model="influencer.relevance"
        type="text"
        name="relevance"
      >
    </p>
    <p>
      <label for="engagement">Engagement: </label>
      <input
        id="engagement"
        v-model="influencer.engagement"
        type="text"
        name="engagement"
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
    //using package to make HTTPrequests
import API from 'axios'

export default {
  name:"influencer-form",
  data() {
      return {
        //data for influencers 
        influencer: {}
    }
  },
        mounted() {
      //get specific data to prefill form for editing the influencer
    API.get('http://localhost:4000/v0/influencers/' + this.$route.params.id)
        .then(res => {
            this.influencer = res.data.data
        })
        .catch(alert)
  },
        methods: {
      //updating influencer via PUT / UPDATE
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
