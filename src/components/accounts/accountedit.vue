
<!-- edit page for accounts -->
<template>
    <!-- calls submit function on form submit-->
    <form id="form"
          @submit.prevent="submit">
        <p>
            <label for="name">Name: </label>
            <input id="name"
                   v-model="account.name"
                   type="text"
                   name="name">
        </p>
        <p>
            <label for="email">Email: </label>
            <input id="email"
                   v-model="account.email"
                   type="text"
                   name="email">
        </p>
        <p>
            <label for="website">Website: </label>
            <input id="website"
                   v-model="account.website"
                   type="text"
                   name="website">
        </p>
        <p>
            <label for="password">Password: </label>
            <input id="password"
                   v-model="account.password"
                   type="text"
                   name="password">
        </p>
        <p>
            <input type="submit"
                   value="Submit">
        </p>
    </form>
</template>

<script>
  //package to make HTTPrequests :)
  import API from '@/api.js'

export default {
  name:"accountform",
  data() {
      return {
        //data for specific account
        account: {}
    }
  },
        mounted() {
      //API call to backend via GET + id
    API.get('/v0/accounts/' + this.$route.params.id)
        .then(res => {
            this.account = res.data.data
        })
        .catch(alert)
  },
  methods: {
      submit() {
        //onsubmit function update record of the specific account +  the single patch request in our frontend repo
        API.patch('/v0/accounts/' + this.$route.params.id,
        {account: this.account})
        .then(res => {
            alert('saved')
            this.account = res.data.data
        })
        .catch(alert)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
