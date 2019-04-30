<template>
<div class="home-page">
  <header>
      <h1>Connect With Your World</h1>
      <h2>Discover Influencers Today!</h2>
    <form>
      <input type="text" placeholder="Search">
      <button type="button">Discover</button>
    </form>
  </header>
  <div class="popular">
    <h1>Popular</h1>
      <li v-for="popularInfluencer in popular" :key="popularInfluencer.id">
        <div class="tile" @click="open(popularInfluencer.id)">
          <img src="@/assets/profile.png">
          <influencer-view :influencer="popularInfluencer" type="tile"/>
        </div>
      </li>
  </div>
  <dialog :open="dialog" @click="close">
    <influencer-view :influencer="popular[selected_influencer]" type="detailed"/>
  </dialog>
</div>
</template>

<script>
	import InfluencerView from "./influencers/InfluencerView";
	export default {
		components: {InfluencerView},
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
						"name": "Dankiel Yeetington",
						"description": "Dankest yeet watch maker",
						"activity": 44,
						"relevance": 55,
						"engagement": 66
					}
				],
				selected_influencer: '',
				dialog: false
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
      height: 5 * $units;
      display: flex;

      > * {
        font-size: 1.8 * $units;
        border-radius: 0.5 * $units;
        border: none;
        box-shadow: $shadow;
      }

      input {
        flex: 1;
        margin-right: 1 * $units;
        padding-left: 1.5 * $units;
      }

      button {
        background-color: $primary;
        color: white;
        width: 12 * $units;
      }
    }
  }

	.popular {
		height: 100%;
		display: inline-block;
		padding: 12px;
	}
	.popular img {
		height: 100px;
		width: 100px;
	}

	.tile {
		border: 1px solid grey;
		padding: 12px;
	}

	dialog {
		border: 1px solid grey;
		padding: 12px;
		margin: auto;
		position: fixed;
		top: 50%;
	}
</style>
