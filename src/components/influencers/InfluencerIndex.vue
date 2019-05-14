<!--Template for default view for all influencers-->
<template>
  <div class="influencer-index">
    <ul>
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
    // this.$parent.$refs.search.focus();
    // window.onkeydown = () => {
    //   this.$parent.$refs.search.focus();
    // }
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
