<!--Template for default view for all influencers-->
<template>
  <div class="influencer-index">
    <ul>
      <div class = "sort-dropdown">
        <button class = "sort-button">Sort By <img src="~@/assets/arrow-down.png"></button>
        <div class = "sort-content">
          <a href="#" @click.prevent="sort_influencers('default')">Default</a>
          <a href="#" @click.prevent="sort_influencers('relevance')">Relevance</a>
          <a href="#" @click.prevent="sort_influencers('engagement')">Engagement</a>
          <a href="#" @click.prevent="sort_influencers('activity')">Activity</a>
          <a href="#" @click.prevent="sort_influencers('profit')">Profit</a>
          <a href="#" @click.prevent="sort_influencers('profit/cost')">Profit/Cost</a>
          <a href="#" @click.prevent="sort_influencers('followers')">Followers</a>
          <a href="#" @click.prevent="sort_influencers('posts')">Posts</a>
          <a href="#" @click.prevent="sort_influencers('following')">Following</a>
        </div>
      </div>
      <h2>{{ influencers.length }} results</h2>
      <!--Looping through all influencers retrieved from API call to backend-->
      <li v-for="influencer in rendered_influencers"
        :key="influencer._id"
        @mouseover="render_more(influencer)"
      >
        <influencer-view
          :influencer="influencer"
          :weights="weights"
          :type="getType(influencer._id)"
          v-on:expand="select(influencer._id)"
          v-on:collapse="select"
        />
      </li>
    </ul>
    <back-to-top class = "btn-to-top">Back to Top</back-to-top>
  </div> <!--influencer index -->
</template>



<script>
import { STATE, ACTIONS } from '@/store.js'
import API from '@/api.js'

export default {
  data() {
      return {
        selected_influencer: '',
        weights: {},
        render_limit: 4
    }
  },
  computed: {
    ...STATE,
    rendered_influencers() {
      return this.influencers.slice(0,this.render_limit)
    }
  },
  methods: {
    ...ACTIONS,
    select(id) {
      this.selected_influencer = id;
      this.weights = {}
      if (id) {
        let params = { _id: id }
        API.get('/v0/weights', { params }).then(res => {
          this.weights = res.data.processed_weights
        })
      }
    },
    getType(id) {
      return id === this.selected_influencer ? "detailed" : "listing";
    },
    render_more(influencer) {
      // This will lazy load profiles into the ui to make the experience smoother
      // it will always render a depth 10 more than the current hover
      this.render_limit = Math.max(this.render_limit, 10 + this.influencers.indexOf(influencer))
    }
  }
}
</script>

<style lang="scss" scoped>

  .sort-dropdown {
    position: relative;
    display: inline-block;
    margin-left: 90 * $units;
  }

  .sort-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 20 * $units;
    box-shadow: $shadow;
    z-index: 1;

    a {
      color: black;
      padding: 1 * $units 2 * $units;
      text-decoration: none;
      display: block;
    }

    a:hover {
      background-color: $primary;
      color: white;
    }
  }

  .sort-button {
    color: black;
    background-color: white;
    img {
      height: 1 * $units;
      width: 1 * $units;
    }
  }

  .sort-dropdown:hover .sort-content {display: block;}
  .sort-dropdown:hover .sort-button {background-color: #999999;}

  ul {
    width: 100%;
  }

  li {

    display: block;
    width: 100%;
    padding: 2 * $units;

  }

  .influencer-index {
    padding-top: 10%;
    text-align: center;
  }

</style>
