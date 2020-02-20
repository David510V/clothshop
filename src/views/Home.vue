<template>
  <div class="home">

     <div style="text-align:center">
      <h2>ClothMe</h2>
      <hr class="hr">
      <h5>The Simplest Place For You</h5>
     </div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100"  src="../../public/img/cor1copy.jpg" alt="First slide">
                 <div class="carousel-caption d-none d-md-block">
                        <h3>Look at Our New Collection</h3>
                        <h6>Fashion and the Pure</h6>
                      </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100"  src="../../public/img/cor2copy.jpg" alt="Second slide">
                   <div class="carousel-caption d-none d-md-block">
                      <h3>Wises and The Strongest</h3>
                      <h6>Simple for you to choose </h6>
                      </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100"  src="../../public/img/cor3copy.jpg" alt="Third slide">
                   <div class="carousel-caption d-none d-md-block">
                        <h3>New 2019 Accessories </h3>
                        <h6>Buy some stuff that look nice</h6>
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
        <p class="lead">
          <a class="btn btn-lg" href="#" role="button">About Me</a>
        </p>
      </div>
  
  <br><br><br><br>
  </div>
</template>

<script>
export default {
  data () {
  return {
    publicPath: '/dist'
  }
}
}
</script>

<style lang="scss">
@import '../../src/assets/css/home.css';
</style>
