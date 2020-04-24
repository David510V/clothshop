<template>
   <div>
       
      <div style="text-align:center">
                <h3 class="home" >ClothMe</h3>
      <hr class="hr">
      <h6>The Simplest Place For You</h6>
      <br><br>
      <h1 class="home men">CART </h1><img class="supericon" height="34px" src="../../public/img/shopping-cart.png">
     </div>

     <div class="container">
         <div class="row">
             
             <div class="col-12">
                 <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Size</th>
                        <th scope="col">Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr v-for="(item,index) in items" :key="index">
                        <th scope="row">{{item.size}}</th>
                        <td>{{item.title}}</td>
                        <td>{{item.price}} ILS</td>
                        <td><img height="120px" class="img-fluid rounded" width="170px" :src="require(`../../public/img/${item.gender}/${item.catg}/${item.id}.jpg`)" alt="Responsive image"></td>
                        <td><i  @click="removeItem(item.id)" class="far fa-trash-alt iconbtn"></i></td>
                        </tr>
                       
                    </tbody>
                    </table>
             </div>
             <div class="col-sm-2"><br><br><br></div>

        <div class="col-12">
            <h5>Total cost: {{totalPrice}} ILS </h5><hr>
            <h5>Number of Items: {{items.length}}</h5><hr>
            
        </div>
        <div class="col-12">
            <div ><a class="times" data-dismiss="modal">&times;</a></div>
        </div>
         </div>

     </div>

   </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed:mapGetters({
        items:'itemsCart',
        totalPrice:'totalPrice'
    }
    ),
  data(){
      return {
         
      }
  },

    methods:{
       removeItem(id){
         this.$store.dispatch('removeItem',id);
          console.log(id)
       }
    },
  
}
</script>

<style scoped>
.home{
    text-decoration: none;
    color: black
}

th,h5,td,tr{
    font-family: 'Oswald', sans-serif;
}
td,th{
    font-size: 17px
}
.men{
    text-decoration: line-through; text-decoration-color:#C6A8A2;
    font-size: 35px;
    display:inline-block;
}

.supericon{
    margin-bottom: 16px;
    margin-left: 12px;
    display:inline-block;
}

.container{
    margin-top: 20px;
}

.check{
    text-align: center;
    margin-bottom: 15px;
    font-size: 20px;
    background: #C6A8A2;
    color: white;
    font-family: 'Oswald', sans-serif;
}

#check{
    text-align: center;
}

.times{
    font-size: 50px;
    cursor: pointer;
    padding: 0rem; 
    
    
}

.check:hover{
  opacity: 2;
  color: black;
}
.iconbtn{
    font-size: 23px
}
.iconbtn:hover{
  opacity: 3;
  color: rgb(177, 160, 160); 
}
</style>