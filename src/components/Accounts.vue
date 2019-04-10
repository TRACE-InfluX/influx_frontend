<template>
    <div>
        <h1>Accounts yeet</h1>
        <ul>
            <li v-for="account in accounts" :key="account.id">
                <h1>Name: <router-link :to="'/accounts/' + account.id">{{account.name}}</router-link></h1>
                Email: {{account.email}}<br />
                Website: {{account.website}}<br />
            </li>
        </ul>
        <form @submit.prevent="send" method="post">
            <input type="text" v-model="accountform.email" placeholder="Enter email" />
            <input type="text" v-model="accountform.name" placeholder="Enter name" />
            <input type="text" v-model="accountform.website" placeholder="Enter website" />
            <input type="password" v-model="accountform.password" placeholder="Enter password" />
            <input type="submit" name="Submit" />
        </form>
    </div>
</template>

<script>
    import API from 'axios'

    export default {
        data() {
            return {
                accounts: [],
                accountform: {
                    email: '',
                    password: '',
                    website: '',
                    name: ''
                }
            }
        },
        mounted() {
            API.get('http://localhost:4000/v0/accounts')
                .then(res => {
                    this.accounts = res.data.data
                })
                .catch(alert)
        },
        methods: {
            send: function () {
                var actualroute = 'http://localhost:4000/v0/accounts';

                const account = {
                    email: this.accountform.email,
                    name: this.accountform.name,
                    website: this.accountform.website,
                    password: this.accountform.password
                }
                API.post(actualroute, { account });
            }
        }
    }
</script>

<style lang="scss" scoped>

    li {
        width: 300px;
        display: inline-block;
    }
</style>