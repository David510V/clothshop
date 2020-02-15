import Vue from 'vue'
import Vuex from 'vuex'

import getters from './auth-model/getters.js'
import actions from './auth-model/actions.js'
import mutations from './auth-model/mutations.js'

Vue.use(Vuex)

const state = {
    idToken: null,
    userId: null,
    user: null
}

const storeAuth = {
    state,
    getters,
    mutations,
    actions
}

export default storeAuth