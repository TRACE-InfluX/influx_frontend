<!--Template used for rendeing an individual influencer - used for show / GET influencer by ID-->
<template>
  <div class="influencer-view">
      <h2>Name: {{influencer.name}}</h2>
      <p>Description: {{influencer.description}}</p>
      <p>Activity: {{influencer.activity}}</p>
      <p>Relevance: {{influencer.relevance}}</p>
      <p>Engagement: {{influencer.engagement}}</p>
  </div>
</template>

<script>
    //package to send httprequests
    import API from '@/api.js'

    export default {
        data() {
            return {
                influencer: {}
            }
        },
        mounted() {
            //Setting id given by url / parameter from id from router
            var routeparams = this.$router.currentRoute.params.id;
            //appending id to URL to backend application in a RESTish manner
            var actualroute = '/v0/influencers/' + routeparams;
            API.get(actualroute)
                .then(res => {
                    //populating influencer data with response data
                    this.influencer = res.data.data
                })
                .catch(alert)
        }
    }
</script>

<!--component specific styling-->
<style lang="scss" scoped>

    li {
        width: 300px;
        display: inline-block;
    }
</style>
