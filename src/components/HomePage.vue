<template>
    <header class="home-page">
        <form>
            <h1>Connect With Your World</h1>
            <h2>Discover Influencers Today!</h2>
            <input type="text" placeholder="Search">
            <button type="button">Discover</button>
        </form>
    </header>

</template>

<script>
    export default {
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
</style>
