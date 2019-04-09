<template>
  <ul>
    <h1>Influencers</h1>
    <li v-for="influencer in influencers" :key="influencer.id">
      <h2>Name: {{influencer.name}}</h2>
      <p>Description: {{influencer.description}}</p>
      <p>Activity: {{influencer.activity}}</p>
      <p>Relevance: {{influencer.relevance}}</p>
      <p>Engagement: {{influencer.engagement}}</p>
      <input type='button' value='Delete' @click='deleteRecord(index, influencer.id);'>
      
    </li>

    <input type='button' value='Add' @click='addRecord();'>
  </ul>
</template>

<script>
import API from 'axios'

export default {
  data() {
    return {
      influencers: []
    }
  },
  mounted() {
    API.get('http://localhost:4000/v0/influencers')
      .then(res => {
        this.influencers = res.data.data
          .sort((a,b)=>{
            return (b.activity + b.relevance + b.engagement)/3 
                  -(a.activity + a.relevance + a.engagement)/3
          })
      })
      .catch(alert)
  }
}
</script>

<style lang="scss" scoped>
  li {
    width: 300px;
    display: inline-block;
  }
</style>
