<template>
  <div class="home-page">

    <header>
      <h1>Connect With Your World</h1>
      <h2>Discover Influencers Today!</h2>

      <form @submit.prevent="search">
        <i class="zmdi zmdi-search" />
        <input ref="search" type="search" v-model="query" placeholder="Type to Search...">
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
    </main>

    <dialog :open="dialog">
      <span class="close" @click="close">&times;</span>
      <influencer-view :influencer="selected_influencer" type="detailed"/>
    </dialog>


  

    <div class="product-info">
      <p>Influencers at your fingertips. Just a search away.</p>
        <img src="~@/assets/preview1.png">
    </div>

    <div class="product-info">
      <p>Browse through detailed information to find out if they're right for you.</p>
        <img src="~@/assets/preview2.png">
    </div>

    
    <div class="product-info">
        <a href="https://discord.gg/YJ79pbf" target="_blank">
        <img class="discordbanner" src="https://discordapp.com/api/guilds/497123604287193089/widget.png?style=banner4" alt="InfluX Discord" style="max-width:308px">
      </a>
    </div>
       



    <div class="call-to-action">
      <p>90% of consumers trust peer recommendations and only 33% trust ads. Let your customers hear about you from people they trust.</p>
      <h2>Get started today!</h2>
      <button>Sign Up</button>
    </div>
  </div>
</template>

<script>
  import { STATE, ACTIONS } from '@/store.js'
	export default {
      data() {
        return {
          selected_id: '',
          dialog: false,
          query: ''
        }
      },
      computed: {
        ...STATE,
        selected_influencer() {
          return this.popular.find(i => i.id === this.selected_id) || {}
        }
      },
      mounted() {
        this.load_popular()
        this.$refs.search.focus();
        window.onkeydown = () => {
          this.$refs.search.focus();
        }
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
          localStorage.setItem('query', this.query);
          this.$router.push('/influencers');
        }
      }
	}
</script>

<style lang="scss" scoped>

  header {
    color: white;
    background-image: url("~@/assets/aditya-chinchure-494048-unsplash.jpg");
    background-position: bottom;
    background-size: cover;
    height: 60 * $units;
    padding: 20 * $units 3 * $units 0;

    > * {
      max-width: 70 * $units;
      display: block;
      margin: 3 * $units auto;
      text-align: center;
    }

    h1 {
      font-size: 4.5 * $units;
      text-shadow: $shadow;
    }

    h2 {
      font-size: 3 * $units;
      text-shadow: $shadow;
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
      justify-content: center;

      li {
        display: inline-block;
        max-width: 32 * $units;
        max-height: 32 * $units;
        flex: 1;
        .influencer-view {
          display: block;
          margin: auto;
        }
      }
    }
  }

  dialog {
    transition: all .5s ease-in-out;
    border: none;
    margin: auto;
    position: absolute;
    border-radius: 2 * $units;

    .close {
      padding: 1 * $units;
      position: absolute;
      right: 2 * $units;
      font-size: 4 * $units;
      text-align: center;
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


</style>