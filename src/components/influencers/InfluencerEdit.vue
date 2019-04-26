<!-- template for editing an influencer.-->
<template>
    <!--calls submit function in methods array below-->
    <form class="influencer-edit"
          @submit.prevent="submit">
        <p>
            <label for="name">Name: </label>
            <input id="name"
                   v-model="influencer.name"
                   type="text"
                   name="name">
        </p>
        <p>
            <label for="description">Description: </label>
            <input id="description"
                   v-model="influencer.description"
                   type="text"
                   name="description">
        </p>
        <p>
            <label for="activity">Activity: </label>
            <input id="activity"
                   v-model="influencer.activity"
                   type="text"
                   name="activity">
        </p>
        <p>
            <label for="relevance">Relevance: </label>
            <input id="relevance"
                   v-model="influencer.relevance"
                   type="text"
                   name="relevance">
        </p>
        <p>
            <label for="engagement">Engagement: </label>
            <input id="engagement"
                   v-model="influencer.engagement"
                   type="text"
                   name="engagement">
        </p>
        <p>
            <input type="submit"
                   value="Submit">
        </p>
    </form>
</template>

<script>
  //using package to make HTTPrequests
  import API from '@/api.js'

export default {
  data() {
      return {
        //data for influencers
        influencer: {}
    }
  },
        mounted() {
      //get specific data to prefill form for editing the influencer
    API.get('/v0/influencers/' + this.$route.params.id)
        .then(res => {
            this.influencer = res.data.data
        })
        .catch(alert)
  },
        methods: {
      //updating influencer via PUT / UPDATE
    submit() {
        API.put('/v0/influencers/' + this.$route.params.id,
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
