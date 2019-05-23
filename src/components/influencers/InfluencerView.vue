<!--Template used for rendeing an individual influencer - used for show / GET influencer by ID-->
<template>
    <!-- added the entire influencer listing inside of the influencer-view to create an expanded thing, janky af -->

    <!-- influencer detailed view starts here -->
    <article v-if="type === 'detailed'" class="influencer-view influencer-detailed">
      <div class = "influencer-listing">

        <a class ="col-left" :href ="influencer.url" target="_blank">
          <img class="instagram-link" v-bind:href ="influencer.url" src="~@/assets/instagram_icon.png" />
          <h2 class="list-influencer-name">{{influencer.username}}</h2>
          <img class="profile-picture" v-bind:src="influencer.profile_image"/>
        </a> <!-- col-left= -->

        <div class = "col-right" @click="toggleType">

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
              <span v-bind:style="progbar">Relevance</span><span class="cssbar" :style="{ backgroundColor: '#458eff', width: Math.min(2 * influencer.relevance, 200)+ '%'}"></span>
              <span v-bind:style="progbar">Engagement</span><span class="cssbar" :style="{ backgroundColor: '#458eff', width: (2 * influencer.engagement)+ '%'}"></span>
              <span v-bind:style="progbar">Activity</span><span class="cssbar"  :style="{ backgroundColor: '#458eff', width: (2 * influencer.activity) + '%'}"></span>
          </div>

        </div>

        <p class="collapse" @click="toggleType"><img src="~@/assets/arrow-down.png"> Less Details</p>

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
      <a class ="col-left" :href ="influencer.url" target="_blank">
        <img class="instagram-link" v-bind:href ="influencer.url" src="~@/assets/instagram_icon.png" />
        <h2 class="list-influencer-name">{{influencer.username}}</h2>
        <img class="profile-picture" v-bind:src="influencer.profile_image"/>
      </a> <!-- col-left= -->
      <div class = "col-right" @click="toggleType">
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
              <span v-bind:style="progbar">Relevance</span><span class="cssbar" :style="{ backgroundColor: '#458eff', width: Math.min(2 * influencer.relevance, 200)+ '%'}"></span>
              <span v-bind:style="progbar">Engagement</span><span class="cssbar" :style="{ backgroundColor: '#458eff', width: (2 * influencer.engagement)+ '%'}"></span>
              <span v-bind:style="progbar">Activity</span><span class="cssbar"  :style="{ backgroundColor: '#458eff', width: (2 * influencer.activity) + '%'}"></span>

            </div>
      </div> <!-- col-right" -->
      <p class="expand" @click="toggleType"><img src="~@/assets/arrow-down.png"> More Details</p>
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
                    width: '125px',
                    color: 'white'
                },
                activitybar:{
                  backgroundColor: '#458eff',
                  color: 'white'

                },
                 engagementbar:{
                  backgroundColor: '#458eff',
                  color: 'white'
                },
                relevancebar:{
                  backgroundColor: '#458eff',
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
    height: 38 * $units;
  }

  .col-left{
    display: inline-block;
    flex: 1;
    text-decoration: none;
    color: black;
    &:hover .list-influencer-name {
      transition: 0.2s ease;
      color: $primary;
    }
    &:hover .instagram-link {
      transition: 0.2s ease;
      padding: 0;
    }
    &:hover + * + .expand {
      transition: 0.2s ease;
      border: none !important;
      color: #444444 !important;
    }
  }

  .instagram-link {
    position: absolute;
    left: 31.5 * $units;
    top: 1.5 * $units;
    width: 6 * $units;
    padding: 1px;
    transition: 0.2s ease;
  }

  .profile-picture {
    width: 24 * $units;
    height: 24 * $units;
    margin: auto;
    border-radius:50%;
  }

  .list-influencer-name {
    max-width: 27 * $units;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 1.5 * $units auto 0.5 * $units;
    height: 5 * $units;
    line-height: 5 * $units;
    font-size: 2.5 * $units;
    text-decoration: none;
    font-weight: bold;
    transition: 0.2s ease;
  }

  .col-right{
    cursor: pointer;
    flex: 2;
    padding-right: 5 * $units;
  }

  .top {
    height: 15 * $units;
    h3 {
      margin: 1.75 * $units 0 0.5 * $units;
      height: 5 * $units;
      line-height: 5 * $units;
    }
    .desc {
      height: 5.5 * $units;
      overflow: hidden;
    }

    .stats {
        font-weight: bold;
        padding: 1 * $units;
        display: flex;
        justify-content: space-evenly;
        border-bottom: solid 1px #999999;
    }
  }

  .bot {
    padding: 6 * $units 0;
    font-size: 2 * $units;
    line-height: 2.75 * $units;
    text-align: center;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 0.75 * $units;
  }

  .cssbar {
    display: inline-block;
    margin-left: -23.8 * $units;
  }

  .detailed-detailed {
    display: flex;
    border: solid 1px #999999;
  }

  .col-left-details {
    flex: 1;
    padding-left: 2 * $units;
    h3 {
      height: 6 * $units;
      line-height: 6 * $units;
    }
  }

  .col-right-details {
    flex: 2;
    padding-right: 3 * $units;
    h3 {
      height: 6 * $units;
      line-height: 6 * $units;
    }
  }
  
  .feedpreview {
    margin: auto;
    margin-bottom: 3 * $units;
    width: 25 * $units;
    display: block;
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

  .influencer-detailed{
    box-sizing: border-box;
    height: 100 * $units;
    width: 100 * $units;
    margin: auto;  

    .influencer-listing {
      border-bottom: none;
    }

    .donut {
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

  }

// influencer list view starts here
  .influencer-listing{
    position: relative;
    display: flex;
    border: 1px solid #999999;
    box-sizing: border-box;
    width: 100 * $units;
    height: 38 * $units;
    margin: auto;

    &:hover .expand, .expand:hover {
      transition: 0.2s ease;
      border-bottom: 0.5 * $units solid $primary;
      color: $primary;
    }

    &:hover .collapse, .collapse:hover{
      transition: 0.2s ease;
      color: $primary;
    }

    .expand, .collapse {
      text-align: left;
      box-sizing: border-box;
      position: absolute;
      bottom: 0;
      height: 6 * $units;
      line-height: 6 * $units;  
      width: 100%;
      font-size: 2 * $units;
      font-weight: bold;
      padding: 0 6.5 * $units;
      letter-spacing: 1px;
      cursor: pointer;
      color: #444444;
      transition: 0.2s ease;
      img {
          height: 1.5 * $units;
          width: 1.5 * $units;
          margin-right: 1 * $units;
      }
    }
    .collapse img {
      transition: 0.2s ease;
      transform: rotate(180deg);
    }
  }
</style>
