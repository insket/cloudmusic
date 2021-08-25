<template>
  <div class="home">
    <topNav></topNav>
    <SwiperCom></SwiperCom>
    <iconList></iconList>
    <musicList></musicList>
  </div>
</template>

<script>

import topNav from '../components/topNav/topNav.vue'
import SwiperCom from '../components/SwiperCom/SwiperCom.vue'
import iconList from '../components/iconList/iconList.vue'
import musicList from '../components/musicList/musicList.vue'

export default {
  name: 'Home',
  components:{
    topNav,
    SwiperCom,
    iconList,
    musicList
  },
}
</script>

<style lang="less" scoped>

  
</style>
