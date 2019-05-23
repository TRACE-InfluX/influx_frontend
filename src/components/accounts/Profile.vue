<template>
    <div class="profile">

    <header></header>
    <body>


  
    
    <div class="container">
    <div class="nav">    

    <div class="menu">

        <ul>

            <li><i class="zmdi zmdi-view-dashboard"></i><button class="dashboard">Dashboard</button></li>
            
           <li><i class="zmdi zmdi-settings"></i><button class="settings">Settings</button></li>
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
     display: grid; 
     grid-template-areas: 'navigation dash
                          dashcontent auto'; 
 }


  .nav 
  {
      grid-area: navigation; 
  }

  .menu 
  {
      grid-area: dash; 
  }

  .dash-content {
      grid-area: dashcontent; 
  }


    

</style>
