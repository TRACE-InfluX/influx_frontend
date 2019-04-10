<template>
  <ul>
    <h1>Influencers</h1>
    <li v-for="influencer in influencers" :key="influencer.id">
      <h2>Name: {{influencer.name}}</h2>
      <p>Description: {{influencer.description}}</p>
      <p>Activity: {{influencer.activity}}</p>
      <p>Relevance: {{influencer.relevance}}</p>
      <p>Engagement: {{influencer.engagement}}</p>
      <router-link :to="`/influencers/${influencer.id}/edit`" tag="button">Edit</router-link>
      <input type='button' value='Delete' @click='deleteRecord(influencer.id);'>
    </li>


    <h1> Add New Influencer </h1>
    <form @submit.prevent="addRecord()" method="post">

    <p>Name: <input type="text" v-model="name" required></p>
    <p>Description: <input type="text" v-model="description" required></p>
    <p>Activity: <input type="text" v-model="activity" required></p>
    <p>Relevance: <input type="text" v-model="relevance" required></p>
    <p>Engagement: <input type="text" v-model="engagement" required></p>

    <input type="submit" value='Add' @click='addRecord()'>
    <input type="reset" value="Clear" @click='resetRecord()'>
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
    resetRecord(form){
      var inputs = form.getElementsByTagName('input');
    for (var i = 0; i<inputs.length; i++) {
        switch (inputs[i].type) {
            // case 'hidden':
            case 'text':
                inputs[i].value = '';
                break;
        }
    }
    },
    addRecord: function(){
      const influencer = {
      name: this.name,
      description: this.description,
      activity: this.activity ,
      relevance: this.relevance,
      engagement: this.engagement,
      }
      API.post('http://localhost:4000/v0/influencers', {influencer});
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
