import * as shop from '@/api/goods'
const state = {
  // 购物车里面的商品
  // 数据格式 {id:'商品id',quantity:'商品数量'}
  items: [],
  checkStatus: null,
}

const mutations = {
  pushProductToShopCar(state, payload) {
    state.items.push({
      id: payload.id,
      quantity: 1,
    })
  },
  incrementItemQuantity(state, payload) {
    const item = state.items.find(element => element.id === payload.id)


    item.quantity++
  },
  setPayStatus(state, payload) {
    state.checkStatus = payload
  },
  clearShopCar(state, payload) {
    state.items = payload
  }
}

const getters = {
  carGoods(state, getters, rootState) {
    return state.items.map((product) => {
      const prod = rootState.products.allGoods.find(item => item.id === product.id)
      return {
        id: prod.id,
        title: prod.title,
        price: prod.price,
        quantity: product.quantity
      }
    })
  },
  totalPrice(state, getters) {
    return getters.carGoods.reduce((total, prod) => {
      return total + prod.price * prod.quantity
    }, 0)
  }
}

const actions = {
  checkout({ commit }, products) {
    console.log(products)
    // 备份购物车数据
    const saveProducts = [...products]
    // 清除支付状态
    commit('setPayStatus', null)
    // 清空购物车
    commit('clearShopCar', [])
    // 发起结账请求 成功、失败
    shop.buyGoods(products,
      () => {
        console.log('successful')
        commit('setPayStatus', 'successful')
      },
      () => {
        console.log('failed')
        commit('setPayStatus', 'failed')
        commit('clearShopCar', saveProducts)
      }
    )
  },
  addGoodsToShopCar({ state, commit }, product) {
    // 如果商品的库存大于零，执行添加购物车的逻辑
    // 如果购物车已经存在该商品，则让该商品的数量加一
    // 如果没有则添加商品到购物车， 让商品的数量减去一
    if (product.inventory) {
      const item = state.items.find(element => element.id === product.id)
      if (item) {
        commit({
          type: 'incrementItemQuantity',
          id: product.id
        })
      }
      else {
        commit({
          type: 'pushProductToShopCar',
          id: product.id
        })
      }
      commit('products/deleteGoodsInventory', { id: product.id }, { root: true })
    } else {
      console.log('该商品库存就那么多了')
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