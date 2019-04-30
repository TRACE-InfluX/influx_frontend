<!--Template used for rendeing an individual influencer - used for show / GET influencer by ID-->
<template>
    <div>
        <ul>
            <li>
                <p>Email: {{user.email}}</p>
                <p>Password: {{user.password}}</p>

            </li>
        </ul>
    </div>
</template>

<script>
    //package to send httprequests
    import API from 'axios'

    export default {
        name: 'UserList',
        data: () => ({
            Users: [],
            user: {
                email: '',
                password: '',
    }
  }),
        mounted() {
            //appending id to URL to backend application in a RESTish manner
            var actualroute = 'http://localhost:3000/v0/auth/';
            API.get(actualroute)
                .then(res => {
                    //populating user data with response data
                    this.Users = res.data.data
                })
                .catch(alert)
        }
    }
</script>

<!--component specific styling-->
<style lang="scss" scoped>

    li {
        width: 300px;
        display: inline-block;
    }
</style>
