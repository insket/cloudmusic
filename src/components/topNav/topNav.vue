<template>
  <div class="topNav">
    <div class="topLeft">
      <span class="iconfont icon-liebiao1"></span>
    </div>
    <div class="topCenter">
      <ul>
        <li class="navBtn" @click="$router.push('./me')">我的</li>
        <li class="navBtn active">发现</li>
        <li class="navBtn">云村</li>
        <li class="navBtn">视频</li>
      </ul>
    </div>
    <div class="topRight" @click="$router.push('/search')">
      <span class="iconfont icon-search"></span>
    </div>
  </div>
</template>

<script>
export default {
  name:'topNav'
}
</script>

<style lang="less" scoped>
  .topNav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0.2rem 0.1rem;
       .topCenter{
          .active{
            font-weight: bold;
          }
           ul{
            display: flex;
            font-size: 0.41rem;
              .navBtn{
                margin-right: 0.2rem;
              }       
           }
       }
  }




  
</style>