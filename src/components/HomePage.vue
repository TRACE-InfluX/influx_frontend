<template>
  <div class="home-page">

    <header>
      <h1>Connect With Your World</h1>
      <h2>Discover Influencers Today!</h2>

      <form @submit.prevent="search">
        <i class="zmdi zmdi-search" />
        <input type="search" v-model="query" placeholder="Search">
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

    <dialog :open="dialog" @click="close">
      <influencer-view :influencer="popular[selected_influencer]" type="detailed"/>
    </dialog>

  </div>
</template>

<script>
	export default {
		data() {
			return {
				popular: [
					{
						"id": 0,
						"name": "Subtle Asian Cat",
            "description": "A surprised Pikachu",
						"activity": 111,
						"relevance": 222,
						"engagement": 333
					},
					{
						"id": 1,
						"name": "Subtle Asian Cat",
            "description": "A surprised Pikachu",
						"activity": 111,
						"relevance": 222,
						"engagement": 333
					},
					{
						"id": 2,
						"name": "Subtle Asian Cat",
            "description": "A surprised Pikachu",
						"activity": 111,
						"relevance": 222,
						"engagement": 333
					},
					{
						"id": 3,
						"name": "Dankiel Yeetington",
						"description": "Dankest yeet watch maker",
						"activity": 44,
						"relevance": 55,
						"engagement": 66
					}
				],
				selected_influencer: 0,
				dialog: false,
        query: ''
			}
		},
		methods: {
			open(id) {
				this.selected_influencer = id;
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
</style>
