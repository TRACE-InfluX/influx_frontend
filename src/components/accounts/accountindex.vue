<template>
    <div>
        <h1>Accounts yeet</h1>
        <ul>
            <li v-for="account in accounts" :key="account.id">
                <h2>Name: <router-link :to="'/accounts/account/' + account.id">{{account.name}}</router-link></h2>
                Email: {{account.email}}<br />
                Website: {{account.website}}<br />
                      <router-link :to="`/accounts/${account.id}/accountedit`" tag="button">Edit</router-link>
                      <input type='button' value='Delete' @click='deleteRecord(account.id);'>
            </li>
        </ul>
        <form @submit.prevent="send" method="post">
            <p>
                <input type="text" v-model="accountform.email" placeholder="Enter email" />
            </p>
            <p>
                <input type="text" v-model="accountform.name" placeholder="Enter name" />
            </p>
            <p>
                <input type="text" v-model="accountform.website" placeholder="Enter website" />
            </p>
            <p>
                <input type="password" v-model="accountform.password" placeholder="Enter password" />
            </p>
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
                accountform: {}
            }
        },
  mounted() {
    this.loadInfluencers()
  },
  methods: {
    loadInfluencers() {
      API.get('http://localhost:4000/v0/accounts')
        .then(res => {
          this.accounts = res.data.data;
        })
        .catch(alert)
    },

    deleteRecord(id){
      API.delete('http://localhost:4000/v0/accounts/'+id)
      .then(this.loadInfluencers)
      .catch(alert)

    },

    resetRecord(){
      this.accountform = {};
    },

    send: function () {
                var actualroute = 'http://localhost:4000/v0/accounts';
                const account = this.accountform;
                API.post(actualroute, { account })
                .then(this.resetRecord)
                .then(this.loadInfluencers);
            },
        }
    }
</script>

<style lang="scss" scoped>

    li {
        width: 300px;
        display: inline-block;
    }
</style>
