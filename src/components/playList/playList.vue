<template>
      <!-- 开通vip -->
  <div class="GoVip">
    <span class="vip">首开VIP仅需6元</span>
    <!-- 歌曲列表导航 -->
    <div class="playList">
      <div class="playTop">
        <div class="left">
          <span class="iconfont icon-bofang"></span>
          <span class="title">播放全部
            <span class="num">(共{{playlist.tracks.length}}首)</span>
          </span>
        </div>
        <div class="right">
          + 收藏({{changeValue(playlist.subscribedCount)}})
        </div>
        <hr> 
      </div>
      <!-- 歌曲列表 -->
      <div class="musiclist">
        <div @click="setPlayIndex(i)" class="playItem" v-for="(item,i) in playlist.tracks" :key="i">
            <div class="left">
              <div class="index">{{i+1}}</div>
              <div class="content">
                <div class="title">{{item.name}}</div>
                <div class="author">
                  <!-- <span class="tag" v-for="(tag,index) in playlist.tags" :key="index">{{tag}}</span> -->
                  <span>{{item.ar[0].name}}</span> 
                </div>
              </div>
            </div>
            <div class="right">
                <span class="iconfont icon-Controls-26"></span>
                <span class="iconfont icon-sandian"></span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name:'playList',
  props:['playlist'],
  methods:{
    changeValue:function(num){
      let res = 0
      if (num >=100000000){
        res = (num/100000000).toFixed(2) + '亿'
      }else if(num>10000){
        res = (num/10000).toFixed(2) + '万'
      }
      return res
    },
    ...mapMutations(['setPlayIndex'])
  },
  
  
}
</script>

<style lang="less" scoped>
  .GoVip{
    position: relative;
    margin-top: -.4rem;
    width: 8rem;
    height: auto;
    background: rgb(240, 229, 229);
    border-top-left-radius: .2rem;
    border-top-right-radius: .2rem;
    .vip{
      float: right;
      height: .8rem;
      line-height: .8rem;
      font-size: .3rem;
      color: rgb(187, 183, 183);
      margin-right: .4rem;
    }
      .playList{
        display: flex;
        width: 100%;
        height: 100%;
        padding-top: .3rem;
        background: #fff;
        border-top-left-radius: .2rem;
        border-top-right-radius: .2rem;
        .playTop{
          position:absolute ;
          display: flex;
          justify-content: center;
          align-items: center;
           .left{
              width: 4rem;
              height: .5rem;
              display: flex;
              justify-content: space-around;
              font-size: .35rem;
              .iconfont{
                font-size: .4rem;
              }
              .title{
                .num{
                  font-size: .3rem;
                  color: #ccc;
                }
              }
            }
           .right{
             font-size: .28rem;
             margin-left: 1.5rem;
             width: 2.1rem;
             height: .9rem;
             line-height: .9rem;
             background: rgb(240, 79, 79);
             border-radius: .9rem;
             color: #fff;
           }
           hr{
             width: 100%;
             height: .1px;
             background: rgb(218, 201, 201);
             opacity: .2;
             position: absolute;
             top:.7rem
           }
        }
        
        .musiclist{
          margin: 0.2rem;
          width: 7.1rem;
          position: absolute;
          top: 2rem;
          font-size: .3rem;
          .playItem{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left{
              width: auto;
              height: .6rem;
              // background: skyblue;
              margin-top: .2rem;
              display: flex;
              justify-content: space-around;
              align-items: center;
              .index{
                color: #ccc;
              }
              .title{
                padding-left: .5rem;
                font-weight: 540;
                width: 4rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
             
              span{
                  padding-left: .7rem;
                  font-size: .2rem;
                  color: rgb(129, 138, 146);
              }
            }
            .right{
              width: 1.5rem;
              height: auto;
              // background: skyblue;
              color: rgba(187, 181, 181, 0.952);
              .icon-Controls-26{
                font-size: .5rem;
                margin-right: .7rem;
              }
            }
          }
        }
       
       
      }
  }
</style>