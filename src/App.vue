<template>
  <div id="app">
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

<style>
</style>
