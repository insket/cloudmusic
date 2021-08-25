<template>
  <div class="listView">
     <ListViewTop :playlist='list.playlist'></ListViewTop>
     <playList :playlist='list.playlist'></playList>
  </div>
</template>

<script>
import {getPlayListDetail} from '.././api/index'
import {reactive,onMounted} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import ListViewTop from '../components/ListView/ListView.vue'
import playList from '../components/playList/playList.vue'
import store from '../store'
export default {
  name:'ListView',
  components:{
    ListViewTop,
    playList
  },
  setup() {
    const route = useRoute()
    let list = reactive({musicArr:[],playlist:{
      creator:{},
      tracks:[]
      }
    })
    onMounted(async() => {
      let id = route.query.id
      console.log('route数据为:',route);
      let result = await getPlayListDetail(id)
      console.log('歌单ID:',result);
      list.playlist = result.data.playlist
      store.commit('setplaylist',list.playlist.tracks)
      console.log('setplaylist',list.playlist.tracks);
    })

    return {
      list
    }
  }
}
</script>

<style>

</style>