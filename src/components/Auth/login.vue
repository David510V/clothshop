<template>
   <div>
      <div style="text-align:center">
       <router-link class="home" active-class="active"  to="/" exact>
                <h3 >ClothMe</h3>
                  </router-link>
      <hr class="hr">
      <h8>The Simplest Place For You</h8>
      <br>
       <router-link class="home" active-class="active"  to="/login" exact>
      <h1 class="menl">LOG IN </h1>
       </router-link>
     </div>

     <div class="container" id="cont">
        <form @submit.prevent="login">
           
             <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><h5>Email</h5></label>
                <div class="col-sm-6">
                <input type="text" class="form-control" v-model="email"  placeholder="email@example.com">
                </div>
            </div>
             <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><h5>Password</h5></label>
                <div class="col-sm-6">
                <input type="text" class="form-control" v-model="password"  placeholder="password">
                </div>
            </div>
            <button type="submit" class="btn  mb-2">Confirm identity</button>
      </form>
        
     </div>
   </div>
</template>

<script>
import firebase from 'firebase'
import axios from '../../axios-auth';
import { mapState, mapActions } from "vuex";
export default {
    data() {
      return {
        email: '',
        password: ''
      }
  },
    methods:{
      ...mapActions("storeAuth", ["login","storeUser"]),
       login(){
         const userData = {
          email: this.email,
          password: this.password
        }

        this.$store.dispatch('login', {email:userData.email, name:userData.name, password:userData.password})
       }
    },
  
}
</script>

<style scoped>
.home{
    text-decoration: none;
    color: black
}
.menl{
    text-decoration: line-through; text-decoration-color:#C6A8A2;
    font-size: 35px;
    margin-top: 10px;
    display:inline-block;
}

.supericon{
    margin-bottom: 16px;
    margin-left: 12px;
    display:inline-block;
}
#cont{
    margin-top: 20px
}

.btn{
  background: #C6A8A2;
  color: white
}

.btn:hover{
  opacity: 2;
  color: black;
}
</style>