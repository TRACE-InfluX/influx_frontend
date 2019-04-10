<template>
  <ul>
    <h1>Influencers</h1>
    <li v-for="influencer in influencers" :key="influencer.id">
        <h2>Name: <router-link :to="`/influencers/${influencer.id}`">{{influencer.name}}</router-link></h2>
      <p>Description: {{influencer.description}}</p>
      <p>Activity: {{influencer.activity}}</p>
      <p>Relevance: {{influencer.relevance}}</p>
      <p>Engagement: {{influencer.engagement}}</p>
      <router-link :to="`/influencers/${influencer.id}/edit`" tag="button">Edit</router-link>
      <input type='button' value='Delete' @click='deleteRecord(influencer.id);'>
    </li>


    <h1> Add New Influencer </h1>
    <form @submit.prevent="addRecord()" method="post">

      <p>Name: <input type="text" v-model="new_influencer.name" required></p>
      <p>Description: <input type="text" v-model="new_influencer.description" required></p>
      <p>Activity: <input type="text" v-model="new_influencer.activity" required></p>
      <p>Relevance: <input type="text" v-model="new_influencer.relevance" required></p>
      <p>Engagement: <input type="text" v-model="new_influencer.engagement" required></p>

      <input type="submit" value='Add' />
      <input type="reset" value="Clear" @click='resetRecord' />
    </form>
  </ul>
</template>



<script>
import API from 'axios'

export default {
  data() {
    return {
      influencers: [],
      new_influencer: {}
    }
  },
  mounted() {
    this.loadInfluencers()
  },
  methods: {
    loadInfluencers() {
      API.get('http://localhost:4000/v0/influencers')
        .then(res => {
          this.influencers = res.data.data
            .sort((a,b)=>{
              return (b.activity + b.relevance + b.engagement)/3
                    -(a.activity + a.relevance + a.engagement)/3
            })
        })
        .catch(alert)
    },
    deleteRecord(id){
      API.delete('http://localhost:4000/v0/influencers/'+id)
      .then(this.loadInfluencers)
      .catch(alert)
    },
    resetRecord(){
      this.new_influencer = {}
    },
    addRecord(){
      const influencer = this.new_influencer
      API.post('http://localhost:4000/v0/influencers', {influencer})
        .then(this.resetRecord)
        .then(this.loadInfluencers)
        .catch(alert)
    }
  }
}
</script>

<style lang="scss" scoped>
  li {
    width: 300px;
    display: inline-block;
  }
</style>
