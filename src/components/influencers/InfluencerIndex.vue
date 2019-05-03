<!--Template for default view for all influencers-->
<template>
  <div class="influencer-index">
    <input ref="search" type="search" v-model="query">
    <h1>Influencers</h1>
    <ul>
      <h2>Results for: {{keywords}}</h2>
      <!--Looping through all influencers retrieved from API call to backend-->
      <li v-for="influencer in filtered_influencers" :key="influencer.id">
        <influencer-view 
          :influencer="influencer"
          :type="getType(influencer.id)"
          @click.native="select(influencer.id)"
        />
      </li>
      <br>
    </ul>
  </div> <!--influencer index -->
</template>



<script>
import API from '@/api.js'

export default {
  data() {
      return {
        //array of influencers to display
        influencers: [],
        selected_influencer: '',
        query: ''
    }
  },
  mounted() {
    this.loadInfluencers()

    this.query = localStorage.getItem("query") || '';

    this.$refs.search.focus();
    window.onkeydown = () => {
      this.$refs.search.focus();
    }
  },
  computed: {
    keywords() {
      return this.query.split(' ')
    },
    filtered_influencers() {
      // Return full list if no query or no list loaded
      return (!this.query ? this.influencers :
        // Else check for match between keywords and any part of name/description
        this.influencers.filter(influencer => {
          return this.keywords.find(
            k => influencer.name.toLowerCase().includes(k.toLowerCase()) ||
                 influencer.description.toLowerCase().includes(k.toLowerCase())
          )
      }))
      .sort((a,b) => {
        // Average between our three metrics
        return (b.activity + b.relevance + b.engagement)/3
              -(a.activity + a.relevance + a.engagement)/3
      })
    }
  },
  watch: {
    query(q) {
      localStorage.setItem("query", q)
    }
  },
  methods: {
    select(id) {
      this.selected_influencer = id;
    },
    getType(id) {
      return id === this.selected_influencer ? "detailed" : "listing"
    },
    loadInfluencers() {
      API.get('/v0/influencers')
      .then(res => {
        this.influencers = res.data
      })
      .catch(alert)
    },
  }
}
</script>

<style lang="scss" scoped>

  li {

    display: block;
    margin:auto;
    padding: 2 * $units;
    

  }
  .influencer-index {
    padding-top: 10%;
    text-align: center;
    padding-left:5%;
    padding-right:5%;
    
  }

  
</style>
