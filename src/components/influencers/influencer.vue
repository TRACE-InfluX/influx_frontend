<template>
    <div>
        <ul>
            <li>
                <h2>Name: {{influencer.name}}</h2>
                <p>Description: {{influencer.description}}</p>
                <p>Activity: {{influencer.activity}}</p>
                <p>Relevance: {{influencer.relevance}}</p>
                <p>Engagement: {{influencer.engagement}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import API from 'axios'

    export default {
        data() {
            return {
                influencer: {}
            }
        },
        mounted() {
            var routeparams = this.$router.currentRoute.params.id;
            var actualroute = 'http://localhost:4000/v0/influencers/' + routeparams;
            API.get(actualroute)
                .then(res => {
                    this.influencer = res.data.data
                })
                .catch(alert)
        }
    }
</script>

<style lang="scss" scoped>

    li {
        width: 300px;
        display: inline-block;
    }
</style>
