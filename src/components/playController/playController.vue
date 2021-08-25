<template>
     <div v-if="playlist[playCurrentIndex].al.name" class="playController">
      <div class="left"  @click="isShow=!isShow"> 
        <img :src="playlist[playCurrentIndex].al.picUrl">
          <div class="title">
            {{playlist[playCurrentIndex].al.name}}
          </div>
      </div>
      <div class="right">
        <div class="switch">
        <!-- 上一首 -->
          <span class="prev iconfont icon-shangyige"></span>
          <!-- 下一首 -->
          <span class="next iconfont icon-xiayige2"></span>
          <!-- 暂停-->
          <span v-show="paused" @click="play" class="stop iconfont icon-bofang2"></span>
          <!-- 播放 -->
          <span v-show="!paused" @click="play" class="stop iconfont icon-zantingtingzhi"></span>
          <!-- 列表 -->
          <span class="list iconfont icon-bofangliebiao"></span>
        </div>
      </div>
      <!-- 播放器   play()播放暂停-->
      <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
      <playMusic :play='play' :paused='paused' @back='isShow=!isShow' v-show="isShow" :playDetail='playlist[playCurrentIndex]'></playMusic>
    </div> 
</template>

<script>

import {mapState,mapMutations} from 'vuex'
import playMusic from '../../components/playMusic/playMusic.vue'
export default {
  name:'playController',
  data(){
    return{
      paused:true,   //暂停
      isShow:false
    }
  },
  components:{
    playMusic
  },
  computed:{
    ...mapState(['playlist','playCurrentIndex'])
  },
  methods:{
    play:function(){
      if (this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.paused = false
        this.UpdateTime()
      }else{
        this.$refs.audio.pause()
         this.paused = true
         clearInterval(this.$store.state.id)
      }
      console.log('audio解构',[this.$refs.audio]);  //[]结构，可以看到方法里的属性
    },
     UpdateTime(){
      this.$store.state.id = setInterval(() => {
        this.$store.commit('setCurrenTime',this.$refs.audio.currentTime)
      }, 2300);
      // console.log(666);
      // console.log('currentTime:',this.$refs.audio.currentTime);
    }
  },
  mounted(){
    
  },
  updated(){
    this.$store.dispatch('reqLyric',{id:this.playlist[this.playCurrentIndex].id})
  }
  
  
}
</script>

<style lang="less">
  .playController{
    background: #fff;
    height: 1.2rem;
    width: 100%;
    margin-left:.2rem;
    margin-right: .2rem;
    // background: skyblue;
    position: relative;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ccc;
    .left{
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: .9rem;
        height: .9rem;
        border-radius: 50%;
        margin-right: .3rem;
      }
      .title{
        font-size: .33rem;
        font-weight:550;
        width: 2.5rem;
        line-height: .4rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .right{
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 30%;
      left:50%;
      // left: 0;
        .iconfont{
          font-size: .5rem;
          margin-left: .2rem;
        }
    }

  }
</style>