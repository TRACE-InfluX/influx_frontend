<!--Template for default view for all influencers-->
<template>
  <div class="influencer-index">
    <ul>
      <div class = "sort-dropdown">
        <button class = "sort-button">Sort By <img src="~@/assets/arrow-down.png"></button>
        <div class = "sort-content">
          <a href="#">Name</a>
          <a href="#">Posts</a>
          <a href="#">Followers</a>
          <a href="#">Following</a>
          <a href="#">Activity</a>
          <a href="#">Relevance</a>
          <a href="#">Engagement</a>
        </div>
      </div>
      <h2>{{ filtered_influencers.length }} results</h2>
      <!--Looping through all influencers retrieved from API call to backend-->
      <li v-for="influencer in rendered_influencers"
        :key="influencer.id"
        @mouseover="render_more(influencer)"
      >
        <influencer-view
          :influencer="influencer"
          :type="getType(influencer.id)"
          @click.native="select(influencer.id)"
        />
      </li>
    </ul>
  </div> <!--influencer index -->
</template>



<script>
import { STATE } from '@/store.js'

export default {
  data() {
      return {
        selected_influencer: '',
        render_limit: 4
    }
  },
  mounted() {
    this.$parent.searching = true;
  },
  computed: {
    ...STATE,
    keywords() {
      return this.$parent.query.toLowerCase().split(' ')
    },
    filtered_influencers() {
      // Return full list if no query
      // return !this.query ? this.influencers:
      return !this.$parent.query ? this.influencers:
      // Else filter by keywords
      this.influencers.filter(influencer => {
        for (let key of this.keywords) {
          // Test that every key matches at least one criterion
          if ( !influencer.name.toLowerCase().includes(key)
            && !influencer.username.toLowerCase().includes(key)
            && !influencer.description.toLowerCase().includes(key)
            && !influencer.location.toLowerCase().includes(key)
            && !influencer.weights[key]
            && !influencer.weights['#' + key]
          ) {
            // Reject the influencer if any key matches zero criteria
            return false
          }
        }
        // If all keys have a match, allow through the filter
        return true
      })
    },
    rendered_influencers() {
      return this.filtered_influencers.slice(0,this.render_limit)
    }
  },
  methods: {
    select(id) {
      this.selected_influencer = id;
    },
    getType(id) {
      return id === this.selected_influencer ? "detailed" : "listing"
    },
    render_more(influencer) {
      // This will lazy load profiles into the ui to make the experience smoother
      // it will always render a depth 10 more than the current hover
      this.render_limit = Math.max(this.render_limit, 10 + this.filtered_influencers.indexOf(influencer))
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
