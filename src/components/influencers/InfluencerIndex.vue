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
    </ul>
  </div>
</template>



<script>
import API from '@/api.js'

export default {
  data() {
      return {
        //array of influencers to display
        influencers: [
          {
            "id": 0,
            "name": "Subtle Asian Cat",
            "description": "A surprised Pikachu",
            "activity": 111,
            "relevance": 222,
            "engagement": 333
          },
          {
            "id": 1,
            "name": "Dankiel Yeetington",
            "description": "Dankest yeet watch maker",
            "activity": 44,
            "relevance": 55,
            "engagement": 66
          },
          {
            "id": 2,
            "name": "Dankiel Yeetington",
            "description": "An imposter Dank Yeet",
            "activity": 444,
            "relevance": 555,
            "engagement": 666
          },
          {
            "id": 4,
            "name": "Toni He",
            "description": "I hate Vancouver",
            "activity": 147,
            "relevance": 176,
            "engagement": 6
          },
          {
            "id": 5,
            "name": "Remy Truong",
            "description": "Oppress me daddy",
            "activity": 420,
            "relevance": 4,
            "engagement": 20
          },
          {
            "id": 6,
            "name": "Aaron Vong",
            "description": "Supreme Tool",
            "activity": 69,
            "relevance": 6,
            "engagement": 9
          },
          {
            "id": 7,
            "name": "Carlo Mendoza",
            "description": "Moar Subtle Asian Cats!!!",
            "activity": 7,
            "relevance": 77,
            "engagement": 777
          },
          {
            "id": 8,
            "name": "Eva Wong",
            "description": "I love Codeigniter",
            "activity": 10000000,
            "relevance": 20000000,
            "engagement": 30000000
          },
          {
            "id": 9,
            "name": "The Night King",
            "description": "Now I can finally get some sleep",
            "activity": 8,
            "relevance": 3,
            "engagement": 141
          },
          {
            "id": 10,
            "name": "Vidhi",
            "description": "Where are my Yeezys?",
            "activity": 49,
            "relevance": 42,
            "engagement": 100
          }
        ],
        selected_influencer: '',
        query: ''
    }
  },
  mounted() {
    // this.loadInfluencers()

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
      // Return full list if no query
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
    //   //GET for all influencers in influencer resource
    // API.get('/v0/influencers')
    //   .then(res => {
    //     this.influencers = res.data.data
    //   })
    //   .catch(alert)
    },
  }
}
</script>

<style lang="scss" scoped>
  li {
    width: 300px;
    display: block;
    margin:auto;
    padding: 12px;
  }
  .influencer-index {
    padding-top: 10%;
    text-align: center;
  }
</style>
