<!--Template used for rendeing an individual influencer - used for show / GET influencer by ID-->
<template>
    <!-- added the entire influencer listing inside of the influencer-view to create an expanded thing, janky af -->
    <article v-if="type === 'detailed'" class="influencer-view">
        <div class ="col-left">
          <img src="~@/assets/rose.png">
        </div> <!-- col-left= -->
        <div class = "col-right">
          <h2>{{influencer.name}}</h2>
          <p>{{influencer.description}}</p>
          <p>{{influencer.url}}</p>
          <p>Following: {{influencer.following}} | Following: {{influencer.following}} | Posts: {{influencer.posts}}</p>

          <hr> <!-- I'll replace this with an actual divider -->
          <br> <!--probably want a div or something instead of just using br to add space -->
          <p>Insert a bar with Activity here</p>
          <p>Insert a bar with Relevance here</p>
          <p>Insert a bar with Engagement here</p>
        </div> <!-- col-right" -->
        <hr> <!-- I'll replace this with an actual divider -->
        <div class = "col-left-details">
          <!-- Add the snapshot of socials here -->
        </div> <!-- col-left-details"-->
        <div class = "col-right-details">
          <button>Contact</button>
          <button class ="inline"> Favourite </button>
          <p>Activity: {{influencer.activity}}</p>
          <p>Relevance: {{influencer.relevance}}</p>
          <p>Engagement: {{influencer.engagement}}</p>
          <p>Reach: {{influencer.reach}}</p>
          <p>Conversion: {{influencer.conversion}}</p>
          <p>Cost: {{influencer.cost}}</p>
          <p>Areas of Influence: {{influencer.location}}</p>
          <p>Word Cloud</p>
        </div> <!-- col-right-details -->
    </article>

    <article v-else-if="type === 'tile'" class="influencer-view influencer-tile">
      <p>{{influencer.name}}</p>
    </article>

    <article v-else-if="type === 'listing'" class="influencer-view influencer-listing">
      <div class ="col-left">
        <img src="~@/assets/rose.png">
      </div> <!-- col-left= -->
      <div class = "col-right">
          <h2>{{influencer.name}}</h2>
          <p>{{influencer.description}}</p>
          <p>{{influencer.url}}</p>
          <p>Following: {{influencer.following}} | Following: {{influencer.following}} | Posts: {{influencer.posts}}</p>
          <hr>
          <br> <!--probably want a div or something instead of just using br to add space -->
          <p>Insert a bar with Activity here</p>
          <p>Insert a bar with Relevance here</p>
          <p>Insert a bar with Engagement here</p>
      </div> <!-- col-right" -->
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
    height: 100px;
    box-shadow: $shadow;

    img {
      background-image: url("~@/assets/influxlogo.png");
      display: block;
      width: 100%;
      height: 100%;
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

  .influencer-view{

    border: 1px solid #999999;
    box-sizing: border-box;
    border-radius: 2 * $units;
    height: 80 * $units;


      .col-right-details{
      float:right;
      width:60%;
      text-align:left !important;
      margin-left:10% !important;

      //gap between buttons
  
      .inline{ 
        margin: 3 * $units;
      }

      button {
      height: 5 * $units;
      background-color: #FFFFFF;
      color: #458eff;
      display: inline-block;
      width:25 * $units;
      border: solid #99999999;
      border-width: 1px;
      border-radius: 10px;
    }

      }
      .col-right{
      float:right;
      width:66.6%;
      padding-top:2%;
      padding-bottom:2%;
      height: 30 * $units;
      padding-right:10%;
      padding-left:10%;

      p {
        color: #999999;
      }

    }

    .col-left{
      float:left;
      width:33.3%;
      height: 30 * $units;

      img{
        padding-top: 5%;
        padding-bottom: 5%;
        max-width: 30 * $units;
        max-height: 30 * $units;
        border-radius:50%;
      }

    }


    h2{
      font-size: 3 * $units;
    }
  }

  .influencer-listing{
    height: 30 * $units;
    border: 1px solid #999999;
    box-sizing: border-box;
    border-radius: 2 * $units;

    .col-right{
      float:right;
      width:66.6%;
      padding-top:2%;
      padding-bottom:2%;
      height: 30 * $units;
      padding-right:10%;
      padding-left:10%;

      p {
        color: #999999;
      }

    }

    .col-left{
      float:left;
      width:33.3%;
      height: 30 * $units;

      img{
        padding-top: 5%;
        padding-bottom: 5%;
        max-width: 30 * $units;
        max-height: 30 * $units;
        border-radius:50%;
      }

    }


    h2{
      font-size: 3 * $units;
    }


  }
</style>
