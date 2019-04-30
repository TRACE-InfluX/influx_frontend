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
		<h1 class="popular-h1">Popular</h1>
				<li v-for="popularInfluencer in popular" :key="popularInfluencer.id">
					<div class="tile" v-on:click="dialog=!dialog" v-bind:class="{dialog:dialog}" @click="open(popularInfluencer.id)">
						<img class="popimg" src="@/assets/why.jpg" :style="style">
						<influencer-view :influencer="popularInfluencer" type="tile"/>
					</div>
				</li>
		</div>
		<dialog :open="dialog" @click="close">
			<influencer-view :influencer="popular[selected_influencer]" type="detailed" v-show="dialog"/>
		</dialog>

		<div class="features">
			<h2> some features go here blah </h2>
		</div> 	
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
					},
					{
						"id": 2,
						"name": "Nooter Noot Noot",
						"description": "Nootiest Nooter sending Noots",
						"activity": 69,
						"relevance": 69,
						"engagement": 69					}
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

	li { 
				list-style: none; 
				display: inline-block;
			}

	.popular {
		margin-left: 40 * $units; 
		padding: 1 * $units;
	}

	.popular-h1 {
		display: block; 
		font-size: 5 * $units; 
	}

	.popimg {
	
		height: 20 * $units; 
		width: 20 * $units; 
		border-radius: 50%;
	}

	.tile {
		margin: 1 * $units; 
		width: 30 * $units;
		height: 30 * $units;
		border: 1px solid #ededed;
		padding: 2 * $units; 
		text-align: center; 
		transition: all .3s ease-in-out;
		box-shadow: 1px 1px grey; 
		
		&:hover {
			background-color: #ededed;
			transform: scale(1.1);
			transform: rotate(180deg);
			
		}
		
	}


	dialog {

		transition: all .3s ease-in-out;
		border: 1px solid #ededed;
		padding: 1 * $units; 
		margin: auto;
		position: fixed;
		top: 50%;
	}

</style>
