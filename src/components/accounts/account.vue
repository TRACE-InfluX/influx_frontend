<template>
    <div>
        <ul>
            <li>
                <h2>Name: {{account.name}}</h2>
                <p>Email: {{account.email}}</p>
                <p>Website: {{account.website}}</p>

            </li>
        </ul>
        
    </div>
</template>

<script>
    import API from 'axios'
    
    export default {
        data() {
            return {
                account: {}
            }
        },
        mounted() {
            var routeparams = this.$router.currentRoute.params.id;
            var actualroute = 'http://localhost:4000/v0/accounts/' + routeparams;
            API.get(actualroute)
                .then(res => {
                    this.account = res.data.data
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
