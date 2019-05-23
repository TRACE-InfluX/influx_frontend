<template>
    <div class="profile">
    <div class="container">
   
    <div class="nav">    
               
    <div class="menu">
        <h3 class="welcomemsg">Welcome to Influx!</h3>   
        <ul>

            <li><i class="zmdi zmdi-view-dashboard"></i><button>Dashboard</button></li>
            
           <li><i class="zmdi zmdi-settings"></i><button>Settings</button></li>
        </ul>    

    </div>
    </div>


     <div class="dash-content">
   
    <!-- have span class to bind to username, currently placeholder -->  
    <h3 class="signedin">signed in as:</h3>
    <p>  {{ user.email }}  </p>
      
     
    <div class="logout"><button class="buttonbar" @click="logout_back">Logout</button></div>
    </div>
    
    <!-- end of dash-content --> 

  

     

    
    </div>     
        

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

<style lang="scss">

:root {
    --textcol: black; 
    --bordercol: #999999;
    --invisi: white; 

}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 .welcomemsg {
     position: relative; 
     top: -10vh; 
 }

 .container {
     width: 80vw; 
     margin-top: 30 * $units; 
    //  display: flex; 
    //  justify-content: center; 
     display: grid; 
     grid-gap: 1 * $units; 
     grid-template-areas: 'navigation navigation 
                           
                           dashcontent dashcontent'; 

                    
 }


  .nav 
  {
    
     grid-area: navigation; 
     height: 50vh; 
     width: 50vw; 
  }

  .menu 
  {
      position: relative; 
      left: 10vw; 
    //   display: flex;
    //   justify-content: center; 
      width: 40vw; 
      font-family: 'Puritan', sans-serif;
      font-size: 3 * $units; 
      color: $primary; 


      button {
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

li {

     border-left: 5px solid white; 
     padding: 1 * $units; 
     transition: all 0.5s; 
}

 li:hover {
          border-left: 5px solid $primary; 
          padding: 1 * $units; 
      }

  }

  .dash-content {
      
      top: -10vh; 
      grid-area: dashcontent;  
      height: 50vh; 
      width: 50vw; 
      

      button {
          width: 20vw; 
          margin-top: 10 * $units; 
      }
  }

  
</style>