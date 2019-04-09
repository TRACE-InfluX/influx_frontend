<template>
  <ul>
    <h1>Influencers</h1>
    <li v-for="influencer in influencers" :key="influencer.id">
      <h2>Name: {{influencer.name}}</h2>
      <p>Description: {{influencer.description}}</p>
      <p>Activity: {{influencer.activity}}</p>
      <p>Relevance: {{influencer.relevance}}</p>
      <p>Engagement: {{influencer.engagement}}</p>
      <input type='button' value='Delete' @click='deleteRecord(influencer.id);'>
      
    </li>

    
    <h1> Add New Influencer </h1>
    <form>

    <p>Name: <input type="text" name="name" required></p>
    <p>Description: <input type="text" name="description" required></p>
    <p>Activity: <input type="text" name="activity" required></p>
    <p>Relevance: <input type="text" name="relevance" required></p>
    <p>Engagement: <input type="text" name="engagement" required></p>

    <input type="submit" value='Add' @click='openForm();'>

    </form>

    

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
    addRecord(){
      if(this.name != '' && this.description != '' && this.activity != '' && this.relevance !='' && this.engagement !='')
      API.post('http://localhost:4000/v0/influencers/'+id)
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
