<template>
  <div id="app">
    <img src = './assets/logo.png'/>
    <products></products>
    <shop-car></shop-car>
  </div>
</template>

<script>
import products from './components/products/products'
import shopCar from './components/shopCar/shopCar'
export default {
  name: 'app',
  components: {
    products,
    shopCar
  }
}
</script>

<style lang="less">
 #app{
   width: 100%;
   text-align: center;
   img{
     width: 200px;
     height: auto;
   }
 }

</style>
