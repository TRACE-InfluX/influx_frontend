<template>
    <div class="profile">

    <header></header>
    <body>


    <div class="container">
    
    
    <div class="nav">    

    <h3 class="username">john wick</h3>
    <p>@johnwick</p>
    <div class="profile-picture"><img src="https://pixel.nymag.com/imgs/daily/vulture/2017/02/07/07-john-wick-2-2.w100.h100.jpg" /></div>

    <div class="menu">

        <ul>

            <li><i class="zmdi zmdi-view-dashboard"></i><a class="dashboard" href="#">Dashboard</a></li>
            
            <li><i class="zmdi zmdi-email"></i><a class="usremail" href="#">Email</a></li>
            
             <li><i class="zmdi zmdi-settings"></i><a class="settings" href="#">Settings</a></li>
        </ul>    

    </div>

     <div class="dash-content">


   


    </div>

    </div>


     

    
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
        display: inline-block; 
        height: 80vh; 
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

    button {
        text-decoration: none; 
        border: none; 
        background: transparent; 
        font-family: 'Puritan', sans-serif;
        font-size: 2 * $units; 
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
    margin-top: -40 * $units;   
    margin-left: 120 * $units; 
    border: 1px solid var(--bordercol); 
    padding: 35 * $units; 
    width: 40vw; 
    height: 80vh; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    }


    .email-content{

    visibility: hidden; 
    background-color: $primary;
    color: white;  
    align-self: center;

    }



    

</style>
