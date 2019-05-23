<template>
    <div class="loading">
        <img src="~@/assets/Preloader_3.gif">
    </div>
</template>

<script>
    export default {
        name: "LoadingScreen"
    }
</script>

<style lang="scss" scoped>
    .loading {
        height: 10 * $units;
        width: 45%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        z-index: 9999;
        padding-top: 2 * $units;
    }

</style>
