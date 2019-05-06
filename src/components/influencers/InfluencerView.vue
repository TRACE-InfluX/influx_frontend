<!--Template used for rendeing an individual influencer - used for show / GET influencer by ID-->
<template>

    <article v-if="type === 'detailed'" class="influencer-view influencer-detailed">
        <div class="profile-photo"></div>
         <div class="embed-insta-post">
            <i class="zmdi zmdi-close"></i>
         <i class="zmdi zmdi-favorite-outline"></i>
<!-- when influencer is liked, show this:: <i class="zmdi zmdi-favorite"></i> -->
        <i class="zmdi zmdi-smartphone-android"></i>
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

       <article v-else-if="type === 'home-list'" class="influencer-view influencer-home">
        <div class="profile-photo"></div>
        <h3>name: {{influencer.name}}</h3>
        <p class="description">description: blah blah blah {{influencer.description}}</p>
        <p class="prog-bar">Activity: {{influencer.activity}}</p>
        <p class="prog-bar">Relevance: {{influencer.relevance}}</p>
        <p class="prog-bar">Engagement: {{influencer.engagement}}</p>
        <button><i class="zmdi zmdi-favorite-outline"></i></button>
       <button><i class="zmdi zmdi-comment-outline"></i></button>
       <button><i class="zmdi zmdi-instagram"></i></button>
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
    border-radius: height;
    width: 24 * $units;
    height: 24 * $units;
    margin: 1 * $units; 
    margin-left: 10 * $units; 
    box-shadow: $shadow; 
    
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

  .influencer-home
  {

  display: flex; 
  justify-content: flex-start;
  flex-flow: column wrap; 
  background-color: white; 
  width: 100 * $units;
  height: 40 * $units; 
  padding: 3 * $units; 

  .influencer-home > * 
  {
    flex: 1 30%;
  }

  h3
  {
    order: 0; 
    align-self: auto; 
    margin: 1 * $units; 
  }

  button 
  {
    order: 1; 
    border: 0;
    background: none;
    box-shadow: none;
    border-radius: 0px;

  }

  i {
    order: 1; 
    font-size: 3 * $units;
    line-height: 3 * $units;
    padding: 1 * $units; 
  }


   .profile-photo
  {    

  order: 0;
  padding: 3 * $units; 
  height: 18 * $units;
  width: 18 * $units;
  background:url(//unsplash.it/200/200);
  border-radius: 50%;
  border: 1 * $units solid #eeeeee;
  -webkit-transition: all 800ms;
  transition: all 800ms; 

  }
  
  .description 
  {
    align-items: flex-start;
    order: 1;
    align-self: auto; 
  }

  .prog-bar
  {
    align-self: center; 
    order: 2; 
    margin: 1 * $units; 
    justify-content: space-around;
    width: 40 * $units; 
    height: 2 * $units; 
    background-color: $primary;
    color: $nocolor; 

  }

  .prog-bar:after
  {

  left:0%;
  width:0;
  height:5px;
  background: rgb(224, 224, 224); 
  display:block;
  content:'';
  transition: width 0.5s ease-in-out;

  }

  .prog-bar:hover:after
  {
    width: 100%;
    background: black; 
  }

  }

  .influencer-list
  {

  display: flex; 
  flex-direction: row;
  justify-content: center; 
  align-items: center; 
  background-color: white; 
  width: 100 * $units;
  height: 40 * $units; 
  padding: 1 * $units; 
  border-radius: 2 * $units;
  margin-left: 15 * $units; 

  }

  .influencer-detailed
  { 
  display: flex;
  align-items: flex-start; 
  background-color: white; 
  margin-left: 15 * $units; 
  width: 100 * $units;
  height: 80 * $units; 
  padding: 1 * $units; 
  border-radius: 2 * $units;
  box-shadow: $shadow;
   

  
  .profile-photo
  { 
  margin: 1 * $units; 
  padding: 1 * $units;
  height: 22 * $units;
  width: 22 * $units;
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
  .zmdi
  {
    display: inline; 
    font-size: 6 * $units;
    line-height: 6 * $units; 
    padding: 1 * $units; 

  }

  .user-action
  {

    button 
    {
        align-self: flex-end; 
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
  </style>
