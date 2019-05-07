<!--Template used for rendeing an individual influencer - used for show / GET influencer by ID-->
<template>
    <!-- added the entire influencer listing inside of the influencer-view to create an expanded thing, janky af -->
    <article v-if="type === 'detailed'" class="influencer-view influencer-detailed">
      <div class = "influencer-listing-detailed">
        <div class ="col-left">
        <img v-bind:src="influencer.profile_image"/>
        </div> <!-- col-left= -->
        <div class = "col-right">
            <div class = "top">
                <h2>{{influencer.name}}</h2>
                <a v-bind:href ="influencer.url" target="_blank"><img src = "~@/assets/instagram_icon.png" class = "icon"></a>
                <p class = "desc">{{influencer.description}}</p>
                <p class = "stats">Followers: {{influencer.followers}} | Following: {{influencer.following}} | Posts: {{influencer.posts}}</p>
            </div>
          <hr> <!-- I'll replace this with an actual divider -->
            <div class = "bot">
                <!-- progbar = vuejs styling -->
                <p>Activity: <span  v-bind:style="progbar">{{influencer.activity}} </span></p>
                <p>Relevance: <span v-bind:style="progbar">{{influencer.relevance}}</span></p>
                <p>Engagement:  <span  v-bind:style="progbar">{{influencer.engagement}}</span></p>
            </div>
        </div> <!-- col-right" -->
        </div> <!-- influencer listing -->
        <hr> <!-- I'll replace this with an actual divider -->
        <div class = "col-left-details">
          <!-- Add the snapshot of socials here -->
        </div> <!-- col-left-details"-->
        <div class = "col-right-details">
          <button>Contact</button>
          <button class ="inline"> Favourite </button>
          <p>Reach: {{influencer.reach}}</p>
          <p>Conversion: {{influencer.conversion}}</p>
          <p>Cost: {{influencer.cost}}</p>
          <p>Areas of Influence: {{influencer.location}}</p>
          <p>Word Cloud</p>
        </div> <!-- col-right-details -->
    </article>

    <article v-else-if="type === 'tile'" class="influencer-view influencer-tile">
        <img v-bind:src="influencer.profile_image"/>
        <p>{{influencer.name}}</p>
    </article>

    <article v-else-if="type === 'listing'" class="influencer-view influencer-listing">
      <div class ="col-left">
        <img v-bind:src="influencer.profile_image"/>
      </div> <!-- col-left= -->
      <div class = "col-right">
          <div class = "top">
              <h2>{{influencer.name}}</h2>
              <a v-bind:href ="influencer.url" target="_blank"><img src = "~@/assets/instagram_icon.png" class = "icon"></a>
              <p class = "desc">{{influencer.description}}</p>
              <p class = "stats">Followers: {{influencer.followers}} | Following: {{influencer.following}} | Posts: {{influencer.posts}}</p>
          </div>
          <hr> <!-- I'll replace this with an actual divider -->
          <div class = "bot">
              <!-- progbar = vuejs styling -->
              <p>Activity: <span  v-bind:style="progbar">{{influencer.activity}} </span></p>
              <p>Relevance: <span v-bind:style="progbar">{{influencer.relevance}}</span></p>
              <p>Engagement:  <span  v-bind:style="progbar">{{influencer.engagement}}</span></p>
          </div>
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
          // progress-bar vuejs styling
                progbar:{
                    backgroundColor: '#458eff',
                    width: 'influencer.relevance',
                    color: 'white'
                }
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

        },
        methods: {
          linktoURL(url){
            this.influencer.url = url;
            window.open(url, _blank);
          }
        }
    }
</script>

<!--component specific styling-->
<style lang="scss" scoped>

    .stats {
        font-weight: bold;
        padding: 1 * $units;
    }

    .top {
        height: 15 * $units;
        border-bottom: #999999;
        margin: 1 * $units;
        .desc {
            height: 7.5 * $units;
            overflow: hidden;
        }
    }

    .bot {
        height: 10 * $units;
        margin: 1 * $units;
        font-weight: bold;
        text-align: left;
    }

  .influencer-tile {

    position: relative;
    display: inline-block;
    width: 24 * $units;
    height: 24 * $units;
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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-left: 1 * $units;
      padding-right: 1 * $units;
    }
  } //influencer tile

  .influencer-detailed{
    border: 1px solid #999999;
    box-sizing: border-box;
    border-radius: 2 * $units;
    height: 100 * $units;
    width: 100 * $units;
    text-align: center;
    margin:auto;

    h2{
      display:inline-block;
    }

    .influencer-listing-detailed{
    height: 30 * $units;
    border:none;
    }

      .col-right-details{
      float:right;
      width:60%;
      text-align: left;
      margin-left:5%;

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

      } //col-right-details

      .col-right{
      float:right;
      width:65%;
      padding-top:2%;
      padding-bottom:2%;
      height: 30 * $units;
      padding-right:5%;
      padding-left:5%;

        .icon{
        height:4 * $units;
        width:4 * $units;
        float:left;
      }
    } //col-right-details

    .col-left{
      float:left;
      width:35%;
      height: 30 * $units;

      img{
        padding-top: 5%;
        padding-bottom: 5%;
        width: 30 * $units;
        height: 30 * $units;
        border-radius:50%;
      }
    }

    h2{
      font-size: 3 * $units;
    }
  }

  .influencer-listing{
    border: 1px solid #999999;
    box-sizing: border-box;
    border-radius: 2 * $units;
    width: 100 * $units;
    height: 30 * $units;
    margin: auto;
    text-align: center;

    h2{
    display:inline-block;
    }

    .col-right{
      float:right;
      width:65%;
      padding-top:2%;
      padding-bottom:2%;
      height: 30 * $units;
      padding-right:5%;
      padding-left:5%;

      .icon{
        height:4 * $units;
        width:4 * $units;
        float:left;
      }
    }

    .col-left{
      float:left;
      width:35%; // theseadd up to 100 thats wh
      height: 30 * $units;

      img{
        padding-top: 5%;
        padding-bottom: 5%;
        width: 30 * $units;
        height: 30 * $units;
        border-radius:50%;
      }
    }

    h2{
      font-size: 3 * $units;
    }
  }
</style>
