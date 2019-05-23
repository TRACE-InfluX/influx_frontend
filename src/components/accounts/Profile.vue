<template>
    <div class="profile-page">
        <h2 class="welcomemsg">Welcome to Influx!</h2>
        <h3 class="signedin">signed in as:</h3>
        <p>  {{ user.email }}  </p>
        <!--<ul>-->

            <!--<li><i class="zmdi zmdi-view-dashboard"></i><button>Dashboard</button></li>-->

           <!--<li><i class="zmdi zmdi-settings"></i><button>Settings</button></li>-->
        <!--</ul>-->
        <button class="buttonbar" @click="logout_back">Logout</button>
    </div>


</template>

<script>

import {ACTIONS, STATE} from '@/store.js'


export default {

    data(){

        return{
        }

    },

    computed: {
        ...STATE
    },
    methods: {
        ...ACTIONS,
        logout_back() {
            this.logout().then(() => {
                this.$router.push('/')
            })
        }
    }

}
</script>

<style lang="scss" scoped>

    .profile-page {
        margin-top: 30 * $units;
        min-height: 54vh;
        > * {
            margin: auto;
            margin-bottom: 3 * $units;
            text-align: center;
        }

        h2 {
            color: $primary;
            font-size: 5 * $units;
        }

        li button {
            font-family: 'Puritan', sans-serif;
            font-size: 2 * $units;
            color: $primary;
            background: none;
            border: none;
            outline: none;
        }

        ul {
            list-style: none;
        }


        .buttonbar {
            display: block;
            margin: auto;
            width: 18 * $units;
        }
        li {

            border-left: 5px solid white;
            padding: 1 * $units;
            transition: all 0.5s;
        }
        i {
            color: $primary;
        }
        li:hover {
            border-left: 5px solid $primary;
            padding: 1 * $units;
        }


    }

</style>
