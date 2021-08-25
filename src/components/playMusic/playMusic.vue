<template>
  <div class="playMusic">
    <!-- 背景 -->
    <div class="bg" :style="{backgroundImage:`url(${playDetail.al.picUrl})`}"></div>
    <!-- 头部 -->
    <div class="top">
      <span class="back iconfont icon-arrowLeft" @click="$emit('back')"></span>
      <div class="text">
        <!-- marquee跑马灯 -->
        <marquee behavior="scroll" direction="left">
          <span class="title">{{playDetail.al.name}}</span>
          <span class="author">{{playDetail.ar[0].name}}></span>
        </marquee>
      </div>
      <span class="share iconfont icon-fenxiang"></span>
    </div>
    <!-- 中间图片区 -->
    <div class="Content" v-show="!islyric" @click="islyric=!islyric">
      <img src="./image/disc-ip6.png" alt="">
      <img  class="playImg" :src="playDetail.al.picUrl">
    </div>
    <!-- 歌词 -->
    <div class="lyric" v-show="islyric" ref="lyric" @click="islyric=!islyric">
      <p :class='{active:(currenTime*1000>=item.pre && currenTime*1000<item.time)}'
       v-for="(item,i) in $store.getters.lyrcList" :key="i">{{item.lyric}}</p>
      <!-- {{$store.state.lyric}} -->
    </div>
    <!-- icon列表 -->
    <div class="iconList"></div>
    <!-- 进度条 -->
    <div class="progress"></div>
    <!-- 底部 -->
    <div class="footer">
      <span class="iconfont icon-list-loop"></span>
      <span class="iconfont icon-shangyishou-" @click="goPlay(-1)"></span>
      <span @click="play" v-show="paused" class="iconfont icon-bofang"></span>
      <span @click="play" v-show="!paused" class="iconfont icon-zantingtingzhi"></span>
      <span class="iconfont icon-xiayishou1" @click="goPlay(1)"></span>
      <span class="iconfont icon-bofangliebiao"></span>
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
import {watch} from 'vue'
export default {
  name:'playMusic',
  data(){
    return{
      islyric:true,  //是否显示歌词
      sing:this.$store.state.lyric
    }
  },
  props:['playDetail','paused','play'],
  updated() {
    // console.log('currenTime',this.$store.state.currenTime);
  },
  computed:{
    ...mapState(['lyric','currenTime','playlist','playCurrentIndex']),
  },
  watch:{
    currenTime:function(newValue){
      // console.log('kkk',newValue);
      // console.log([this.$refs.lyric]);
      let p = document.querySelector('p.active')
      // console.log('p.active:',p);
      // console.log('currenTime:',this.$store.state.currenTime);
      let offsetTop = p.offsetTop
      // console.log('offsetTop',offsetTop);
      this.$refs.lyric.scrollTop = offsetTop
      
    }
  },
  methods: {
    goPlay(num){
        console.log('num',num);
        console.log('playlist',this.playlist);
        console.log('playCurrentIndex',this.playCurrentIndex);
        let currentIndex = this.playCurrentIndex+num
        if (currentIndex < 0) {
          currentIndex = 0
          alert('再往前已经没有歌了')
        }else if(currentIndex > this.playlist.length){
            currentIndex = this.playlist.length
        }
        this.$store.dispatch('setPlayIndex',currentIndex)
    }
  },
}
</script>

<style lang="less" scoped>
  .playMusic{
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgb(255, 255, 255);
    .bg{
      position: absolute;
      left: 0;
      top: 0;
      width: 120vw;
      height: 120vh;
      background-size:auto 100%;
      filter: blur(10px);
      background-position: center;
      z-index: -1;
    }
    .top{
      display: flex;
      width: 110vw;
      justify-content: space-between;
      line-height: 1rem;
      position: absolute;
      left: 0;
      top:0;
      font-size: .4rem;
      color: #fff;
      .iconfont{
        font-size: .5rem;
      }
      .back{
        padding-left: .3rem;
      }
      marquee{
         width: 4rem;
      }
      .text{
        .title{
        margin-right: .3rem;
        }
        .author{   
          font-size: .27rem;
          color: rgb(233, 218, 218);
        }
      }
      .share{
        padding-right: .7rem;
      }
    }
    .Content{
      position: absolute;
      
      img{
        position: fixed;
        width: 4rem;
        height: 4rem;
        top: 28%;
        left: 23%;
      }
      .playImg{
        position: fixed;
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 50%;
        top: 32%;
        left:31%;
        // transform: rotate(360deg);
        animation:run 20s infinite linear;
               
        @keyframes run {
          0%{
            transform: rotate(0);
          }
          100%{
            transform: rotate(360deg);
          }
        }
      }

    }

    .lyric{
      position: absolute;
      width: 80vw;
      height: 68vh;
      overflow: scroll;
      top: 1.3rem;
      left:.8rem;
      font-size: .3rem;
      text-align: center;
      color: rgb(221, 218, 218);
        p{
          margin: .2rem 0;
        }
        .active{
          font-size: .35rem;
          color: skyblue;
        }

    }

    .footer{
      position: absolute;
      padding: 0 .4rem;
      bottom: 3%;
      left: 5%;
      width: 80vw;
      span{
        color: rgb(182, 169, 169);
        padding: 0 .3rem;
      }
    }

  }
</style>