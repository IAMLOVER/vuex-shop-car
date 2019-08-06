<template>
  <div>
    <h2>水果列表</h2>
    <ul>
      <li v-for="item in goods" v-bind:key="item.id">
        <span>商品名：{{ item.title }}</span>
        <span>价钱：￥{{ item.price }}</span>
        <span>库存：{{ item.inventory }}个</span>
        <button>加入购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('products',{
      goods: 'allGoods'
    })
  },
  created() {
    this.$store.dispatch('products/getAllGoods')
  },
}
</script>


<style lang="less">
  ul{
    li{
      list-style: none;
      display: flex;
      justify-content: flex-start;
      height: 50px;
      line-height: 50px;
      margin-bottom: 30px;
      span{
        flex: 1;
      }
      button{
        flex: 1;
        border:none;
        outline: none;
        background-image: linear-gradient(-23deg, #F25664 0%, #D577EF 100%);
        border-radius: 21px; 
        color: #fff;
        cursor: pointer;
        &:hover{
          opacity: .8;
        }
      }
    }
  }
</style>