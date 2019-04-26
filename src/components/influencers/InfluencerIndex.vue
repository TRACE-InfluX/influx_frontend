<!--Template for default view for all influencers-->
<template>
  <ul class="influencer-index">
    <h1>Influencers</h1>
      <!--Looping through all influencers retrieved from API call to backend-->
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
      <!--on submit form addrecord i.e. POST to backend-->
    <form @submit.prevent="addRecord()" method="post">

      <p><input type="text" v-model="new_influencer.name" required placeholder="Enter name"></p>
      <p><input type="text" v-model="new_influencer.description" required placeholder="Enter description"></p>
      <p><input type="text" v-model="new_influencer.activity" required placeholder="Enter activity (number)"></p>
      <p><input type="text" v-model="new_influencer.relevance" required placeholder="Enter relevance (number)"></p>
      <p><input type="text" v-model="new_influencer.engagement" required placeholder="Enter engagement (number)"></p>

      <input type="submit" value='Add' />
      <input type="reset" value="Clear" @click='resetRecord' />
    </form>
  </ul>
</template>



<script>
  import API from '@/api.js'

export default {
  data() {
      return {
        //array of influencers to display
        influencers: [],
        //data for new influencer being added
        new_influencer: {}
    }
  },
  mounted() {
    this.loadInfluencers()
  },
  methods: {
      loadInfluencers() {
        //GET for all influencers in influencer resource
      API.get('/v0/influencers')
        .then(res => {
          this.influencers = res.data.data
            .sort((a,b)=>{
              return (b.activity + b.relevance + b.engagement)/3
                    -(a.activity + a.relevance + a.engagement)/3
            })
        })
        .catch(alert)
      },
      //DELETE call to backend
    deleteRecord(id){
      API.delete('/v0/influencers/'+id)
      .then(this.loadInfluencers)
      .catch(alert)
      },
    //function to lear form data
    resetRecord(){
      this.new_influencer = {}
      },
    //adding a new influencer via POST
    addRecord(){
      const influencer = this.new_influencer
      API.post('/v0/influencers', {influencer})
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
