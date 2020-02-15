import axios from '../../axios-auth.js'
import router from '../../router'
import globalAxios from 'axios'
const actions={
    register ({commit, dispatch}, userData) {
        axios.post('/accounts:signUp?key=AIzaSyB11f1PgXg8rfxqMC4Nm9Htxuc1hocZqpc', {
          email:userData.email,
          password:userData.password,
          returnSecureToken:true
       })
          .then(res => {
            router.push({path:'/'})
            console.log(res)
            commit('logUser', userData)
            dispatch('storeUser',userData) // thats right after the user has created we want to store it in our database
            dispatch('storeUser',userData)
          })
          .catch(error => console.log(error))
      },
  

      storeUser ({commit, state}, userData) { // for store our user in our own database 
        if (!state.idToken) {
          return
        }
        globalAxios.post('/users.json' + '?auth=' + state.idToken, userData) // the ?auth= is for sending the token in backend
          .then(res => console.log(res))
          .catch(error => console.log(error))
        
      },
  

      
      login ({commit,dispatch},userData) {
        axios.post('/accounts:signInWithPassword?key=AIzaSyB11f1PgXg8rfxqMC4Nm9Htxuc1hocZqpc', {
          email:userData.email,
          password:userData.password,
          returnSecureToken:true
      })
      .then(res => {
        router.push({path:'/'})
        console.log(res)
        commit('logUser', {
          token: res.data.idToken,
          userId: res.data.localId
        })
        
      })
        .catch(error => console.log(error))
      },
      

      logout({commit},userData ){
        commit('clearAuthUser')
        router.push('/login')
      },
  
  
}
export default actions