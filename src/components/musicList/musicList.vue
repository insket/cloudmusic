<template>
  <div class="musicList">
    <div class="musicList-top">
      <div class="title">发现好歌单</div>
      <div class="more">more+</div>
    </div>
    <div class="mlist">
      <div class="swiper-container" id="swipermusic">
        <div class="swiper-wrapper">
          <router-link :to="{name:'listview',query:{id:item.id}}" class="swiper-slide" v-for="item in list.musicList">
            <img :src="item.picUrl" :alt="item.name">
            <span class="name">{{item.name}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import Swiper from 'swiper'
import {getMusicList} from '../../api/index'
import {reactive,onMounted,onUpdated} from 'vue'
export default {
  setup() {
    let list = reactive({musicList:[]})
    onMounted(async() => {
      let result = await getMusicList(12)
      list.musicList = result.data.result
      console.log('推荐歌单数据',result.data.result);
    })
    onUpdated(() => {
       var swiper = new Swiper('#swipermusic', {
          slidesPerView: 3,
          spaceBetween: 10,
       });
    })
    return {
       list
    }
  }
}
/*
export default {
  name:'musicList',
  data() {
    return {
      musicList:[]
    }
  },
  mounted:async function() {
    let result = await getMusicList(12)
    this.musicList = result.data.result
    console.log('推荐歌单数据',result.data.result);
  },
  updated() {
     var swiper = new Swiper('#swipermusic', {
      slidesPerView: 3,
      spaceBetween: 10,
    });
  },
}
*/
</script>

<style lang="less" scoped>
  .musicList{
    width: 7.1rem;
    padding: 0 0.2rem;
    margin-top: 0.5rem;
      .musicList-top{
        display: flex;
        justify-content: space-between;
          .title{
            font-size:0.4rem ;
            font-weight: 900;
          }
          .more{
            width: 1.4rem;
            height: 0.4rem;
            line-height: 0.4rem;
            font-size: 0.3rem;
            text-align: center;
            border: 1px solid #ccc;
            border-radius: 0.3rem;
          }
      }
      .mlist{
        .swiper-container{
          width: 100%;
          height: 3.2rem;
            .swiper-slide{
              display: flex;
              flex-direction: column;
                img{
                  width: 100%;
                  height: auto;
                  border-radius: .2rem;
                }
                .name{
                  margin-top: 0.1rem;
                  height: 0.64rem;
                  width: 100%;
                  font-size: .33rem;
                  overflow: hidden;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  text-overflow: ellipsis;
                  -webkit-line-clamp: 2;  
                  font-family: "Arial,Verdana,Sans-serif"; 
                }
            }
        }
        
      }
  
  }
</style>