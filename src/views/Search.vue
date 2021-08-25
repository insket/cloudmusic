<template>
  <div class="search">
    <SearchTop></SearchTop>
    <playController></playController>
  </div>
</template>

<script>
import SearchTop from '../components/SearchTop/SearchTop.vue'
import playController from '../components/playController/playController.vue'
export default {
  name:'Search',
  components:{
    SearchTop
  }
}
</script>

<style>

</style>