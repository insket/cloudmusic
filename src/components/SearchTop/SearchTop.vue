<template>
  <div class="searchTop">
    <!-- 搜索框 -->
    <div class="top">
        <div class="banck iconfont icon-arrowLeft" @click="$router.go(-1)"></div>
        <div class="search">
          <input type="text" v-model="searchKey" placeholder="陈奕迅" @keydown.enter="saveItem">
        </div>
    </div>
    <!-- 广告 -->
    <div class="guanggao">
      <img src="./images/youli.jpg">
    </div>
    <!-- 历史 -->
    <div class="history">
      <span class="his">历史</span>
      <div class="itemcontainer">
         <div class="List" v-for="(items,i) in Item"  @click="hisSearvh(items)">
          {{items}}
      </div>
      </div>
      <div class="right iconfont icon-quanbushanchu"></div>
    </div>
  </div>
  <!-- 歌曲列表 -->
  <div class="container">
    <div class="searchList" v-for="(item,i) in searchSongs" :key="i" @click="setPlay(item,i)">
    <div class="num">{{i+1}}</div>
    <ul class="musName">
      {{item.name}} <br>
      <li class="author" v-for="(auth,i) in item.ar">{{auth.name}}</li>
    </ul>
    <div class="niu iconfont icon-niu"></div>
    <div class="dian iconfont icon-sandian"></div>
  </div>
  </div>
</template>

<script>
import {searchMusic} from '../../api'
export default {
  name:'SearchTop',
  data() {
    return {
      Item:[],   //搜索历史记录
      searchKey:'' ,  //搜索关键词
      searchSongs:[]    //搜索的数组
    }
  },
  mounted() {
    this.Item = localStorage.keywordList?JSON.parse(localStorage.keywordList):[]
  },
  methods: {
    saveItem :async function(){
      if (this.searchKey === '') {
        alert('输入不能为空')
        return
      }else{
        this.Item.push(this.searchKey) 
        this.Item = Array.from(new Set(this.Item)) 
        if (this.Item.length>10) {    //搜索历史记录长度限制
          this.Item=this.Item.slice(this.Item.length-10,this.Item.length)
        }
        localStorage.keywordList = JSON.stringify(this.Item)
        let result = await searchMusic(this.searchKey)
        this.searchSongs = result.data.result.songs
        this.searchKey = ' '
        console.log('searchSongs',result.data.result.songs);

      }  
    },
    // 历史搜索
    hisSearvh(keyword){
        this.searchKey = keyword
        this.saveItem()
    },
    //播放
    setPlay(item,i){
      // item.al = item.album
        this.$store.commit('pushplaylist',item)
        this.$store.commit('setPlayIndex',this.$store.state.playlist.length-1)
    }
  },
}
</script>

<style lang="less" scoped>
  .searchTop{
    max-width: 94vw;
    margin: .2rem .3rem;
    .top{
      display: flex;
      justify-content: center;
      align-items: center;
      .iconfont{
        font-size: .5rem;
      }
      input{
        width: 4.8rem;
        padding-left: .8rem;
        margin-left: .4rem;
        border: none;
        line-height: .5rem;
        outline: none;
        border-bottom: 1px solid #000;
        color: rgb(167, 161, 161);
        font-size: .32rem;
      }
    }
    .guanggao{
      margin-top: .25rem;
      max-width:91vw ;
      height: 2rem;
      overflow: hidden;
      border-radius: .4rem;
      img{
        width: 100%;
        
      }
    }
    .history{
      display: flex;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      margin-top: .6rem;
      .his{
        position: absolute;
        font-size: .3rem;
        font-weight: 600;
        left: .2rem;
        // background: red;
        width: 1.4rem;
        height: .4rem;
        line-height: .4rem; 
      }
      .itemcontainer{
        width: 5.6rem;
        height: 2.2rem;
        overflow: hidden;
        position: absolute;
        top: 3.7rem;
        left: 1rem;
        box-sizing: border-box;
        .List{
          display: flex;
          min-width: .8rem;
          line-height: .53rem;
          height: .53rem;
          overflow: hidden;
          box-sizing: border-box;
          font-size: .3rem;
          border-radius: .3rem;
          background: #eee;
          margin: 0 .2rem;
          display: inline-block;
          text-align: center;
        }
      }
      .iconfont{
        position: absolute;
        right: .2rem;
        font-size: .4rem;
        color: #ccc;
        margin-left: .3rem;
         
      }
    }
     
  }
  .container{
    width: 94vw;
    height: .7rem;
    margin: -2rem .3rem;
       .searchList{ 
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-bottom: .26rem;
          .num{
            font-size: .3rem;
            color: rgb(185, 180, 180);
          }
          .musName{
            font-size: .37rem;
            width: 4rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
           
            .author{
              width: 1.3rem;
              margin-right: .2rem;
              font-size: .28rem;
            }
            li{
             display: inline;
              justify-content: space-around;
              flex-direction: row;
            
            }
          }
          .iconfont{
            font-size: .43rem;
          }
          .niu{
            padding-left: .6rem;
          }
        }
  }
 
</style>