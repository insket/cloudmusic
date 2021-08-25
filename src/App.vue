<template>
  <router-view/>
  <!-- 底部播放 -->
  <playController></playController>
</template>

<script>
import playController from './components/playController/playController.vue'
export default {
  name:'App',
  components:{
    playController
  },
  // mounted(){
  //   let userDate = JSON.parse(localStorage.userDate)
  //   console.log('userDate',userDate);
  //   this.$store.commit('setUser',userDate)
  // },
   updated(){
    let userDate = JSON.parse(localStorage.userDate)
    console.log('userDate',userDate);
    this.$store.commit('setUser',userDate)
  },
}
</script>>

<style lang="less">
  .iconfont{
    font-size: 0.6rem;
  }
  a{
    color: #333;
    text-decoration: none;
  }
  *{
    max-width: 100vw;
  }
</style>
