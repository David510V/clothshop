<template>
<div>
     <br><div class="container">
     <div class="row sibling-fade">
        <div class="col-sm-4">

            <div class="card">
            <img class="card-img-top" height="423px" width="100px" src="../../../public/img/men/pants.jpg" alt="Card image cap">    
            <div class="card-body">
                <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/men/menPants" exact>
                 <button type="button" id="btn" class="btn btn-light btn-lg">Pants</button>
                  </router-link>
                  </h4>
            </div>
            </div>

        </div>

        <div class="col-sm-4">

            <div class="card">
            <img class="card-img-top" height="423px" width="100px" src="../../../public/img/men/shirts.jpg" alt="Card image cap">    
            <div class="card-body">
            <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/men/menShirts" exact>
                 <button type="button" id="btn" class="btn btn-light btn-lg">Shirts</button>
                  </router-link>
            </h4>
            </div>
            </div>

        </div>
        <div class="col-sm-4">

            <div class="card">
            <img class="card-img-top" height="423px" width="100px" src="../../../public/img/men/sweater.jpg" alt="Card image cap">    
            <div class="card-body">
            <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/men/menSweaters" exact>
                 <button type="button" id="btn" class="btn btn-light btn-lg">Sweaters</button>
                  </router-link>
            </h4>
            </div>
            </div>

        </div>
 
        <div class="col-sm-4">

            <div class="card">
            <img class="card-img-top" height="423px" width="100px" src="../../../public/img/men/shoes.jpg" alt="Card image cap">    
            <div class="card-body">
            <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/men/menShoes" exact>
                 <button type="button" id="btn" class="btn btn-light btn-lg">Shoes</button>
                  </router-link>
            </h4>
            </div>
            </div>

        </div>

        <div class="col-sm-4">

            <div class="card">
            <img class="card-img-top" height="423px" width="100px" src="../../../public/img/men/sports.jpg" alt="Card image cap">    
            <div class="card-body">
            <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/men/menSports"  exact>
                 <button type="button" id="btn" class="btn btn-light btn-lg">Sports</button>
                  </router-link>
            </h4>
            </div>
            </div>

        </div>
        <div class="col-sm-4">

            <div class="card">
            <img class="card-img-top" height="423px" width="100px" src="../../../public/img/men/accessiores.jpg" alt="Card image cap">    
            <div class="card-body">
            <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/men/menAccessories" exact>
                 <button type="button" id="btn" class="btn btn-light btn-lg">Accessories</button>
                  </router-link>
            </h4>
            </div>
            </div>

        </div><br>

          <!-- <div class="card">
            <img class="card-img-top" height="423px" width="100px" src="../../../public/img/men/accessiores.jpg" alt="Card image cap">    
            <div class="card-body">
            <h4 class="display-4" style="text-align:center">
                <router-link  active-class="active"  to="/men/:id"  exact>
                 <button type="button" id="btn" class="btn btn-light btn-lg">Something</button>
                  </router-link>
            </h4>
            </div>
            </div> -->
        
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


<style lang="scss">
@import '../../../src/assets/css/mainpage.css';

</style>