import * as goods from '@/api/goods' 
const state = {
  allGoods:[]
}

const mutations = {
  setAllGoods (state,payload){
    state.allGoods = payload.allGoods
  }
}

const getters = {}

const actions = {
  async getAllGoods ({ commit }) {
    const allGoods = await goods.getAllGoods()
    commit({
      type:'setAllGoods',
      allGoods
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
}