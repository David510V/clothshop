<template>
<div>
     <br><div class="container">
     <div class="row sibling-fade">
        <div class="col-sm-4">

            <div class="card">
            <img class="card-img-top" height="423px" src="../../../public/img/women/pants.jpg" alt="Card image cap">    
            <div class="card-body">
                <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/women/womenPants" exact>
                 <button type="button" id="btn" class="btn btn-light btn-lg">Pants</button>
                  </router-link>
                  </h4>
            </div>
            </div>

        </div>

        <div class="col-sm-4">

            <div class="card">
            <img class="card-img-top" height="423px" src="../../../public/img/women/shirts1.jpg" alt="Card image cap">    
            <div class="card-body">
            <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/women/womenShirts" exact>
                 <button type="button" id="btn" class="btn btn-light btn-lg">Shirts</button>
                  </router-link>
            </h4>
            </div>
            </div>

        </div>
        <div class="col-sm-4">

            <div class="card">
            <img class="card-img-top" height="423px" src="../../../public/img/women/sweaters.jpg" alt="Card image cap">    
            <div class="card-body">
            <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/women/womenSweaters" exact>
                 <button type="button" id="btn" class="btn btn-light btn-lg">Sweaters</button>
                  </router-link>
            </h4>
            </div>
            </div>

        </div>
       
        <div class="col-sm-4">

            <div class="card">
            <img class="card-img-top" height="423px" src="../../../public/img/women/shoes.jpg" alt="Card image cap">    
            <div class="card-body">
            <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/women/womenShoes" exact>
                 <button type="button" id="btn" class="btn btn-light btn-lg">Shoes</button>
                  </router-link>
            </h4>
            </div>
            </div>

        </div>

        <div class="col-sm-4">

            <div class="card">
            <img class="card-img-top" height="423px" src="../../../public/img/women/sport.jpg" alt="Card image cap">    
            <div class="card-body">
            <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/women/womenSports" exact>
                 <button type="button" id="btn" class="btn btn-light btn-lg">Sports</button>
                  </router-link>
            </h4>
            </div>
            </div>

        </div>
        <div class="col-sm-4">

            <div class="card">
            <img class="card-img-top" height="423px" src="../../../public/img/women/accessories.jpg" alt="Card image cap">    
            <div class="card-body">
            <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/women/womenAccessories" exact>
                 <button type="button" id="btn" class="btn btn-light btn-lg">Accessories</button>
                  </router-link>
            </h4>
            </div>
            </div>

        </div><br>
        
     </div>

    </div>

</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  
 data () {
  return {
    publicPath: '/dist'
  }
}
}
</script>

<style lang="scss" scoped>
@import '../../../src/assets/css/mainpage.css';

</style>