const getters={
   user(state){
       return state.user
   },

   isAuthenticate(state){
    return state.idToken !==null
   }
}
export default getters