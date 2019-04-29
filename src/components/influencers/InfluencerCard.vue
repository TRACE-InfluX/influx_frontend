<template>

<div class="influencer-card"  v-on:click="active=!active" v-bind:class="{active:active}">
    <div class="influencer-card-profile-photo" :style="style" ></div>
    <div class="info">
        <h3 class="handle"> {{ handle }} </h3>
        <span class="keyword1"> #{{ keyword1 }} </span>
        <span class="keyword2"> #{{ keyword2 }} </span>
        <span class="follower"> follower: {{ follower }} </span>
        <span class="post"> post: {{ post }} </span>
   
     <div class="influencer-card-content" v-show="active">
    
    <div class="embedded-instagram"> embedded instagram in here</div>
    <div class="text-content"> something about the influencers here </div>
       
    </div>    

    </div> 
  


</div>
</div>

 

</template>

<script>
export default {

    name: "influencer-card",
    props: ['img', "handle", "keyword1", "keyword2", "follower", "post"],
    computed: {
        style() {
            const img = require('@/assets/' + this.img)
            return {
                backgroundImage: `url(${img})`,
                
            }
        }
    },
    data() {
        
        return {

            active: false

        }
    },
}
    

</script>

<style scoped>

    h3 {

        margin-top: -5px; 

 }

    .influencer-card {
        align-content: flex-start;
        display: inline-block; 
        width: 800px;
        height: 200px;
        min-width: 200px; 
        min-height: 100px;
        background-color: white; 
        border-radius: 15px;
        padding: 15px;
        border: 1px solid #999; 

        
    }

    .influencer-card-profile-photo {
        float: left; 
        width: 200px;
        height: 200px;
        min-width: 100px; 
        min-height: 100px; 
        background-color: white; 
        border: 1px solid #999; 
        border-radius: 50%;
        background-size: contain; 

    }

    .influencer-card-content {
	overflow-y: hidden;
    margin: 0 0 0 -16px;
    justify-content: center; 
    color: black;
    width: 800px;
    height: 500px;
    border-left: 1px solid #999;
    border-right: 1px solid #999;
	max-height: 1200px; /* approximate max height */
    padding: 15px;
    background-color: white; 
	transition-property: all;
	transition-duration: .5s;
	transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }

     .influencer-card-content.closed {
        max-height: 0;
     }

     .embedded-instagram {
         display: inline-block; 
         width: 300px;
         height: 400px; 
         padding: 25px;
         background-color: red;
     }

     .text-content {
         display: inline-block; 
         width: 300px;
         height: 400px; 
         padding: 25px;
         background-color: blue;
     }
</style>
