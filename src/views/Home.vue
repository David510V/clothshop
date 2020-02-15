<template>
  <div class="home">

     <div style="text-align:center">
      <h1>ClothMe</h1>
      <hr class="hr">
      <h5>The Simplest Place For You</h5>
     </div>
    

    <div class="contianer" style="margin-top:20px">
      <div class="row">
        <div class="container">
        <!--Grid row-->
         <div class="row justify-content-around">
          <!--Grid column-->
     
          <div class="col-10 col-lg-4">
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
      
      
          <div class="col-10 col-lg-4">
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
    </div>
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
