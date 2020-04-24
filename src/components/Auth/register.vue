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
      <h1 class="menR">REGISTER </h1>
       </router-link>
     </div>


    <div v-if="errorShow">
      <p class="alert alert-danger" style="text-align:center">{{errorShow}}</p>
    </div>

     <div class="container" id="cont">
      <div class="row">
        <div class="col-12">
            <form @submit.prevent="register" id="sign-up">
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><h5>Name</h5></label>
                <div class="col-sm-6">
                <input id="name" type="text" class="form-control" v-model="name" placeholder="Johny Bravo">
                </div>
            </div>
             <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><h5>Email</h5></label>
                <div class="col-sm-6">
                <input type="text" class="form-control" v-model="email"  placeholder="email@example.com">
                </div>
            </div>
             <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><h5>Password</h5></label>
                <div class="col-sm-6">
                <input type="text" v-model="password" class="form-control"  placeholder="MORE THAN 6 NUMBERS">
                </div>
            </div>
            <div style="text-align:center;">
              <button  type="submit" class="btn mb-2">Confirm identity</button>
            </div>
      </form>
        </div>
      </div>
     </div>
   </div>
</template>

<script>
import firebase from 'firebase'
import axios from '../../axios-auth';
import { mapState, mapGetters, mapActions } from "vuex";


export default {
  data() {
      return {
        email: '',
        name:'',
        password: '',
        
      }
  },
  
   computed: {
        ...mapGetters("storeAuth",["errorShow"]),
        message(){
          return this.$store.getters.errorShow
        }
      },
  
  methods: {
    ...mapActions("storeAuth", ["register","storeUser"]),
     register () {
        const userData = {
          email: this.email,
          name: this.name,
          password: this.password
        }
        console.log(userData)
        this.$store.dispatch('register', {email:userData.email, name:userData.name, password:userData.password})
      },

      
  },
}


</script>

<style scoped>
.home{
    text-decoration: none;
    color: black
}
.menR{
    text-decoration: line-through; text-decoration-color:#C6A8A2;
    font-size: 35px;
    margin-left: 6px;
    margin-top: 10px;
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