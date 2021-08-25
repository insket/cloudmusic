<template>
  <div class="info">
    <div class="header">
      <img :src="$store.state.user.userDetail.profile.avatarUrl" alt="">
      <span class="name">{{$store.state.user.userDetail.profile.nickname}}</span>
    </div>
    <div class="signOut">
      <span @click="out">退出登录</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'Me',
  methods: {
    out(){
      // localStorage.removeItem('userDate')
    }
  },
}
</script>

<style lang="less" scoped>
  .info{
    width:6rem;
    margin: 1rem auto;
    .header{
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 3rem;
        height: 3rem;
        margin: 0 auto;
        border-radius: 50%;
        margin-bottom: 1rem;
      }
      .name{
        font-size: .6rem;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
      }
    }
    .signOut{
        span{
          position: absolute;
          top: 55%;
          left: 36%;
          padding: .2rem .1rem;
          border: 1px solid red;
        }
    }
  }
</style>