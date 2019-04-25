<!-- default account view - displays all accounts-->
<template>
    <div>
        <h1>Accounts</h1>
        <ul>
            <li v-for="account in accounts" :key="account.uid">
                <!--<h2>Name: <router-link :to="'/accounts/account/' + account.uid">{{account.name}}</router-link></h2>-->
                Email: {{account.email}}<br />
                      <!--<router-link :to="`/accounts/${account.id}/accountedit`" tag="button">Edit</router-link>
                      <input type='button' value='Delete' @click='deleteRecord(account.id);'>-->
            </li>
        </ul>
        <!-- adding new account-->
        <h1> Add New Account </h1>
        <!-- calls submit function in methods array below-->
        <form @submit.prevent="send" method="post">
            <p><input type="text" v-model="new_account.email" required placeholder="Enter email" /></p>
            <p><input type="text" v-model="new_account.name" required placeholder="Enter name" /></p>
            <p><input type="text" v-model="new_account.website" required placeholder="Enter website" /></p>
            <p><input type="password" v-model="new_account.password" required placeholder="Enter password" /></p>
            <input type="submit" name="Add" />
            <input type="reset" value="Clear" @click='resetRecord' />
        </form>
    </div>
</template>

<script>
    //package to make httprequests
    import API from '@/api.js'

    export default {
        data() {
            return {
                //data for all accounts to show
                accounts: [],
                //data for binding form to a new account being added
                new_account: {}
            }
        },
  mounted() {
    this.loadAccounts()
  },
  methods: {
      //loading instance of accounts (not influencers)
    loadAccounts() {
      API.get('/v0/accounts')
          .then(res => {
              
          this.accounts = res.data;
        })
        .catch(alert)
    },
      //Deleteing an account
    deleteRecord(id){
      API.delete('/v0/accounts/'+id)
      .then(this.loadAccounts)
      .catch(alert)

    },
    //reset the form fields
    resetRecord(){
      this.new_account = {};
    },
    //function to send / POST data to backend
    send: function () {
                var actualroute = '/v0/accounts';
                const account = this.new_account;
                API.post(actualroute, { account })
                .then(this.resetRecord)
                .then(this.loadAccounts);
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
