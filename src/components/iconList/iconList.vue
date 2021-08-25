<template>
  <div class="iconList">
    <ul>
      <li class="iconItem">
        <span class='iconfont icon-tuijian'></span>
        <span class="font">每日推荐</span>
      </li>
      <li class="iconItem">
        <span class='iconfont icon-gedan'></span>
        <span class="font">歌单</span>
      </li>
      <li class="iconItem">
        <span class='iconfont icon-paihangbang'></span>
        <span class="font">排行榜</span>
      </li>
      <li class="iconItem">
        <span class='iconfont icon-zhibo'></span>
        <span class="font">直播</span>
      </li>
      <li class="iconItem">
        <span class='iconfont icon-diantai'></span>
        <span class="font">电台</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'iconList'
}
</script>

<style lang="less" scoped>
  .iconList{
    margin: 0.3rem 0.1rem 0 0.1rem;
    ul{
      display: flex;
      justify-content: space-around;
      li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
          .iconfont{
            width: 1.1rem;
            line-height: 1.1rem;
            font-size: 0.7rem;
            color: rgb(248, 242, 242);
            background: rgb(216, 46, 46);
            text-align: center;
            border-radius: 50%;
          }
          .font{
            font-size: 0.3rem;
          }
      }
    }
  }
</style>