const state = {
  // 购物车里面的商品
  // 数据格式 {id:'商品id',quantity:'商品数量'}
  items:[]
}

const mutations = {}

const getters = {}

const actions = {
  addGoodsToShopCar ({state},product) {
    console.log(product)
    // 如果商品的库存大于零，执行添加购物车的逻辑
    // 如果购物车已经存在该商品，则让该商品的数量加一
    // 如果没有则添加商品到购物车， 让商品的数量减去一
    if(product.inventory) {
      const item = state.items.find((item) => item.id === product.id)
      if(item){
        console.log(item)
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
}