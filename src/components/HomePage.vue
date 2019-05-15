<template>
  <div class="home-page">

    <header>
      <p><span id = "header">CONNECT WITH YOUR </span> <span id = "header-highlight">WORLD</span></p>
      <p id = "tagline">Connect with influencers you can trust - with our focus on micro-influencers, build trust in your brand with real people, with real connections to the community.</p>

      <form @submit.prevent="search" v-observe-visibility="hideSearchbar">
        <i class="zmdi zmdi-search" />
        <input ref="search" type="search" v-model="$parent.query" placeholder="Type to Search...">
        <button>Discover</button>
      </form>
    </header>

    <main>
      <h3>Popular</h3>
      <ul class="popular">
        <li v-for="popularInfluencer in popular" :key="popularInfluencer.id">
          <influencer-view type="tile"
                           @click.native="open(popularInfluencer.id)"
                           :influencer="popularInfluencer"

          />
      </li>
    </ul>


    <section class="why-influx">
      <div class="why-title">
        <p id = "why-heading"><span> Why </span>InfluX?<span></span></p>
        <br>
        <p id="why-desc-1">A simple, fast, and informative way to find the perfect influencers for your marketing purposes/campaign </p>


     </div>     <!-- why-title/right col -->

      <div class="why-tutorial">
       <div class = "first-tut">
         <section v-scroll-reveal.reset ="{ delay: 1000 }">
           <div class = "img-container">
           <img src = "~@/assets/tutorial1.png">
           </div>
         </section>
         <p id = "picture-description">A blazing fast search engine, filled with influencers just for you. </p>
       </div>
      
        <div class = "second-tut">
         <section v-scroll-reveal.reset ="{ delay: 1000 }">
           <div class = "img-container">
           <img src = "~@/assets/tutorial2.png">
           </div>
         </section>
         <p id = "picture-description">Detailed metrics to help you make your decision easy as can be.</p>
       </div>

       <div class = "third-tut">
         <section v-scroll-reveal.reset ="{ delay: 1000 }">
           <div class = "img-container">
           <img src = "~@/assets/tutorial2.png">
           </div>
         </section>
         <p id = "picture-description">Detailed metrics to help you make your decision easy as can be.</p>
       </div>      <!-- third tut-->
      </div>    <!-- why-tutorial/left col -->

    </section>
    <section v-scroll-reveal-quick.reset ="{ delay: 1000 }">
     <div class = "trust-banner">
       <div class = "trust-left">
        <p id = "header">Who we are</p>
        <p id = "tagline">We are a group of gradutes from the Britsh Columbia Institute of Technology, with years of experience in: </p>
        <ul>
        <li>Programming</li>
        <li>Marketing</li>
         <li>Customer Service</li>
         <li>Recruitment</li>
        <li>Small Business</li>
        </ul>
        <p id = "tagline">We have combined our skills and expertise together with our passion for social media and marketing to make the InfluX a product that we are proud. </p>
        <div class="joindiscord">
          <a href="https://discord.gg/YJ79pbf" target="_blank">
          <img class="discordbanner" src="https://discordapp.com/api/guilds/497123604287193089/widget.png?style=banner4" alt="InfluX Discord" style="max-width:308px">
          </a>
        </div>
        <p id = "tagline"> Connect with us through Discord, today! </p>
      </div>

        <div class = "trust-right">
          <ul>
            <li><img src="~@/assets/Toni.png" id = "team-pics"></li>
            <li><img src="~@/assets/Remy.png" id = "team-pics"></li>
            <li><img src="~@/assets/Aaron.png" id = "team-pics"></li>
           <li><img src="~@/assets/Carlo.png" id = "team-pics"></li>
            <li><img src="~@/assets/Eva.png" id = "team-pics"></li>
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
  import { STATE, ACTIONS } from '@/store.js';
  import {ObserveVisibility} from 'vue-observe-visibility';

  export default {
    directives: {ObserveVisibility},

    watch: {
      dialog: function(isOpen) {
        if(isOpen) {
          document.documentElement.style.overflow = 'hidden';
        } else {
          document.documentElement.style.overflow = 'auto';
        }
      }
    },

    data() {
      return {
        selected_id: '',
        dialog: false
      }
    },
    directive: {

    },
    computed: {
      ...STATE,
      selected_influencer() {
        return this.popular.find(i => i.id === this.selected_id) || {}
      }
    },
    mounted() {
      this.load_popular();
    },
    methods: {
      ...ACTIONS,
      open(id) {
        this.selected_id = id;
        this.dialog = true;
      },
      close() {
        if(this.dialog)
        {
          this.dialog = false;
        }
      },
      search() {
        localStorage.setItem('query', this.$parent.query);
        this.$router.push('/influencers');
      },
      hideSearchbar(isVisible) {
        this.$parent.showSearchBar = !isVisible;
      }

    },
    beforeRouteLeave(to, from, next) {
      this.$parent.showSearchBar = true;
      next();
    }
  }

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
      font-family: 'Oswald';
    }

    #header-highlight{
    font-size: 6 * $units;
    font-weight: 400;
    font-family: 'Oswald';
    color: $primary;
    }

    #tagline {
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
        width: $height
      }

      input, button {
        font-size: 1.8 * $units;
        border-radius: 0.5 * $units;
        border: none;
        box-shadow: $shadow;
      }

      input {
        flex: 1;
        padding-left: $height;
        margin-right:  1 * $units;
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
      width: 100%;
      justify-content: space-between;
      padding-right: 15%;
      padding-left: 15%;
      margin: auto;

      li {
        display: inline-block;
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
      background-color: rgba(0, 0, 0, .5);
      transition: opacity .3s ease;
    }

    .modal-container {
      transition: all .3s ease-in-out;
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

  .product-info{
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

  .why-influx{
    height: 300vh;
    display:flex;
    top:0;
  }

  .why-title{
    width:50%;
    height:100vh;
    position:sticky;
    flex-direction:column;
    top:0;
    justify-content:center;
    color:#7a7c7f;
    padding-left:15%;
    padding-top: 20 * $units;
    padding-right: 2.5%;
  }

  #why-heading{
    font-size: 3 * $units;
    color:hsl(0,0%,13%);
  }


#why-heading{
  font-size: 3 * $units;
  color:hsl(0,0%,13%);
  border-bottom: 0.5 * $units solid $primary;
  padding-top: 5%;
}


  .steps-container{
    padding-top: 5%;
    font-size: 3 * $units;
    line-height: 3.5 * $units;
    color:hsl(0,0%,45%);
    padding-right: 10%;
  }


  #why-desc-1{
      font-size: 2.5 * $units;
      line-height: 3.5 * $units;
      color:hsl(0,0%,29%);
  }

  #picture-description{
    font-size: 3 * $units;
    line-height: 3.5 * $units;
    color:hsl(0,0%,29%);
    padding-top: 5%;
  }


.steps-container{
  padding-top: 5%;
  font-size: 3 * $units;
  line-height: 3.5 * $units;
  color:hsl(0,0%,45%);
    padding-right: 10%;
  
}


.Current-Number{
  padding-top: 5%;
  font-size: 3 * $units;
  line-height: 6 * $units;
  color: $primary;
  padding-right:10%;
}


.Current-Step{
  padding-top: 5%;
  font-size: 3 * $units;
  line-height: 6 * $units;
  color:hsl(0,0%,45%);
}

#Number{
  font-size: 2.5 * $units;
  line-height: 6 * $units;
  color:hsl(0,0%,45%);
  padding-right:5%;
}


#Step{
  font-size: 2.5 * $units;
  line-height: 6 * $units;
  color:hsl(0,0%,45%);
}

.why-tutorial{
  width:50%;
  text-align:center;
  padding-right: 15%;
  padding-top: 20 * $units;
  padding-left: 2.5 * $units;

  img{
    height: 50vh;
    justify-content: center;
    box-shadow: 0 4px 6px 0 hsla(0,0%,0%,0.2);
    margin-top: 5%;
  }
  #Step{
    font-size: 2.5 * $units;
    line-height: 6 * $units;
    color:hsl(0,0%,45%);
  }


  .first-tut{
    height:100vh;
    justify-content:left;
    width:100%;
  }

  .second-tut{
    height:100vh;
    justify-content:space-around;
    align-items: center;
  }


  .img-container{

  }

  .third-tut{
    height:100vh;
    justify-content:space-around;
    align-items: center;
  }

  .third-tut{
    height:100vh;
    justify-content:space-around;
    align-items: center;
  }

}
  .call-to-action
  {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    height: 50 * $units;
    width: 100%;
    background:
            /* top, transparent black, faked with gradient */
            linear-gradient(
                            rgba(0, 0, 0, 0.6),
                            rgba(0, 0, 0, 0.6)
            ),
              /* bottom, image */
            url('~@/assets/getstarted.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: white;
    font-size: 3 * $units;
    text-align: center;

    h2, p{
      align-self: center;
      margin: 1 * $units;
      text-shadow: $shadow;
    }

    button {
      align-self:center;
      background-color: $primary;
      color: white;
      height: 5 * $units;
      width: 12 * $units;
      border-radius: 0.5 * $units;
      font-size: 1.8 * $units;
    }
  }



.joindiscord{
  text-align:center;
  padding-top: 2%;
}




.trust-banner{
  height:100vh;
  background-color: $primary;
  color: hsl(216, 100%, 99%);
  transition:ease-in 750ms;



  .trust-left{
    width:50%;
    float:left;
    background-color: $primary;
    height:100vh;
    padding-top:5%;
    transition:ease-in 1000ms;
    padding-bottom:5%;

  }

  .trust-right{
    width:50%;
    float:right;
    background-color: #FFFFFF;
    height:100vh;
    color:#000000;
    text-align: center;
  }

      #header {
      font-size: 6 * $units;
      font-weight: 400;
      font-family: 'Oswald';
      text-align:center;

    }

    #tagline {
      padding-top: 5%;
      font-size: 2.5 * $units;
      color: #FFFFFF;
      text-align:center;
      padding-right:10%;
      padding-left: 10%;
    }

    ul{
      text-align:center;
      font-size: 2.5 * $units;
      list-style-type:none;


      li{
        padding-top: 1.5%;

      }

    }

    #team-pics{
      max-width: 20vw;
      max-height: 20vh;
    }
}
  
</style>

