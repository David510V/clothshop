<template>
   <div>
      <div style="text-align:center">
       <router-link class="home" active-class="active"  to="/" exact>
                <h3 >ClothMe</h3>
                  </router-link>
      <hr class="hr">
      <h8>The Simplest Place For You</h8>
       <br><br>
       <router-link class="home" active-class="active"  to="/women" exact>
      <h1 class="women">WOMEN</h1>
       </router-link>
     </div>
    
   <transition  class="tran"
                enter-active-class="animated bounceInRight"
                mode="out-in">
                    <router-view></router-view>
                </transition>
   </div>
</template>

<script>
export default {
  
    methods:{
        navigateToWomen(){
           this.$router.push({path:'/women'})
        }
    },
  
}
</script>

<style  scoped>
.tran{
  opacity: 3;
}
h3{
    font-family: 'Oswald', sans-serif;
}
h6{
font-family: 'Oswald', sans-serif;
}
.home{
    text-decoration: none;
    color: black;
}
.women{
   text-decoration: line-through; text-decoration-color:#C6A8A2;
    font-size: 35px
}

.women:hover{
    opacity: 1;
    font-size: 35px
}
</style>