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
          <!-- Popular tile is messed up right now, really tall, because the tile and the expanded view are the same height. Will fix -->
          <influencer-view type="tile"
            @click.native="open(popularInfluencer.id)"
            :influencer="popularInfluencer"
          />
        </li>
      </ul>

    </main>

    <dialog :open="dialog" @click="close">
      <influencer-view :influencer="selected_influencer" type="detailed"/>
    </dialog>

    <div class="help">

    <img src="~@/assets/preview.png" />


    </div>


    <div class="call-to-action">
      <p>90% of consumers trust peer recommendations and only 33% trust ads. Let your customers hear about you from people they trust.</p>
      <h2>Get started today!</h2>
      <button>sign up</button>
    </div>

    <footer>

      <h3>Ready to get started?</h3>
      <p> Lorem Ipsum </p>

      <ul>

      <li>Product Company</li>  
      <li>Product Company</li>  
      <li>Product Company</li>  
      <li>Product Company</li>  
      <li>Product Company</li>  
      <li>Product Company</li>  
      <li>Product Company</li>  


      </ul>  

    </footer>  

  </div>
</template>

<script>
  import API from '@/api.js'
	export default {
      data() {
        return {
          popular: [],
          selected_id: '',
          dialog: false,
          query: '',
        }
      },
      computed: {
        selected_influencer() {
          return this.popular.find(i => i.id === this.selected_id) || {}
        }
      },
      mounted() {
        this.$refs.search.focus();
        window.onkeydown = () => {
          this.$refs.search.focus();
        }
        API.get('/v0/influencers').then(res=>{
          this.popular = res.data.sort((a,b) => b.activity - a.activity).slice(0,4)
        })
      },
      methods: {
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
          localStorage.setItem("query", this.query);
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
        width: $height;
        line-height: $height;
        font-size: 3 * $units;
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
        flex: 1;
        .influencer-view {
          display: block;
          margin: auto;
        }
      }
    }

  }
	dialog {
		border: 1px solid grey;
		padding: 12px;
		margin: auto;
		position: fixed;
		top: 50%;
  }
  
  .help
  {

    display: flex; 
    justify-content: center; 

  }

  .call-to-action{
   
    display: flex; 
    flex-flow: column wrap; 
    justify-content: center; 
    height: 50 * $units; 
    background:url('~@/assets/getstarted.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    color: white; 


  h2, p{
     align-self: center; 
     margin: 1 * $units; 
     text-shadow: $shadow; 
  } 
  

  button {
        align-self: center; 
        background-color: $primary;
        color: white;
        height: 6 * $units; 
        width: 15 * $units;
      }

  }

    footer
  {

    display: flex; 
    justify-content: space-around; 
    height: 50 * $units; 
    width: 100%;
    background-color: $footer-color; 

  h3, p, ul
  {
    align-self: center; 
    list-style: none; 
  }  

  }
</style>
