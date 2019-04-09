<template>
    <div>
        <h1>Accounts yeet</h1>
        <ul>
            <li v-for="account in accounts" :key="account.id">
                <h1>Name: {{account.name}}</h1>

                Email: {{account.email}}<br />
                Website: {{account.website}}<br />
            </li>
        </ul>
        <p></p>
    </div>
</template>

<script>
    import API from 'axios'

    export default {
        data() {
            return {
                accounts: []
            }
        },
        mounted() {
            API.get('http://localhost:4000/v0/accounts')
                .then(res => {
                    this.accounts = res.data.data
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