import * as goods from '@/api/goods' 
const state = {
  allGoods:[]
}

const mutations = {
  setAllGoods (state,payload){
    state.allGoods = payload.allGoods
  },
  deleteGoodsInventory (state,payload){
    const item = state.allGoods.find(item => item.id === payload.id)
    if(item.inventory){
      item.inventory--
    }
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