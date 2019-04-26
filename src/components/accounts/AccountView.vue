<!--Template for showing a single account-->
<template>
    <div class="account-view">
      <h2>Name: {{account.name}}</h2>
      <p>Email: {{account.email}}</p>
      <p>Website: {{account.website}}</p>
    </div>
</template>

<script>
    //package to make HTTPrequests
    import API from '@/api.js'
    
    export default {
        data() {
            return {
                //data to fill in from API call
                account: {}
            }
        },
        mounted() {
            //on component instance being mounted get the data required to display account data
            //via GET + id
            var routeparams = this.$router.currentRoute.params.id;
            var actualroute = '/v0/accounts/' + routeparams;
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
