<!--Template used for rendeing an individual influencer - used for show / GET influencer by ID-->
<template>

    <article v-if="type === 'detailed'" class="influencer-view influencer-detailed">
        <div class="profile-photo"></div>
         <div class="embed-insta-post">
        <div class="main-description">
        <h2>name: {{influencer.name}}</h2>
        <h3>keywords:{{influencer.description}}</h3>
        <p>Activity: {{influencer.activity}}</p>
        <p>Relevance: {{influencer.relevance}}</p>
        <p>Engagement: {{influencer.engagement}}</p>


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
    </article>

    <article v-else-if="type === 'tile'" class="influencer-view influencer-tile">
      <img>
      <p>{{influencer.name}}</p>
    </article>

    <article v-else-if="type === 'listing'" class="influencer-view influencer-list">
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

  .influencer-list
  {

  display: flex; 
  flex-direction: row;
  align-items: center; 
  background-color: white; 
  width: 100 * $units;
  height: 40 * $units; 
  padding: 1 * $units; 
  border-radius: 2 * $units;
  box-shadow: $shadow;

  }

  .influencer-detailed
  {
  display: flex; 
  flex-direction: row;
  align-items: center; 
  background-color: white; 
  width: 120 * $units;
  height: 50 * $units; 
  padding: 1 * $units; 
  border-radius: 2 * $units;
  box-shadow: $shadow;
   

  
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

  /**
  * media query for responsiveness starts here --
  **/ 

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
