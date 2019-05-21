<template>
  <div class="home-page">
    <header>
      <p>
        <span id="header">CONNECT WITH YOUR </span>
        <span id="header-highlight">WORLD</span>
      </p>
      <p class="banner-tagline"
      >Connect with influencers you can trust - with our focus on micro-influencers, build trust in your brand with real people, with real connections to the community.</p>

      <form @submit.prevent="search" v-observe-visibility="hideSearchbar">
        <i class="zmdi zmdi-search"/>
        <input ref="search" type="search" v-model="$parent.query" placeholder="Type to Search...">
        <button>Discover</button>
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
          <p><span class = "blue-text">Area of Influence: </span><span class="why-desc-1">The market sphere of the influencer.</span></p>
        </div>
      </section>

      <section class="influx-overview">
        <div class="overview-left">
          <p class="why-heading">Detailed View</p>
          <br>
          <p><span class = blue-text>Reach: </span><span class="why-desc-1">Based on the number of followers</span></p>
          <br>
          <p><span class = "blue-text">Profit Potential: </span><span class="why-desc-1">Estimate of how often their followers purchase products based on the recommendation of that influencer.</span></p>
          <br>
          <p><span class = blue-text>Cost: </span><span class="why-desc-1">Estimated cost of the influencer's service.</span></p>
          <br>
          <p><span class = blue-text>Word Cloud: </span><span class="why-desc-1">Visualization of the influencer’s common hashtags, with the most used being the biggest.</span></p>
        </div>
        <div class="overview-right">
          <img src="~@/assets/tutorial1-2.png" v-scroll-reveal.reset="{ delay: 100 }">
        </div>
      </section>

      <section>
        <p id="try-heading">Popular Examples</p>
        <ul class="popular">
          <li v-for="popularInfluencer in popular" :key="popularInfluencer.id">
            <influencer-view
              type="tile"
              @click.native="open(popularInfluencer.id)"
              :influencer="popularInfluencer"
            />
          </li>
        </ul>
        <div class="try-now">
          <span class="span-buttons">
            <button @click="linkToInfluencers" class="try-button1">Try it out now!</button>
          </span>
        </div>
      </section>
      <section v-scroll-reveal.reset="{ delay: 100 }">
        <div class="trust-banner">
          <div class="trust-left">
            <p id="header">Who we are</p>
            <p class="tagline"
            >We are a group of gradutes from the Britsh Columbia Institute of Technology, with years of experience in:</p>
            <ul>
              <li>Programming</li>
              <li>Marketing</li>
              <li>Customer Service</li>
              <li>Recruitment</li>
              <li>Small Business</li>
            </ul>
            <p class="tagline"
            >We have combined our skills and expertise together with our passion for social media and marketing to make the InfluX a product that we are proud.</p>
            <div class="joindiscord">
              <a href="https://discord.gg/YJ79pbf" target="_blank">
                <img
                  class="discordbanner"
                  src="https://discordapp.com/api/guilds/497123604287193089/widget.png?style=banner4"
                  alt="InfluX Discord"
                  style="max-width:308px"
                >
              </a>
            </div>
            <p class="tagline">Connect with us through Discord, today!</p>
          </div>

          <div class="trust-right">
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
      </section>
    </main>

    <dialog :open="dialog">
      <div class="modal-mask" @click.self="close">
        <div class="modal-container">
          <influencer-view :influencer="selected_influencer" type="detailed"/>
        </div>
      </div>
    </dialog>

    <div class="call-to-action">
      <p>90% of consumers trust peer recommendations and only 33% trust ads. Let your customers hear about you from people they trust.</p>
      <h2>Get started today!</h2>
      <button>Sign Up</button>
    </div>
  </div>
</template>

<script>
import { STATE, ACTIONS } from "@/store.js";
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
    return {
      selected_id: "",
      dialog: false
    };
  },
  directive: {},
  computed: {
    ...STATE,
    selected_influencer() {
      return this.popular.find(i => i.id === this.selected_id) || {};
    }
  },
  mounted() {
    this.load_popular();
    this.$parent.query = ''
    localStorage.setItem('query', '')
  },
  methods: {
    ...ACTIONS,
    open(id) {
      this.selected_id = id;
      this.dialog = true;
    },
    close() {
      if (this.dialog) {
        this.dialog = false;
      }
    },
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

  #header {
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

  .popular {
    display: flex;
    justify-content: space-evenly;
    width: 75%;
    margin: auto;

    li {
      display: inline;
      max-width: 32 * $units;
      max-height: 32 * $units;
      padding: 1 * $units;
      .influencer-view {
        display: block;
        margin: auto;
      }
    }
  }
}

dialog {
  .modal-mask {
    position: fixed;
    z-index: 9999;
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

.trust-banner {
  height: 100vh;
  color: hsl(216, 100%, 99%);
  transition: ease-in 750ms;
  background-color: $primary;
        box-shadow: 0 0 10px 20px $primary;

  .trust-left {
    width: 50%;
    float: left;
    height: 100vh;
    padding-top: 5%;
    transition: ease-in 1000ms;
    padding-bottom: 5%;
  }

  .trust-right {
    width: 50%;
    float: right;
    height: 100%;
    color: #000000;
    text-align: center;
  }

  #header {
    font-size: 6 * $units;
    font-weight: 400;
    font-family: "Oswald";
    text-align: center;
  }

  .tagline {
    padding-top: 5%;
    font-size: 2.5 * $units;
    color: #ffffff;
    text-align: center;
    padding-right: 10%;
    padding-left: 10%;
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
    max-width: 20vw;
    max-height: 20vh;
  }
}

.gap {
  height: 30vh;
}

.influx-overview {
  height: 100vh;
  width: 100%;

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
</style>

