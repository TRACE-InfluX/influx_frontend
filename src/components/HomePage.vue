<template>
	<main>
		<header class="home-page">
			<form>
				<h1>Connect With Your World</h1>
				<h2>Discover Influencers Today!</h2>
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
	</main>
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

<style scoped>
	header {
		color: white;
		margin-top: 10px;
		background-image: url("../assets/aditya-chinchure-494048-unsplash.jpg");
		background-position: bottom;
		background-size: 100%;
		height: 500px;
	}

	form {
		margin: 20px;
		line-height: 300px;
		display: block;
	}

	form > * {
		height: 40px;
		margin: 10px;
		border-radius: .5em;
		padding: 8px;
	}

	form input {
		border: 1px solid grey;
	}

	form button {
		background-color: #458eff;
		color: white;
		border: 0;
	}

	.popular {
		height: 200px;
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
