<template>
  <div>
    <h2>购物车列表</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('shopCar',{
    })
  },
}
</script>


<style lang="less">
  
</style>