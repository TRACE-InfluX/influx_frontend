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
                <h2>{{influencer.username}}</h2>
                <a v-bind:href ="influencer.url" target="_blank"><img src = "~@/assets/instagram_icon.png" class = "icon"></a>
                <p>{{influencer.name}}</p>
                <p class = "desc">{{influencer.description}}</p>
                <div class = "stats">
                  
                  <div class="followers"> Followers: {{influencer.followers}} </div>
                  <div class="following"> Following: {{influencer.following}} </div>
                  <div class="posts"> Posts: {{influencer.posts}} </div>
                </div> 
            </div>
          <hr> <!-- I'll replace this with an actual divider -->
            <div class = "bot">
                    <!-- progbar = vuejs styling -->
                <div class="wordsmetric">
                <p>Activity: </p>
                <p>Relevance: </p>
                <p>Engagement:</p>
                </div>
                <div class="barmetric">
                <span v-bind:style="progbar"><span class="cssbar"  :style="{ backgroundColor: '#458eff', width: influencer.activity + '%'}"><span style="opacity: 0">{{influencer.activity}}</span></span></span>
                <span v-bind:style="progbar"><span class="cssbar" :style="{ backgroundColor: '#458eff', width: influencer.relevance + '%'}"><span style="opacity: 0">{{influencer.relevance}}</span></span></span>
                <span v-bind:style="progbar"><span class="cssbar" :style="{ backgroundColor: '#458eff', width: influencer.engagement + '%'}"><span style="opacity: 0">{{influencer.engagement}}</span></span></span>
               </div>
            
            </div>
        </div> <!-- col-right" -->
        </div> <!-- influencer listing -->
        <hr> <!-- I'll replace this with an actual divider -->

        <!-- social feed holder is the overall container for the bottom half -->
       <div class="socialfeedholder"> 
        <div class = "col-left-details">
          <!-- Add the snapshot of socials here -->
          <img class="feedpreview" src="https://picsum.photos/300/400" />
      
          <!-- col-left-details"-->
        <div class = "col-right-details">
          <button>Contact</button>
          <button class ="inline"> Favourite </button>

          <div class="donut-chart">

          <!-- donut charts start here -->   
                     
                     
           <!-- donut chart 1 -->

           <div class="donut">
          <svg width="120">
    <class="circle1" transform="translate(-400, 0) rotate(-90, 80, 80)">
      <circle class="outline" cx="60" cy="60" fill="transparent" r="40" stroke="#eee" stroke-width="10"></circle>
      <circle cx="60" cy="60" fill="transparent" r="40" stroke="#21B063" stroke-dasharray="374.99111843077515" stroke-dashoffset="200.75525273624842" stroke-width="10"></circle>
      </svg>
      </div> 
      <div class="donut">
             <!-- donut chart 2--> 
   <svg width="120">
    <class="circle2" transform="translate(-400, 0) rotate(-90, 80, 80)">
      <circle class="outline" cx="60" cy="60" fill="transparent" r="40" stroke="#eee" stroke-width="10"></circle>
      <circle cx="60" cy="60" fill="transparent" r="40" stroke="goldenrod" stroke-dasharray="374.99111843077515" stroke-dashoffset="200.75525273624842" stroke-width="10"></circle>
  </svg>
      </div>
      <div class="donut">
 <!-- donut chart 3--> 
  <svg width="120" viewbox="0 0 120 120">
    <class="circle3" transform="translate(-400, 0) rotate(-90, 80, 80)">
      <circle class="outline" cx="60" cy="60" fill="transparent" r="40" stroke="#eee" stroke-width="10"></circle>
      <circle cx="60" cy="60" fill="transparent" r="40" stroke="#FB5454" stroke-dasharray="374.99111843077515" stroke-dashoffset="200.75525273624842" stroke-width="10"></circle>
  </svg>
      </div> 

    </div> 


          <p>Reach: {{influencer.reach}}</p>
          <p>Conversion: {{influencer.conversion}}</p>
          <p>Cost: {{influencer.cost}}</p>
          <p>Areas of Influence: {{influencer.location}}</p>
          <p>Word Cloud</p>
          </div>
        </div> <!-- col-right-details -->
       </div> <!-- social feed holder ends here --> 
    </article>

    <article v-else-if="type === 'tile'" class="influencer-view influencer-tile">
        <img v-bind:src="influencer.profile_image"/>
        <p>{{influencer.username}}</p>
    </article>

    <article v-else-if="type === 'listing'" class="influencer-view influencer-listing">
      <div class ="col-left">
        <img v-bind:src="influencer.profile_image"/>
      </div> <!-- col-left= -->
      <div class = "col-right">
          <div class = "top">
              <h2>{{influencer.username}}</h2>
              <a v-bind:href ="influencer.url" target="_blank"><img src = "~@/assets/instagram_icon.png" class = "icon"></a>
              <p>{{influencer.name}}</p>
              <p class = "desc">{{influencer.description}}</p>
               <div class = "stats">
                  
                  <div class="followers"> Followers: {{influencer.followers}} </div>
                  <div class="following"> Following: {{influencer.following}} </div>
                  <div class="posts"> Posts: {{influencer.posts}} </div>
                </div>

          </div>
          <hr> <!-- I'll replace this with an actual divider -->
          <div class = "bot">
               <!-- progbar = vuejs styling -->
                <div class="wordsmetric">
                <p>Activity: </p>
                <p>Relevance: </p>
                <p>Engagement:</p>
                </div>
                <div class="barmetric">
                <span v-bind:style="progbar"><span class="cssbar"  :style="{ backgroundColor: '#458eff', width: influencer.activity + '%'}"><span style="opacity: 0">{{influencer.activity}}</span></span></span>
                <span v-bind:style="progbar"><span class="cssbar" :style="{ backgroundColor: '#458eff', width: influencer.relevance + '%'}"><span style="opacity: 0">{{influencer.relevance}}</span></span></span>
                <span v-bind:style="progbar"><span class="cssbar" :style="{ backgroundColor: '#458eff', width: influencer.engagement + '%'}"><span style="opacity: 0">{{influencer.engagement}}</span></span></span>
                </div>
            
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
                    display: 'inline-block', 
                    backgroundColor: 'white',
                    margin: '1px',
                    width: '200px',
                    color: 'white',
                    
                   
                },
                activitybar:{
                  backgroundColor: '#458eff',
                  width: 'influencer.activity' + 'px',
                  color: 'white'
                },
                 engagementbar:{
                  backgroundColor: '#458eff',
                  width: 'influencer.engagement' + 'px',
                  color: 'white'
                },
                relevancebar:{
                  backgroundColor: '#458eff',
                  width: 'influencer.relevance' + 'px',
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
            window.open(url, '_blank');
          }
        }
    }
</script>

<!--component specific styling-->
<style lang="scss" scoped>

    svg{
      display: inline; 
    }

    .stats {
        font-weight: bold;
        padding: 1 * $units;
        display: flex; 
        justify-content: space-evenly;
    }

    .top {
        height: 15 * $units;
        border-bottom: #999999;
        margin: 1 * $units;
        .desc {
            height: 5.5 * $units;
            overflow: hidden;
        }
    }

    .bot {
        height: 10 * $units;
        margin: 1 * $units;
        font-weight: bold;
        text-align: left;
    }

    .cssbar {

      display: block; 

    }

    .wordsmetric
    {
      display: flex; 
      justify-content: center; 
      flex-flow: column wrap; 
      width: 24%;
      border: 2px solid #D0D0D0; 
      background-color: #D0D0D0; 
      color: white; 
      font-size: 1rem; 
      
    }
    .barmetric
    {
      margin-top: -62px; 
      margin-left: 100px; 
      display: flex; 
      justify-content: center; 
      flex-flow: column wrap; 
    }

  .influencer-tile {

    position: relative;
    display: inline-block;
    width: 24 * $units;
    height: 24 * $units;
    box-shadow: $shadow;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }

    p {
      font-weight: bold;
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

    // socialfeedholder

    .socialfeedholder
    {
      margin-top: 3.125 * $units;
      margin-left: -7.5 * $units;
       
    }

    // preview of the social media page positioning -- currently a placeholder
    .feedpreview {
     margin-top: 2.75 * $units;  
     margin-left: 5 * $units; 
    }

    .donut{

      display: inline; 


    }
    .col-left-details{
      margin-top: 2.5 * $units; 
    }

    .influencer-listing-detailed{
    height: 30 * $units;
    border:none;
    }

      .col-right-details{
      float: right; 
      width:50%;
      text-align: left;
      margin-left:1%;

      //gap between buttons

        .inline{
        margin: 2 * $units;
        }

        button {
        height: 5 * $units;
        background-color: #FFFFFF;
        color: #458eff;
        display: inline-block;
        width: 22 * $units;
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
