<template>
    <div>
        <ul>
            <li>
                <h1>Name: {{account.name}}</h1>

                Email: {{account.email}}<br />
                Website: {{account.website}}<br />

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