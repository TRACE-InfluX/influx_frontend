<template>
    <div class="profile">

    <header></header>
    <body>


  
    
    <div class="container">
    <div class="nav">    

    <div class="menu">

        <ul>

            <li><i class="zmdi zmdi-view-dashboard"></i><button>Dashboard</button></li>
            
           <li><i class="zmdi zmdi-settings"></i><button>Settings</button></li>
        </ul>    

    </div>
    </div>


     <div class="dash-content">
    <h3 class="welcomemsg">Welcome to Influx!</h3>    
    <!-- have span class to bind to username, currently placeholder -->  
    <h3 class="signedin">signed in as:</h3>
    <p>  {{ email }}  </p>
      
     
    <div class="logout"><button class="buttonbar" @click="logout">Logout</button></div>
    </div>
    
    <!-- end of dash-content --> 

  

     

    
    </div>     
        
    </body> 

    </div>
</template>

<script>

import API from '@/api.js'


export default {

data(){

return{
    email: ""
}

},

mounted(){
   this.getaccount()
  
},  

methods: {

    getaccount: function(){
        
        API.get('/v0/accounts/me',{}, {headers: {'Authorization': `Bearer ${localStorage.bearertoken}`}}).then(res => {this.email = res.data.email})
        
    }, 
    logout: function(){

    // need logic for logout
     this.$router.push('/')
     
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

 .container {
     margin-top: 40 * $units; 
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
      
      display: flex;
      justify-content: center; 
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
     display: inline; 
     border-bottom: 5px solid white; 
     padding: 1 * $units; 
     transition: all 0.5s; 
}

 li:hover {
          border-bottom: 5px solid $primary; 
          padding: 1 * $units; 
      }

  }

  .dash-content {
      
      margin-top: -10 * $units; 
      grid-area: dashcontent;  
      height: 50vh; 
      width: 50vw; 
      

      button {
          width: 20vw; 
          margin-top: 10 * $units; 
      }
  }

  
</style>