<!--Template used for rendeing an individual influencer - used for show / GET influencer by ID-->
<template>
<<<<<<< HEAD

    <article v-if="type === 'detailed'" class="influencer-view influencer-detailed">
        <div class="profile-photo"></div>
         <div class="embed-insta-post">
        <div class="main-description">
        <h2>name: {{influencer.name}}</h2>
        <h3>keywords:{{influencer.description}}</h3>
        <p>Activity: {{influencer.activity}}</p>
        <p>Relevance: {{influencer.relevance}}</p>
        <p>Engagement: {{influencer.engagement}}</p>


        <svg width="100" height="100" class="chart">
        <circle r="25" cx="50" cy="50" class="pie"/>
        </svg>

        <svg width="100" height="100" class="chart">
        <circle r="25" cx="50" cy="50" class="pie"/>
        </svg>

        <svg width="100" height="100" class="chart">
        <circle r="25" cx="50" cy="50" class="pie"/>
        </svg>

        </div>
        <div class="indepth-description">
        <p>Reach</p>
        <p>Conversion</p>
        <p>Cost</p>
        <p>Areas of Influence</p>
        <p>Word Cloud</p>
        </div>

        <div class="user-action">

        <button>Contact</button>
        <button>Favourite</button>

        </div>
        </div>
=======
    <!-- added the entire influencer listing inside of the influencer-view to create an expanded thing, janky af -->
    <article v-if="type === 'detailed'" class="influencer-view influencer-detailed">
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
>>>>>>> c2d3183fd69e62a23aaf8f90ad0d081ea249dc1d
    </article>

    <article v-else-if="type === 'tile'" class="influencer-view influencer-tile">
      <img>
      <p>{{influencer.name}}</p>
    </article>

<<<<<<< HEAD
    <article v-else-if="type === 'listing'" class="influencer-view influencer-list">
        <h2>{{influencer.name}}</h2>
        <p>{{influencer.description}}</p>
        <p>Activity: {{influencer.activity}}</p>
        <p>Relevance: {{influencer.relevance}}</p>
        <p>Engagement: {{influencer.engagement}}</p>
=======
    <article v-else-if="type === 'listing'" class="influencer-view influencer-listing">
      <div class ="col-left">
        <img src="~@/assets/rose.png">
      </div> <!-- col-left= -->
      <div class = "col-right">
            <!-- Problem: If we click the instagram icon, it doesn't redirect, since clicking anywhere on the listing will expand to the detailed view -->
            <!-- Either need to change how clicking the listing works, or move the instagram icon (maybe to the deai) -->
            <a v-bind:href ="influencer.url" target="_blank"><img src = "~@/assets/instagram_icon.png" class = "icon"></a> 
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
>>>>>>> c2d3183fd69e62a23aaf8f90ad0d081ea249dc1d
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

  .influencer-tile {

    position: relative;
    display: inline-block;
    border-radius: 50%;
    width: 24 * $units;
    height: 24 * $units;
<<<<<<< HEAD
    margin: 1 * $units; 
    box-shadow: $shadow; 
    
=======
    box-shadow: $shadow;

>>>>>>> c2d3183fd69e62a23aaf8f90ad0d081ea249dc1d
    img {
      background-image: url("~@/assets/influxlogo.png");
      display: block;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      border-radius: 50%;
    }

    img:hover
    {

      transform: scale(0.9);

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

<<<<<<< HEAD
  .influencer-list
  {
=======
  .influencer-detailed{
>>>>>>> c2d3183fd69e62a23aaf8f90ad0d081ea249dc1d

  display: flex; 
  flex-direction: row;
  align-items: center; 
  background-color: white; 
  width: 100 * $units;
  height: 40 * $units; 
  padding: 1 * $units; 
  border-radius: 2 * $units;
  box-shadow: $shadow;

<<<<<<< HEAD
  }

  .influencer-detailed
  {
  display: flex; 
  flex-direction: row;
  align-items: center; 
  background-color: white; 
  margin-top: -3 * $units;
  width: 120 * $units;
  height: 50 * $units; 
  padding: 1 * $units; 
  border-radius: 2 * $units;
  box-shadow: $shadow;
   
=======
      .col-right-details{
      float:right;
      width:60%;
      text-align:left !important;
      margin-left:10% !important;
>>>>>>> c2d3183fd69e62a23aaf8f90ad0d081ea249dc1d

  
<<<<<<< HEAD
  .profile-photo
  {
  align-self: flex-start;  
  margin: 5 * $units; 
  padding: 1 * $units;
  height: 18 * $units;
  width: 18 * $units;
  background:url(//unsplash.it/200/200);
  border-radius: 50%;
  border: 1 * $units solid #eeeeee;
  -webkit-transition: all 800ms;
  transition: all 800ms; 
=======
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
>>>>>>> c2d3183fd69e62a23aaf8f90ad0d081ea249dc1d

  }

  .profile-photo:hover
  {
  transform:scale(0.85);
  border: 3 * $units solid #eeeeee;   
  }

  .main-description
  {
   
  font-family: Lato;
  font-size: 1.5 * $units; 
  margin-bottom: 5 * $units; 

  }

  .main-description p
  {

    margin: 2 * $units; 

  }

  .indepth-description p
  {
   
   margin: 1* $units; 
   display: inline; 


  }

  .user-action
  {

    button 
    {
      
        margin: 1* $units; 
        height: 5 * $units;
        background-color: white;
        color: black;
        padding: 1 * $units;
        display: inline-block;
        width: 25 * $units;
        border-style:none;
        border: 1px solid black;
        -webkit-transition: all 400ms;
        transition: all 400ms;  
    }

    button:hover 
    {
       
        transform:scale(0.95);

    }

  }

  }

<<<<<<< HEAD
  /**
  * media query for responsiveness starts here --
  **/ 
=======
      .icon{
        height:2 * $units;
        width:2 * $units;
      }
    }
>>>>>>> c2d3183fd69e62a23aaf8f90ad0d081ea249dc1d

 /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) 

{



} 

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) 

{



} 

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) 
{


} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) 
{



} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) 
{



}
</style>
