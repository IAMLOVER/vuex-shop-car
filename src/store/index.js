import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

import products from './modules/products'
import shopCar from './modules/shopCar'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    products,
    shopCar,
  }
})
