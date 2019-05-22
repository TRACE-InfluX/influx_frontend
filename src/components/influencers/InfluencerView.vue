<!--Template used for rendeing an individual influencer - used for show / GET influencer by ID-->
<template>
    <!-- added the entire influencer listing inside of the influencer-view to create an expanded thing, janky af -->

    <!-- influencer detailed view starts here -->
    <article v-if="type === 'detailed'" class="influencer-view influencer-detailed">
        <div class = "detailed-listing">
          <a v-bind:href ="influencer.url" target="_blank"><img class="detailed-left-icon" src="~@/assets/instagram_icon.png" height="20"/></a>
      <div class ="col-left">
        <p class="detailed-influencer-name">{{influencer.username}}</p>
        <a v-bind:href ="influencer.url" target="_blank"><img v-bind:src="influencer.profile_image"/></a>
      </div> <!-- col-left= -->
        <div class = "col-right">
            <div class = "top">
                <h3>{{influencer.name}}</h3>
               <p>Last Location: {{influencer.location}}</p>
              <p class = "desc">{{influencer.description}}</p>
                <div class = "stats">
                  <div class="posts"> Posts: {{influencer.posts}} </div>
                  <div class="followers"> Followers: {{influencer.followers}} </div>
                  <div class="following"> Following: {{influencer.following}} </div>
                </div>
            </div>
            <div class = "bot">
                    <!-- progbar = vuejs styling -->
                <span v-bind:style="progbar">Relevance</span><span class="cssbar" :style="{ backgroundColor: '#458eff', width: (2 * influencer.relevance)+ '%'}"></span>
                <span v-bind:style="progbar">Engagement</span><span class="cssbar" :style="{ backgroundColor: '#458eff', width: (2 * influencer.engagement)+ '%'}"></span>
                <span v-bind:style="progbar">Activity</span><span class="cssbar"  :style="{ backgroundColor: '#458eff', width: (2 * influencer.activity) + '%'}"></span>
            </div>
        </div> <!-- col-right" -->
        <p class = "collapse" v-show="collapsable" @click="toggleType">Less Details <img src="~@/assets/arrow-down.png"></p>
        </div>
        <div class = "detailed-detailed">

        <div class = "col-left-details">
          <!-- Add the snapshot of socials here -->
          <h3>Preview</h3>
          <img class="feedpreview" :src="influencer.preview && influencer.preview[0] ? influencer.preview[0] : ''" />
          <img class="feedpreview" :src="influencer.preview && influencer.preview[1] ? influencer.preview[1] : ''" />
        </div>
        
        <div class = "col-right-details">

          <ul class="donut-chart">
            <h3>Valuation</h3>

            <li class="donut">
              <svg>
                <circle class="outline" cx="60" cy="60" fill="transparent" r="50" stroke="#eee" stroke-width="10"></circle>
                <circle class="progress" cx="60" cy="60" fill="transparent" r="50" stroke="#458eff" :stroke-dasharray="progress_max" :stroke-dashoffset="progress('reach')" stroke-width="10"></circle>
              </svg>
              <p>{{ influencer.reach ? influencer.reach.toFixed(2) + '%' : ''}}</p>
              <h4>Reach</h4>
            </li>

            <li class="donut">
              <svg>
                <circle class="outline" cx="60" cy="60" fill="transparent" r="50" stroke="#eee" stroke-width="10"></circle>
                <circle class="progress" cx="60" cy="60" fill="transparent" r="50" stroke="#21B063" :stroke-dasharray="progress_max" :stroke-dashoffset="progress('profit')" stroke-width="10"></circle>
              </svg>
              <p>{{ '$' + influencer.profit_cad }}</p>
              <h4>Profit</h4>
            </li>

            <li class="donut">
              <svg>
                <circle class="outline" cx="60" cy="60" fill="transparent" r="50" stroke="#eee" stroke-width="10"></circle>
                <circle class="progress" cx="60" cy="60" fill="transparent" r="50" stroke="#ff5555" :stroke-dasharray="progress_max" :stroke-dashoffset="progress('cost')" stroke-width="10"></circle>
              </svg>
              <p>{{ '$' + influencer.cost_cad }}</p>
              <h4>Cost</h4>
            </li>

          </ul>

          <vue-wordcloud
            :data="wordcloud_data"
            nameKey="key"
            valueKey="value"
            :showTooltip="false"
            :rotate="{from:0, to: 0}"
            :wordClick="follow_link"
          />

        </div>

      </div>
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
          <a v-bind:href ="influencer.url" target="_blank"><img v-bind:src="influencer.profile_image"/></a>
      </div> <!-- col-left= -->
      <div class = "col-right">
          <div class = "top">

              <h3>{{influencer.name}}</h3>
               <p>Last Location: {{influencer.location}}</p>
              <p class = "desc">{{influencer.description}}</p>
               <div class = "stats">

                  <div class="posts"> Posts: {{influencer.posts}} </div>
                  <div class="followers"> Followers: {{influencer.followers}} </div>
                  <div class="following"> Following: {{influencer.following}} </div>

                </div>

          </div>
            <div class = "bot">
                    <!-- progbar = vuejs styling -->
                <span v-bind:style="progbar">Relevance</span><span class="cssbar" :style="{ backgroundColor: '#458eff', width: (2 * influencer.relevance)+ '%'}"></span>
                <span v-bind:style="progbar">Engagement</span><span class="cssbar" :style="{ backgroundColor: '#458eff', width: (2 * influencer.engagement)+ '%'}"></span>
                <span v-bind:style="progbar">Activity</span><span class="cssbar"  :style="{ backgroundColor: '#458eff', width: (2 * influencer.activity) + '%'}"></span>

            </div>
      </div> <!-- col-right" -->
      <!--<img class = "expand" src="~@/assets/arrow-down.png" @click="toggleType">-->
        <p class = "expand" @click="toggleType">More Details <img src="~@/assets/arrow-down.png"></p>
    </article>

    <!-- influencer listing view ends here-->

</template>

<script>

    //package to send httprequests
    // import API from '@/api.js'
    import wordcloud from 'vue-wordcloud'

    export default {
        props: {
            type: String,
            influencer: Object,
            weights: Object
            // collapsable: Boolean
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
                },
                progress_max: 2 * Math.PI * 50,
                collapsable: false
            }
        },
        mounted() {
            // //Setting id given by url / parameter from id from router
            // var routeparams = this.$router.currentRoute.params.id;
            // //appending id to URL to backend application in a RESTish manner
            // var actualroute = '/v0/influencers/';
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
          },
          toggleType() {
              if(this.type == 'listing') {
                  this.collapsable = true;
                  this.$emit('expand');
              } else {
                  this.collapsable = false;
                  this.$emit('collapse');
              }
          },
          progress(metric) {
            return this.progress_max - (this.progress_max * this.influencer[metric] / 100)
          },
          follow_link(word) {
            if (word[0] == '#') {
              word = word.substr(1)
            }
            this.$parent.$parent.query = word // ewwwwwwwwwwwwwwwww
            this.$parent.$parent.search()
          }
        },
        computed: {
          wordcloud_data() {
            let result  = []
            for (let key in this.weights) {
              if (this.weights[key] > 1) {
                let words = this.$parent.$parent.weights_query.split(' ')
                if (words.find(w => key.includes(w))) {
                  result.push({
                    key,
                    value: this.weights[key]
                  })
                }
                else {
                  result.push({
                    key,
                    value: this.weights[key]
                  })
                }
              }
            }
            return result
          }
        },
        components: {
          'vue-wordcloud': wordcloud
        }
    }
</script>

<!--component specific styling-->
<style lang="scss" scoped>

    .wordCloud {
      height: 40 * $units;
    }

    .detailed-detailed {
        border-top: solid 1px #999999;
        padding: 3 * $units 5 * $units;
    }

    .stats {
        font-weight: bold;
        padding: 1 * $units;
        display: flex;
        justify-content: space-evenly;
        border-bottom: solid 1px #999999;
    }

    .top {
        height: 15 * $units;
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
        grid-gap: .5 * $units;
    }

    .cssbar {
     display: inline-block;
     margin-left: -19.25 * $units;
     margin-top: 1px;
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

      .collapse {
          margin-left: auto;
          margin-right: auto;
          width: 15 * $units;
          height: 3 * $units;
        img {
            height: 1.5 * $units;
            width: 1.5 * $units;
            transform: rotate(180deg);
        }
      }
      .collapse:hover {
        cursor: pointer;
      }

    h2{
      display:inline-block;
    }

    // preview of the social media page positioning -- currently a placeholder
    .feedpreview {
      margin-top: 3 * $units;
      width: 25 * $units;
      display: block;
    }

    .donut-chart h3 {
      margin-bottom: 2 * $units;
    }

    .donut{
      $size: 15 * $units;
      position: relative;
      display: inline-block;
      margin: 0 1 * $units;
      svg {
        width: $size;
        height: $size;
        transform: rotate(-90deg);
      }
      p {
        position: absolute;
        top:0;
        left:0;
        width: $size;
        height: $size;
        line-height: $size;
      }
    }

    .col-left-details{
      float: left;
      width: 25 * $units;
    }

    .detailed-influencer-name {
      margin-top: 1.5 * $units;
      margin-left: 1 * $units;
      font-weight: 800;
    }


    .detailed-listing{
      height: 33 * $units;
      border-bottom: black;
    }

      .col-right-details{
      margin-left: 30 * $units;

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

      /*&:hover {
          box-shadow: inset 2.5px 0 0 0 $primary;
      }*/
  }

// influencer list view starts here
  .influencer-listing{
    border: 1px solid #999999;
    box-sizing: border-box;
    width: 100 * $units;
    height: 33 * $units;
    margin: auto;
    text-align: center;

    &:hover {
      box-shadow: inset 2.5px 0 0 0 $primary;
      .expand {
        /*visibility: visible;*/
      }
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
      width:35%; // these add up to 100 thats why
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

    .expand {
/*
      visibility: hidden;
*/
      margin-left: auto;
      margin-right: auto;
      height: 3 * $units;
      width: 15 * $units;
        img {
            height: 1.5 * $units;
            width: 1.5 * $units;
        }
    }
    .expand:hover {
        cursor: pointer;
    }
  }
</style>
