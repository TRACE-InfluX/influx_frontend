<!--Template used for rendering an individual influencer - used for show / GET influencer by ID-->
<template>
    <div id="detailed" v-if="type === 'detailed'" class="influencer-view">
        <div class="close-me">X</div>
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
    </div>
    <div id="tile" v-else-if="type === 'tile'" class="influencer-view">
        <div class="popular-img" :style="style"></div> 
        <p>{{influencer.name}}</p>
    </div>
    <div id="listing" v-else-if="type === 'listing'" class="influencer-view">
        <h2>{{influencer.name}}</h2>
        <p>{{influencer.description}}</p>
        <p>Activity: {{influencer.activity}}</p>
        <p>Relevance: {{influencer.relevance}}</p>
        <p>Engagement: {{influencer.engagement}}</p>
    </div>
</template>

<script>
    //package to send httprequests
    import API from '@/api.js'

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

    $primaryBtnText: rgb(255, 255, 255);

    button {
        background: $primaryBtnText; 
    }

    .influencer-view {
        display: inline-block; 
    }

    .close-me {
        margin-left: 50 * $units; 
    }

    #tile {
       
    }
    

    #listing {
    
    }

    #detailed {
        padding: 5 * $units; 
        width: 60 * $units;
        height: 80 * $units; 
        background-image: linear-gradient(135deg, #f5f7fa 0%, #ededed 100%);
    }

    
</style>
