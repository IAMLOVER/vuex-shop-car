<template>
  <div>
    <h2>商品列表</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('products',{
    })
  },
}
</script>


<style lang="less">
  
</style>