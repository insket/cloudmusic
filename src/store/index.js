import { createStore } from 'vuex'
import {getLyric} from '../api/index'
import {phoneLogin} from '../api/index'
import {userDetail} from '../api/index'

export default createStore({
  state:{
    // 播放列表
    playlist:[{al:{}}],
    // 当前播放索引值
    playCurrentIndex:0,
    lyric:'',   //歌词
    currenTime:0,  //当前音乐时间
    intervalId:0,   //
    user:{
      isLogin:false,   //是否登录
      userInfo:'w未登录',
      account:{},   //用户账户
      userDetail:{}   //用户详情
    }
  },
  mutations: {
    setplaylist:function(state,value){
      state.playlist = value
    },
    pushplaylist:function(state,value){
      state.playlist.push(value)
    },
    setPlayIndex(state,index){
      state.playCurrentIndex = index
    },
    setLyric(state,value){
      state.lyric = value
    },
    setCurrenTime(state,value){
      state.currenTime = value
    },
    setUser(state,value){
      state.user.isLogin = value.isLogin
      state.user.userInfo = value.userInfo
    }
  },
  actions: {
    async reqLyric(content,payload){   //请求歌词
      console.log('歌曲Id',payload);
      let result = await getLyric(payload.id)
      content.commit('setLyric',result.data.lrc.lyric)
      console.log('payload',result);
      
    },
    //设置登录
    async login(content,payload){
      console.log(payload);
      let result = await phoneLogin(payload.phone,payload.password)
      console.log(result);
      if (result.data.code === 200) {
        content.state.user.isLogin = true
        content.state.user.userInfo = '登录'
        content.state.user.account =result.data.account
        
        let Detail = await userDetail(result.data.account.id)
        content.state.user.userDetail = Detail.data
        localStorage.userDate = JSON.stringify(content.state.user)
        console.log('content.state.userDetail',content.state.user.userDetail);
        console.log('Detail',Detail);
        content.commit('setUser',content.state.user)
      }
      return result
    }
   
  },
  getters:{
    lyrcList:function(state){
      let arr = state.lyric.split(/\n/igs).map((item,i,arr)=> {
        let min = parseInt(item.slice(1,3))
        let sec = parseInt(item.slice(4,6))
        let mill = parseInt(item.slice(7))
       
        return {
          
          min,sec,mill,
          lyric:item.slice(12),
          content:item,
          time:mill+sec*1000+min*60*1000
        }
      })
      arr.forEach((item,i) => {
        if(i==0) {
          item.pre = 0
        }else{
          item.pre = arr[i-1].time
        }
      })
      return arr
    }
  },
  modules: {
  }
})
