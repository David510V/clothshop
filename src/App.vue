<template>
    <div>
                 <appheader></appheader>
                 <hr>
                 
                <transition 
                class="tran"
                enter-active-class="animated bounceInRight"
                mode="out-in">
                    <router-view></router-view>
                </transition>

            
    </div>
</template>

<script>
import header from './views/Header.vue'
import home from './views/Home.vue';
import { mapGetters,mapActions } from "vuex";
    export default {
     ...mapActions("storeAuth", ["AutoLogin"]),
        components:{
            appheader:header,
            apphome:home
        },
        created() {
          this.$store.dispatch('AutoLogin')
        },
        
    }
</script>

<style>

#app {
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.tran{
  opacity: 3;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-family: 'Oswald', sans-serif;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

hr{
  margin-top: 0rem;
}

</style>
