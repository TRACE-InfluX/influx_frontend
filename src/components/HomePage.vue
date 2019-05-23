<template>
  <div class="home-page">
    <header>
      <p>
        <span class="header">CONNECT WITH YOUR </span>
        <span id="header-highlight">WORLD</span>
      </p>
      <p class="banner-tagline"
      >Connect with influencers you can trust - with our focus on micro-influencers, build trust in your brand with real people, with real connections to the community.</p>

      <form @submit.prevent="search" v-observe-visibility="hideSearchbar">
        <loading-screen v-if="$parent.searching"></loading-screen>
        <template v-else>
          <i class="zmdi zmdi-search"/>
          <input ref="search" type="search" v-model="$parent.query" placeholder="Type to Search...">
          <button>Discover</button>
        </template>
      </form>
    </header>

    <main>
      <section class="influx-overview">
        <div class="overview-left">
          <p class="why-heading">
            <span>Why</span> InfluX?
            <span></span>
          </p>
          <br>
          <p><span class = "blue-text">Simple</span><span class="why-desc-1">, fast, and informative searching to find the perfect influencers for your marketing purposes/campaign.</span></p>
          <br>
          <p><span class = "blue-text">Easily </span><span class="why-desc-1">sort through the list by using our sorting and filter options.</span></p>
          <br>
          <p><span class = "blue-text">Quick</span><span class="why-desc-1"> access to the influencer’s profile with the click of a button.</span></p>
          <br>
        </div>
        <div class="overview-right">
          <img src="~@/assets/feastonhisflesh.png" v-scroll-reveal.reset="{ delay: 100 }">
        </div>
      </section>

      <section class="influx-overview">
        <div class="overview-left">
          <img src="~@/assets/tutorial1-1.png" v-scroll-reveal.reset="{ delay: 100 }">
        </div>
        <div class="overview-right">
          <p class="why-heading">Metrics</p>
          <br>
          <p><span class = "blue-text">Activity: </span><span class="why-desc-1">How often the influencer has posted in a given time frame. This well enable you to find influencers that are current, and reliably post often.</span></p>
          <br>
          <p><span class = "blue-text">Relevance: </span><span class="why-desc-1" >How many times the search term appears in the influencer's profile. This metric is used to try and find the best matching influencer, to ensure that they can market the product to its full potential.</span></p>
          <br>
          <p><span class = "blue-text">Engagement: </span><span class="why-desc-1">How much an influencer interacts with their followers,
            and is tracked by doing things such as replying to their comments. The higher the engagement
            score, the more an influencer is connected to their followers on a personal level, thus increasing
            the chances that a follower would take product recommendations and advice.</span></p>
          <br>
          <p><span class = "blue-text">Area of Influence: </span><span class="why-desc-1">The market sphere of the influencer, last posted location.</span></p>
        </div>
      </section>

      <section class="influx-overview">
        <div class="overview-left">
          <p class="why-heading">Detailed View</p>
          <br>
          <p><span class = "blue-text">Preview: </span><span class ="why-desc-1"> A quick preview of the influencer's instagram page, so you can quickly gauge if they're the one for you. </span></p>
          <br>
          <p><span class = "blue-text">Reach: </span><span class="why-desc-1">Based on the number of followers.</span></p>
          <br>
          <p><span class = "blue-text">Profit Potential: </span><span class="why-desc-1">Estimate of how often their followers purchase products based on the recommendation of that influencer.</span></p>
          <br>
          <p><span class = "blue-text">Cost: </span><span class="why-desc-1">Estimated cost of the influencer's services, calculated with with the various other metrics.</span></p>
          <br>
          <p><span class = "blue-text">Word Cloud: </span><span class="why-desc-1">Don't know what to search for? We include a word cloud visualization made up of each influencer's hashtags, so you can change the search with a click of a button</span></p>
        </div>
        <div class="overview-right">
          <img src="~@/assets/tutorial1-2.png" v-scroll-reveal.reset="{ delay: 100 }">
        </div>
      </section>
          <div class="trust-left">
            <div class = "left-container">
            <p class="header">Who we are</p>
            <br>
            <p class="tagline"
            >We are a group of gradutes from the Britsh Columbia Institute of Technology, with years of experience in:</p>
            <br>
            <ul>
              <li>Programming</li>
              <li>Marketing</li>
              <li>Customer Service</li>
              <li>Recruitment</li>
              <li>Small Business</li>
            </ul>
            <br>
            <p class="tagline"
            >We have combined our skills and expertise together with our passion for social media and marketing to make the InfluX a product that we are proud.</p>

          </div>
          </div> <!-- trust left -->

          <div class="trust-right">
            <div class = "team-container">
            <ul>
              <li>
                <img src="~@/assets/Toni.png" class="team-pics">
              </li>
              <li>
                <img src="~@/assets/Remy.png" class="team-pics">
              </li>
              <li>
                <img src="~@/assets/Aaron.png" class="team-pics">
              </li>
              <li>
                <img src="~@/assets/Carlo.png" class="team-pics">
              </li>
              <li>
                <img src="~@/assets/Eva.png" class="team-pics">
              </li>
            </ul>
            </div>
          </div>

        <!-- trust-banner -->
    </main>

    <!-- // <dialog :open="dialog">
    //   <div class="modal-mask" @click.self="close">
    //     <div class="modal-container">
    //       <influencer-view :influencer="selected_influencer" :weights="weights" type="detailed"/>
    //     </div>
    //   </div>
    // </dialog> -->

    <div class="call-to-action">
      <p>90% of consumers trust peer recommendations and only 33% trust ads. Let your customers hear about you from people they trust.</p>
      <h2>Get started today!</h2>
      <button>Sign Up</button>
      <back-to-top class = "btn-to-top">Back to Top</back-to-top>
    </div>
  </div>
</template>

<script>
import { ObserveVisibility } from "vue-observe-visibility";

export default {
  directives: { ObserveVisibility },

  watch: {
    dialog: function(isOpen) {
      if (isOpen) {
        document.documentElement.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "auto";
      }
    }
  },

  data() {
    return {};
  },
  mounted() {
    this.$parent.query = ''
    localStorage.setItem('query', '')
  },
  methods: {
    search() {
      this.$parent.search()
    },
    hideSearchbar(isVisible) {
      this.$parent.showSearchBar = !isVisible;
    },
    linkToInfluencers() {
      this.$router.push("/influencers");
      scrollTo(0, 0);
    },
    linkToRegister() {
      this.$router.push("/register");
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$parent.showSearchBar = true;
    document.documentElement.style.overflow = "auto";
    next();
  }
};
</script>

<style lang="scss" scoped>


header {
  color: #414042;
  background-position: bottom;
  background-size: cover;
  height: 60 * $units;
  padding: 20 * $units 3 * $units 0;

  .header {
    font-size: 6 * $units;
    font-weight: 400;
    font-family: "Oswald";
  }

  #header-highlight {
    font-size: 6 * $units;
    font-weight: 400;
    font-family: "Oswald";
    color: $primary;
  }

  .banner-tagline {
    font-size: 2.5 * $units;
    color: #7a7c7f;
  }

  > * {
    max-width: 100 * $units;
    display: block;
    margin: 3 * $units auto;
    text-align: center;
  }

  form {
    $height: 5 * $units;

    height: $height;
    display: flex;

    .loading-screen {
      display:flex;
      height: 9 * $units;
      margin: auto;
      line-height: 9 * $units;
      font-size: 4 * $units;
    }

    i {
      position: absolute;
      color: gray;
      height: $height;
      width: $height;
    }

    input,
    button {
      font-size: 1.8 * $units;
      border-radius: 0.5 * $units;
      border: none;
      box-shadow: $shadow;
    }

    input {
      flex: 1;
      padding-left: $height;
      margin-right: 1 * $units;
      padding-right: 1 * $units;
    }

    button {
      background-color: $primary;
      color: white;
      width: 12 * $units;
      border-radius: 0.5 * $units;
    }
  }
}

  .header {
    font-size: 6 * $units;
    font-weight: 400;
    font-family: "Oswald";
    text-align:center;
  }

main {
  h3 {
    $height: 18 * $units;
    height: $height;
    line-height: $height;
    display: block;
    width: 100%;
    text-align: center;
    font-size: 5 * $units;
    color: #999;
    letter-spacing: 1.5 * $units;
  }
}

dialog {
  .modal-mask {
    position: fixed;
    z-index: 999;
    top: 12 * $units;
    padding-top: 1 * $units;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
  }

  .modal-container {
    transition: all 0.3s ease-in-out;
    margin: auto;
    height: 100 * $units;
    width: 100 * $units;
    border-radius: 2 * $units;
    background-color: white;
  }

  .influencer-view {
    border: none;
  }
}

button {
  border: 0;
  background: none;
  box-shadow: none;
  border-radius: 0px;
  width: 8 * $units;
}

i {
  font-size: 3 * $units;
  line-height: 3 * $units;
  padding: 1 * $units;
}

.product-info {
  width: 100%;
  height: 100%;
  margin-top: 10 * $units;
  margin-bottom: 10 * $units;
  height: 50 * $units;
  background-color: $nocolor;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;

  img {
    align-self: center;
    width: 35%;
  }

  p {
    align-self: center;
    width: 20%;
    font-size: 3 * $units;
  }
}

.why-influx {
  height: 300vh;
  display: flex;
  top: 0;
}

.why-title {
  width: 50%;
  height: 100vh;
  position: sticky;
  flex-direction: column;
  top: 0;
  justify-content: center;
  color: #7a7c7f;
  padding-left: 7.5%;
  padding-top: 10 * $units;
  padding-right: 2.5%;
}

.why-heading {
  font-size: 5 * $units;
  font-weight: 100;
  color: hsl(0, 0%, 13%);
  border-bottom: 0.5 * $units solid $primary;
  padding-top: 5%;
}

.why-desc-1 {
  font-size: 2.5 * $units;
  line-height: 3.5 * $units;
  color: hsl(0, 0%, 29%);
}

#picture-description {
  width: 85vh;
  font-size: 3 * $units;
  line-height: 3.5 * $units;
  color: hsl(0, 0%, 29%);
  padding-top: 5%;
}

.steps-container {
  padding-top: 5%;
  font-size: 3 * $units;
  line-height: 3.5 * $units;
  color: hsl(0, 0%, 45%);
  padding-right: 10%;
}

.Current-Number {
  padding-top: 5%;
  font-size: 3 * $units;
  line-height: 6 * $units;
  color: $primary;
  padding-right: 10%;
}

.Current-Step {
  padding-top: 5%;
  font-size: 3 * $units;
  line-height: 6 * $units;
  color: hsl(0, 0%, 45%);
}

#Number {
  font-size: 2.5 * $units;
  line-height: 6 * $units;
  color: hsl(0, 0%, 45%);
  padding-right: 5%;
}

#Step {
  font-size: 2.5 * $units;
  line-height: 6 * $units;
  color: hsl(0, 0%, 45%);
}

.why-tutorial {
  width: 50%;
  text-align: center;
  padding-right: 15%;
  padding-top: 20 * $units;
  padding-left: 2.5 * $units;

  img {
    height: 80vh;
    width: 80vh;
    justify-content: center;
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
    margin-top: 5%;
  }

  #Step {
    font-size: 2.5 * $units;
    line-height: 6 * $units;
    color: hsl(0, 0%, 45%);
  }

  .first-tut {
    height: 100vh;
    justify-content: left;
    width: 100%;
  }

  .second-tut {
    height: 100vh;
    justify-content: space-around;
    align-items: center;
  }

  .img-container {
  }
  .third-tut {
    height: 100vh;
    justify-content: space-around;
    align-items: center;
  }
}
.call-to-action {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  height: 50 * $units;
  width: 100%;
  background:
            /* top, transparent black, faked with gradient */ linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    /* bottom, image */ url("~@/assets/getstarted.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  font-size: 3 * $units;
  text-align: center;

  h2,
  p {
    align-self: center;
    margin: 1 * $units;
    text-shadow: $shadow;
  }

  button {
    align-self: center;
    background-color: $primary;
    color: white;
    height: 5 * $units;
    width: 12 * $units;
    border-radius: 0.5 * $units;
    font-size: 1.8 * $units;
  }
}

.joindiscord {
  text-align: center;
  padding-top: 2%;
}








  .header {
    font-size: 6 * $units;
    font-weight: 400;
    font-family: "Oswald";
    text-align: center;
  }

  .tagline {
    font-size: 2.5 * $units;
    color: #FFFFFF;
    text-align: center;
  }

  ul {
    text-align: center;
    font-size: 2.5 * $units;
    list-style-type: none;

    li {
      padding-top: 1.5%;
    }
  }

  .team-pics {

    width: 35%;
    height: 35%;
  }

.gap {
  height: 30vh;
}

.influx-overview {
  height: 100vh;
  width: 100%;
  padding-bottom: 3*$units;

  .overview-left {
    float: left;
    width: 50%;
    height: 100%;
    padding-left: 7.5%;
    padding-right: 2.5%;

    img {
      height: 80%;
      width: 100%;
      box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
      justify-content: left;
      text-align: left;
    }
  }

  .overview-right {
    float: left;
    width: 50%;
    height: 100%;
    justify-content: right;
    padding-left: 2.5%;
    padding-right: 7.5%;
    z-index: 999;
    background-color: white;

    img {
      height: 80%;
      width: 100%;
      box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
      justify-content: right;
      text-align: right;
    }
  }
}

.ree {
  width: 50vh;
  text-align: center;
  justify-content: center;

  input {
    text-align: center;
  }
}

#try-heading {
  font-size: 5 * $units;
  font-weight: 100;
  color: hsl(0, 0%, 13%);
  padding-top: 5%;
  text-align: center;
  padding-bottom: 5vh;
}

.try-now {
  text-align: center;
  padding-top: 5vh;
  padding-bottom: 5vh;
}

.try-button1 {
  background-color: $primary;
  color: white;
  height: 5 * $units;
  width: 50 * $units;
  border-radius: 0.5 * $units;
  font-size: 1.8 * $units;
  text-align: center;
}

.span-buttons {
  text-align: center;
}



.blue-text{
  color: $primary;
  font-weight:900;
  display:inline;
    font-size: 2.5 * $units;
  line-height: 3.5 * $units;
}

.btn-to-top{
  border: 0;
  background: none;
  background-color: white;
  border: 1px solid $primary;
  color: $primary;
  height: 5 * $units;
  width: 20 * $units;
  border-radius: 0.5 * $units;
  font-size: 1.8 * $units;
  text-align: center;
  box-shadow: inset 0 2px 4px 0 hsla(0,0%, 0%, 0.2);
  padding: 1 * $units;
}


.left-container{
  height: 100vh;
  padding-top: 10%;
  padding-bottom: 5%;
  color: #FFFFFF;
  background-color: $primary;
      width: 50%;
    float: left;
    font-size: 5vh;
    padding-left: 7.5%;
}

.team-container{
  background-color: $primary;
    height: 100vh;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    width: 50%;
    float: right;
    text-align: center;

    ul{
      padding-top: 5%;
      padding-bottom: 5%;
    }
}
</style>

