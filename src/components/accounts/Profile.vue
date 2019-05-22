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

     <div class="dash-content">
    <h3 class="welcomemsg">Welcome to Influx!</h3>    
    <!-- have span class to bind to username, currently placeholder -->  
    <h3 class="signedin">signed in as:</h3>
    <p>  {{ email }}  </p>
      
     
    <div class="logout"><button class="buttonbar" @click="logout">Logout</button></div>
    </div>
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

  header {
    
      margin-top: 15 * $units; 
  }

  body {
        
    font-family: 'Puritan', sans-serif;
    line-height: 1.4;
  }

    .nav {
        display: inline-block; 
        height: 60vh; 
        width: 20vw; 
        padding: 5 * $units; 
        border-radius: 2%;
        border: 1px solid var(--bordercol);
        margin-left: 25 * $units;   
        margin-top: 10 * $units;  
        margin-bottom: 10 * $units;  
        margin-right: 1 * $units; 
        grid-gap: 1 * $units; 
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 

    }

    .menu {

    ul {
        margin-top: 20 * $units;
    } 

    li {
      
      padding: 2 * $units;   
      list-style: none; 
      width: 100%; 
      border-left: 0.5 * $units solid var(--invisi);

     &:hover {
          border-left: 0.5 * $units solid $primary;
          transition: 0.3s ease;
        }
     }

     button {
         border: none; 
         background: none; 
         color: $primary; 
         font-family: 'Puritan', sans-serif;
         font-size: 2 * $units; 
         outline: inherit;
     }


    a {
      padding: 2 * $units;     
      color: var(--textcol);  
      text-decoration: none; 
      width: 100%;       
    }

    i {
        color: $primary; 
    }


    }
    

  .container {
      border-radius: 1%;
      height: 100vh; 
      width: 100vw; 
    //   border: 1px solid var(--bordercol); 
      margin: 5 * $units; 
      display: grid; 
      grid-template-columns: auto auto; 
  }

  .dash-content{
    margin-top: -37 * $units;   
    margin-left: 120 * $units; 
    border: 1px solid var(--bordercol); 
    padding: 20 * $units; 
    width: 40vw; 
    height: 60vh; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 

    .welcomemsg {
        font-family: 'Puritan', sans-serif;
        color: $primary;
        animation: mymove 5s infinite;
    }

     img {
        margin-left: 2.5 * $units; 
        border-radius: 50%;
       
    }

    .logout {
       
        margin-left: 0.5 * $units; 
        margin-top: 2 * $units; 
    }

    .buttonbar {
        width: 10vw; 
    }
    // .dashdefault, .dashemail, .settingsform {
    //    display: none; 
    // }

    }

  



    

</style>