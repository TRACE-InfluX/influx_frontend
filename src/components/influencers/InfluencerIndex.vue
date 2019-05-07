<!--Template for default view for all influencers-->
<template>
  <div class="influencer-index">
    <input class="search-bar" ref="search" type="search" v-model="query" placeholder="Type to Search...">
    <ul>
      <h2>{{ filtered_influencers.length }} results</h2>
      <!--Looping through all influencers retrieved from API call to backend-->
      <li v-for="influencer in rendered_influencers" :key="influencer.id">
        <influencer-view 
          :influencer="influencer"
          :type="getType(influencer.id)"
          @click.native="select(influencer.id)"
          @mouseover.native="update_limit(influencer)"
        />
      </li>
      <br>
    </ul>
  </div> <!--influencer index -->
</template>



<script>
import { STATE } from '@/store.js'

export default {
  data() {
      return {
        selected_influencer: '',
        query: '',
        limit: 5
    }
  },
  mounted() {
    this.query = localStorage.getItem("query") || '';

    this.$refs.search.focus();
    window.onkeydown = () => {
      this.$refs.search.focus();
    }
  },
  computed: {
    ...STATE,
    keywords() {
      return this.query.split(' ')
    },
    filtered_influencers() {
      // Return full list if no query or no list loaded
      return (!this.query ? this.influencers:
        // Else check for match between keywords and any part of name/description
        this.influencers.filter(influencer => {
          return this.keywords.find(
            k => {
              let key = k.toLowerCase()
              return influencer.name.toLowerCase().includes(key) ||
                     influencer.description.toLowerCase().includes(key) ||
                     influencer.weights[key] ||
                     influencer.weights['#' + key] ||
                     influencer.location.toLowerCase().includes(key)
            }
          )
        })
      )
      .sort((a,b) => b.engagement - a.engagement)
    },
    rendered_influencers() {
      return this.filtered_influencers.slice(0,this.limit)
    }
  },
  watch: {
    query(q) {
      localStorage.setItem("query", q)
      scrollTo(0,0)
    }
  },
  methods: {
    select(id) {
      this.selected_influencer = id;
    },
    getType(id) {
      return id === this.selected_influencer ? "detailed" : "listing"
    },
    update_limit(influencer) {
      this.limit = 5 + this.filtered_influencers.indexOf(influencer)
    }
  }
}
</script>

<style lang="scss" scoped>

  li {

    display: block;
    margin:auto;
    padding: 2 * $units;
    display:inline;

    

  }
  .influencer-index {
  
    padding-top: 10%;
    padding-left:5%;
    padding-right:5%;
    text-align: center;
    
  }

  .search-bar {
        $height: 5 * $units;
        font-size: 1.8 * $units;
        width: 57 * $units; 
        height: $height;  
        border-radius: 0.5 * $units;
        border:none;
        box-shadow: $shadow;
        padding-left: 1 * $units;
        padding-right:1 * $units;
        margin-right: 1 * $units;
        padding-right: 1 * $units;
        margin-bottom: 5%;
        margin-top: 5%;
      }
  
</style>
