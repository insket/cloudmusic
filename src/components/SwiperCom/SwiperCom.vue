<template>
    <div class="swiper-container" id="swiper-banner">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
            <img :src='item.pic'>
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper';  
import 'swiper/css/swiper.css'
import {getBanner} from '../../api'
export default {
  name:'SwiperCom',
  data() {
    return {
      imgs:[],
    }
  },
  async mounted() {
    //axios请求banners
    let result = await getBanner(1)
    console.log('banner数据', result.data.banners);
    this.imgs = result.data.banners
  },

  updated() {
     //swiper轮播图
    var mySwiper = new Swiper('#swiper-banner', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
         clickable: true,
      },
    });
  },
}
</script>

<style lang="less">
  .swiper-container{
    width: 7.1rem;
    height: 2.8rem;
    margin-top: 0.4rem;
    border-radius: .3rem;
      .swiper-slide img{
         width: 100%;   
      }

    .swiper-pagination-bullet-active{
      background: rgb(218, 58, 58);
    }
  }
</style>