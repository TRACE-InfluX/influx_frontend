<template>
    <div class="profile">

    <header></header>
    <body>
    <div class="nav">    

    <h3 class="username">john wick</h3>
    <p>@johnwick</p>
    <div class="profile-picture"><img src="https://pixel.nymag.com/imgs/daily/vulture/2017/02/07/07-john-wick-2-2.w100.h100.jpg" /></div>

    <div class="menu">

        <ul>

            <li><i class="zmdi zmdi-view-dashboard"></i><a href="#">Dashboard</a></li>
            <li><i class="zmdi zmdi-view-list"></i><a href="#">Tasks</a></li>
            <li><i class="zmdi zmdi-email"></i><a href="#">Email</a></li>
            <li><i class="zmdi zmdi-accounts"></i><a href="#">Contacts</a></li>
            <li><i class="zmdi zmdi-comments"></i><a href="#">Chat</a></li>
            <li><i class="zmdi zmdi-money"></i><a href="#">Deals</a></li>
             <li><i class="zmdi zmdi-settings"></i><a href="#">Settings</a></li>
        </ul>    

    </div>
    </div>


    <div class="container">
    
    

    

    
    </div>     

        
    </body> 

    </div>
</template>

<script>
export default {

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
        float: left; 
        height: 100vh; 
        width: 20vw; 
        padding: 5 * $units; 
        border-radius: 2%;
        border: 1px solid var(--bordercol);
        margin-left: 25 * $units;   
        margin-bottom: 10 * $units;  
        margin-right: 1 * $units; 
        grid-gap: 1 * $units; 
        display: flex; 
        flex-direction: column; 
        align-items: center; 

    }

    .menu {

        margin-top: 5 * $units; 


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
      border: 1px solid var(--bordercol); 
      margin: 5 * $units; 
      display: grid; 
  }

</style>
