<template>
  <div>
    <h2>购物车列表</h2>
    <ul>
      <li v-for="item in carGoods" :key="item.id">
        <span>名称：{{ item.title }}</span>
        <span>单价：￥{{ item.price }}</span>
        <span>数量：{{ item.quantity }}</span>
      </li>
      <p>总价格：{{ totalPrice }}</p>
      <button v-show="carGoods.length" @click="checkout(carGoods)">结算</button>
      <p v-show="checkStatus">支付：{{ checkStatus }}</p>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('shopCar',['checkStatus']),
    ...mapGetters('shopCar',['carGoods','totalPrice'])
  },
  methods: {
    ...mapActions('shopCar',{
      checkout: 'checkout'
    })
  },
}
</script>


<style lang="less">
  
</style>