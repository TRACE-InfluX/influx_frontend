<!--Template used for rendeing an individual influencer - used for show / GET influencer by ID-->
<template>
    <!-- added the entire influencer listing inside of the influencer-view to create an expanded thing, janky af -->

    <!-- influencer detailed view starts here -->
    <article v-if="type === 'detailed'" class="influencer-view influencer-detailed">
          <a v-bind:href ="influencer.url" target="_blank"><img class="detailed-left-icon" src="~@/assets/instagram_icon.png" height="20"/></a>
      <div class ="col-left">

        <p class="detailed-influencer-name">{{influencer.username}}</p>
        <img v-bind:src="influencer.profile_image"/>
      </div> <!-- col-left= -->
        <div class = "col-right">
            <div class = "top">
                <h3>{{influencer.name}}</h3>
               <p>Areas of Influence: {{influencer.location}}</p>
              <p class = "desc">{{influencer.description}}</p>
                <div class = "stats">

                  <div class="posts"> Posts: {{influencer.posts}} </div>
                  <div class="followers"> Followers: {{influencer.followers}} </div>
                  <div class="following"> Following: {{influencer.following}} </div>

                </div>
            </div>
          <hr> <!-- I'll replace this with an actual divider -->
            <div class = "bot">
                    <!-- progbar = vuejs styling -->       
                <span v-bind:style="progbar">Activity</span><span class="cssbar"  :style="{ backgroundColor: '#458eff', width: influencer.activity + '%'}"><span style="opacity: 0">{{influencer.activity}}</span></span>
                <span v-bind:style="progbar">Relevance</span><span class="cssbar" :style="{ backgroundColor: '#458eff', width: influencer.relevance + '%'}"><span style="opacity: 0">{{influencer.relevance}}</span></span>
                <span v-bind:style="progbar">Engagement</span><span class="cssbar" :style="{ backgroundColor: '#458eff', width: influencer.engagement + '%'}"><span style="opacity: 0">{{influencer.engagement}}</span></span>
            </div>
        </div> <!-- col-right" -->

      <hr>
  

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
    <div class="circle1" transform="translate(-400, 0) rotate(-90, 80, 80)"></div>
      <circle class="outline" cx="60" cy="60" fill="transparent" r="40" stroke="#eee" stroke-width="10"></circle>
      <text x="50%" y="40%" dominant-baseline="middle" text-anchor="middle" font-size="12px">reach</text>
      <circle cx="60" cy="60" fill="transparent" r="40" stroke="#21B063" stroke-dasharray="374.99111843077515" stroke-dashoffset="200.75525273624842" stroke-width="10"></circle>

      </svg>
      </div>

      <div class="donut">
             <!-- donut chart 2-->
   <svg width="120">
    <div class="circle2" transform="translate(-400, 0) rotate(-90, 80, 80)">  </div>
      <circle class="outline" cx="60" cy="60" fill="transparent" r="40" stroke="#eee" stroke-width="10"></circle>
        <text x="50%" y="40%" dominant-baseline="middle" text-anchor="middle" font-size="12px">conversion</text>
      <circle cx="60" cy="60" fill="transparent" r="40" stroke="goldenrod" stroke-dasharray="374.99111843077515" stroke-dashoffset="200.75525273624842" stroke-width="10"></circle>

  </svg>
      </div>
      <div class="donut">
 <!-- donut chart 3-->
  <svg width="120" viewbox="0 0 120 120">
    <div class="circle3" transform="translate(-400, 0) rotate(-90, 80, 80)">    </div>
      <circle class="outline" cx="60" cy="60" fill="transparent" r="40" stroke="#eee" stroke-width="10"></circle>
        <text x="50%" y="40%" dominant-baseline="middle" text-anchor="middle" font-size="12px">cost</text>
      <circle cx="60" cy="60" fill="transparent" r="40" stroke="#FB5454" stroke-dasharray="374.99111843077515" stroke-dashoffset="200.75525273624842" stroke-width="10"></circle>

  </svg>
      </div>

    </div>


          <p>Word Cloud</p>
          </div>
        </div> <!-- col-right-details -->
       </div> <!-- social feed holder ends here -->
    </article>


      <!-- influencer detailed view ends here -->

    <!-- influencer tile view - simple square display as seen on the homepage for popular influencers -->
    <article v-else-if="type === 'tile'" class="influencer-view influencer-tile">
        <img v-bind:src="influencer.profile_image"/>
        <p>{{influencer.name}}</p>
    </article>

    <!-- influencer tile view ends here -->


    <!-- influencer listing view starts here -->
    <article v-else-if="type === 'listing'" class="influencer-view influencer-listing">
        <a v-bind:href ="influencer.url" target="_blank"><img class="left-icon" src="~@/assets/instagram_icon.png" /></a>
      <div class ="col-left">
        <p class="list-influencer-name">{{influencer.username}}</p>
        <img v-bind:src="influencer.profile_image"/>
      </div> <!-- col-left= -->
      <div class = "col-right">
          <div class = "top">

              <h3>{{influencer.name}}</h3>
               <p>Areas of Influence: {{influencer.location}}</p>
              <p class = "desc">{{influencer.description}}</p>
               <div class = "stats">

                  <div class="posts"> Posts: {{influencer.posts}} </div>
                  <div class="followers"> Followers: {{influencer.followers}} </div>
                  <div class="following"> Following: {{influencer.following}} </div>

                </div>

          </div>
          <hr> <!-- I'll replace this with an actual divider -->
            <div class = "bot">
                    <!-- progbar = vuejs styling -->       
                <span v-bind:style="progbar">Activity</span><span class="cssbar"  :style="{ backgroundColor: '#458eff', width: influencer.activity + '%'}"><span style="opacity: 0">{{influencer.activity}}</span></span>
                <span v-bind:style="progbar">Relevance</span><span class="cssbar" :style="{ backgroundColor: '#458eff', width: influencer.relevance + '%'}"><span style="opacity: 0">{{influencer.relevance}}</span></span>
                <span v-bind:style="progbar">Engagement</span><span class="cssbar" :style="{ backgroundColor: '#458eff', width: influencer.engagement + '%'}"><span style="opacity: 0">{{influencer.engagement}}</span></span>

            </div>
      </div> <!-- col-right" -->
    </article>

    <!-- influencer listing view ends here-->

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
          // this is the logic behind the influencer activity / engagement / conversion bar
                progbar:{
                    display: 'inline-block',
                    backgroundColor: 'grey',
                    marginTop: '1px',
                    width: '125px',
                    color: 'white'
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
        padding: 1 * $units; 
        height: 8 * $units;
        font-size: 2 * $units; 
        text-align: center;
        display: grid; 
        grid-template-columns: auto auto;
        grid-gap: 1 * $units; 
    }

    .cssbar {

     display: inline-block; 
     margin-left: -19.25 * $units;  
     margin-top: 1px; 
     width: 100%;
      

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

    .influencer-tile:hover{
        cursor: pointer;
    }

   .detailed-left-icon {
      display: inline-block;
      margin-left: -60 * $units;
      margin-top: 1 * $units;
      height: 3 * $units;
      width: 3 * $units;
    }

  .influencer-detailed{
    border: 1px solid #999999;
    box-sizing: border-box;
    height: 100 * $units;
    width: 100 * $units;
    text-align: center;
    margin:auto;

    h2{
      display:inline-block;
    }

    // socialfeedholder

    .socialfeedholder{
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

     .detailed-influencer-name {
      margin-top: 1.5 * $units;
      margin-left: 1 * $units;
      font-weight: 800;
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
        width: 25 * $units;
        height: 25 * $units;
        border-radius:50%;
      }


    }

    h2{
      font-size: 3 * $units;
    }
  }
// influencer list view starts here
  .influencer-listing{
    border: 1px solid #999999;
    box-sizing: border-box;
    width: 100 * $units;
    height: 30 * $units;
    margin: auto;
    text-align: center;

    &:hover {
    box-shadow: inset 2.5px 0 0 0 $primary;
    }

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
   // icons on the left - new addition May 13 2019
    .left-icon {
      display: inline-block;
      margin-left: -60 * $units;
      margin-top: 1 * $units;
      height: 3 * $units;
      width: 3 * $units;
    }

  // .list-influencer-name - new addition May 13 2019

    .list-influencer-name {
      margin-top: 1.5 * $units;
      margin-left: 1 * $units;
      font-weight: 800;
    }

    .col-left{
      float:left;
      width:35%; // theseadd up to 100 thats wh
      height: 30 * $units;

      img{
        padding-top: 5%;
        padding-bottom: 5%;
        width: 25 * $units;
        height: 25 * $units;
        border-radius:50%;
      }
    }

    h2{
      font-size: 3 * $units;
    }
  }
</style>
