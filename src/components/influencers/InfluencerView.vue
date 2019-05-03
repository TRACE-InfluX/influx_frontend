<!--Template used for rendeing an individual influencer - used for show / GET influencer by ID-->
<template>

    <article v-if="type === 'detailed'" class="influencer-view">
        <h2>{{influencer.name}}</h2>
        <h3>{{influencer.description}}</h3>
        <p>Activity: {{influencer.activity}}</p>
        <p>Relevance: {{influencer.relevance}}</p>
        <p>Engagement: {{influencer.engagement}}</p>
        <button>Contact</button>
        <button>Favourite</button>
        <p>Reach</p>
        <p>Conversion</p>
        <p>Cost</p>
        <p>Areas of Influence</p>
        <p>Word Cloud</p>
    </article>

    <article v-else-if="type === 'tile'" class="influencer-view influencer-tile">
      <img>
      <p>{{influencer.name}}</p>
    </article>

    <article v-else-if="type === 'listing'" class="influencer-view">
        <h2>{{influencer.name}}</h2>
        <p>{{influencer.description}}</p>
        <p>Activity: {{influencer.activity}}</p>
        <p>Relevance: {{influencer.relevance}}</p>
        <p>Engagement: {{influencer.engagement}}</p>
    </article>

</template>

<script>
    //package to send httprequests
    // import API from '@/api.js'

    export default {
        props: {
            type: String,
            influencer: Object
        },
        data() {
            return {
            }
        },
        mounted() {
            // //Setting id given by url / parameter from id from router
            // var routeparams = this.$router.currentRoute.params.id;
            // //appending id to URL to backend application in a RESTish manner
            // var actualroute = '/v0/influencers/' + routeparams;
            // API.get(actualroute)
            //     .then(res => {
            //         //populating influencer data with response data
            //         this.influencer = res.data.data
            //     })
            //     .catch(alert)
        }
    }
</script>

<!--component specific styling-->
<style lang="scss" scoped>

  .influencer-tile {

    position: relative;
    display: inline-block;
    width: 24 * $units;
    height: 26 * $units;
    box-shadow: $shadow;

    img {
      background-image: url("~@/assets/influxlogo.png");
      display: block;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
    }

    p {
      $height: 6 * $units;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: $height;
      line-height: $height;
      display: block;
      background-color: white;
      text-align: center;
      font-size: 2 * $units;
    }
  }
</style>
