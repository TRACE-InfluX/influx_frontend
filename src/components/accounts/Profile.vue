<template>
    <div class="profile">

    <header></header>
    <body>


    <div class="container">
    
    
    <div class="nav">    

    <div class="menu">

        <ul>

            <li><i class="zmdi zmdi-view-dashboard"></i><button class="dashboard" @click="dash">Dashboard</button></li>
            
       <!--     <li><i class="zmdi zmdi-email"></i><button class="usremail" @click="getemail">Email</button></li> -->
            
             <li><i class="zmdi zmdi-settings"></i><button class="settings" @click="getsettings">Settings</button></li>
        </ul>    

    </div>

     <div class="dash-content">
    <h3 class="welcomemsg">Welcome to Influx!</h3>    
    <!-- have span class to bind to username, currently placeholder -->  

    <span class="dashdefault">
    <div class="profile-picture"><img src="https://pixel.nymag.com/imgs/daily/vulture/2017/02/07/07-john-wick-2-2.w100.h100.jpg" alt="profile image"/></div>
    <span class="username">signed in as John Wick</span>
    </span>

    <div class="dashemail">
        <p>thebogeyman@gmail.com</p>
        <div class="logout"><button>Logout</button></div>   
    </div>     
    </div>
    </div>
    <!-- end of dash-content --> 

    <div class="settingsform">


    </div>     

     

    
    </div>     
        
    </body> 

    </div>
</template>

<script>


export default {

methods: {
dash: function() {
   
    this.$el.getElementsByClassName('dashdefault')[0].style.visibility = "visible";
    this.$el.getElementsByClassName('dashemail')[0].style.visibility = "visible";
  //  this.$el.getElementByClassName("dashdefault")[0].style.transition = "all 2s";
},

getemail: function(){

    this.$el.getElementsByClassName('dashemail')[0].style.visibility = "visible";
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
        margin-left: 7.5 * $units; 
    }

    .dashdefault, .dashemail {
        visibility: hidden; 
    }

    }
  



    

</style>
