<template>
  <div class="home">

     <div style="text-align:center">
      <h2>ClothMe</h2>
      <hr class="hr">
      <h5>The Simplest Place For You</h5>
     </div>
           <div id="carouselExampleIndicators" class="carousel slide d-none d-lg-block d-xl-block" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="../../public/img/cor1.jpg" alt="First slide">
                  <div class="carousel-caption d-none d-md-block first">
                    <h1><strong>Artist way</strong></h1>
                    <p>Show, Don't tell</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../public/img/cor2copy.jpg" alt="Second slide">
                  <div class="carousel-caption d-none d-md-block">
                    <h1><strong>Our New Collection</strong></h1>
                    <p>We are trying to make something splendid</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../public/img/cor3copy.jpg" alt="Third slide">
                   <div class="carousel-caption d-none d-md-block">
                    <h1><strong>Enjoy the new series</strong></h1>
                    <p>First time ever, in TLV, Come and see</p>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
   <div class="container-fluid">
         <div class="row text-center">
          <!--Grid column-->
     
          <div class="col-12 col-md-6 p-0">
            <div class="card text-center">
            <div class="hovereffect">
              <img class="card-img-top"  src="../../public/img/brooke-cagle-KriecpTIWgY-unsplash.jpg" alt="Card image cap">
                <div class="overlay">
                  <h2>MEN</h2>
			          	<p>
				          <router-link  active-class="active"  to="/men" exact>
                  <a style="">See Mens Collection</a>
                  </router-link>
				         </p>
               </div>
                </div>
            </div>
          </div> 
          
          <div class="col-12 col-md-6 p-0">
             <div class="card text-center">
               <div class="hovereffect">
               <img class="card-img-top"  src="../../public/img/womenHome.jpg" alt="Card image cap">
                 <div class="overlay">
                   <h2>WOMEN</h2>
			              	<p>
				            	 <router-link  active-class="active"  to="/women" exact>
                       <a style="">See Womens Collection</a>
                       </router-link>
				              </p>
                  </div>
            </div>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      </div>
    <div class="jumbotron text-center  m-0">
        <h1 class="display-4">ClothMe</h1>
        <p class="lead">We are here you to make the simplest choice in the most complicated world which is fashion.</p>
        <hr class="my-4">
          <p>For more info about who we are and what we do...</p>
          <router-link class="home" active-class="active"  to="/register" exact>
                <a class="btn btn-lg" href="#" role="button">Look For More</a>
         </router-link>
      </div>
   
  
   <br><fot></fot>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import footer from './Footer.vue';
export default {
  data () {
  return {
    publicPath: '/dist'
  }
  },
  components:{
            fot:footer
        }
  
}

</script>

<style lang="scss">
@import '../../src/assets/css/home.css';

</style>
