<template>
            <!-- 顶部视图 -->
  <div class="ListViewTop">
    <img class="bg" :src="playlist.coverImgUrl">
     <div class="topNav">
        <div class="back">
          <span class="iconfont icon-arrowLeft" @click="$router.go(-1)"></span>
          <span class="listTitle">歌单</span>
        </div>
        <div class="right">
          <span class="search iconfont icon-search"></span>
          <span class="iconfont icon-sandian"></span>
        </div>
     </div>
              <!-- 歌单列表详情展示  -->
     <div class="mscListDetail">   
        <div class="left">
          <img :src="playlist.coverImgUrl" >
        </div>
        <div class="right">
          <span class="title">{{playlist.name}}</span>
          <div class="author">
            <img :src="playlist.creator.avatarUrl" class="header">
            <span class="authorName">{{playlist.creator.nickname}}</span>
          </div>
          <div class="description">
            {{playlist.description}}
          </div>
        </div>
     </div>
    <!-- 底部图标列表 -->
     <div class="iconList">
        <span class="iconItem iconfont icon-liaotian"><span>{{playlist.commentCount}}</span></span>
        <span class="iconItem iconfont icon-fenxiang"><span>{{playlist.shareCount}}</span></span>
        <span class="iconItem iconfont icon-xiazai"><span>下载</span></span>
        <span class="iconItem iconfont icon-duoxuanxuanze"><span>多选</span></span>
     </div>
  </div>
</template>

<script>
export default {
  name:'ListView',
  props:['playlist'],
 
}
</script>

<style lang="less" scoped>
  .ListViewTop{
    .bg{
      position: fixed;
      left: 0;
      top: 0;
      width:100%;
      height: 6.9rem;
      z-index: -10;
      filter: blur(24px);  //模糊度
      position: relative;
    }
    .topNav{
      width: 7.5rem;
      height: 0.6rem;
      color: #fff;
      display: flex;
      margin-top: .2rem;
      padding : 0.3rem 0.2rem 0 0.2rem;
      justify-content: space-between;
      position: absolute;
      top: 0;
        .back,.right{
          display: flex;
          justify-content: center;
          align-items: center;
          .listTitle{
            padding-left: 0.4rem;
            font-size: .35rem;
          }
          .search{
            padding-right: .45rem;
          }
        }
    }
    .mscListDetail{
      display: flex;
      justify-content: space-between;
      .left{
        img{
          width: 3rem;
          height: 3rem;
          // background: red;
          position: absolute;
          top: 1.6rem;
          left: .4rem;
          border-radius: .1rem;
        }
      }
      .right{
        display: flex;
        flex-direction: column;
        .title{
          height:1rem;
          width: 3.5rem;
          font-size: .35rem;
          font-weight: 600;
          color: #fff;
          position: absolute;
          top: 1.6rem;
          left: 3.8rem;
        }
        .author{
          position: absolute;
          top: 2.6rem;
          left: 3.8rem;
          display: flex;
          justify-content: center;
          align-items: center;
          .header{
            width: .5rem;
            height: .5rem;
            border-radius: 50%;
            margin-right: .2rem;
          }
          .authorName{
            font-size: .25rem;
            color: #fff;
            width: 1.9rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .description{
          width: 3.2rem;
          height: .48rem;
          font-size: .2rem;
          color: rgb(170, 154, 154);
          position: absolute;
          top: 3.4rem;
          left: 3.9rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }

    .iconList{
      width: 7.1rem;
      height: 1rem;
      margin:0.1rem 0.37rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      position: absolute;
      top: 5rem;
      color: rgb(233, 227, 227);
     
        .iconItem{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
           font-size: .5rem;
           span{
             font-size: .3rem;
           }
        }
     
    }
  }
  
</style>