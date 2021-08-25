import axios from 'axios'

const baseUrl = 'http://localhost:3000'

//获取轮播图的api  ，type资源类型  默认0 pc  1 android  2 iphone  3 ipad
export function getBanner(type=0){
  return axios.get(`${baseUrl}/banner?type=${type}`)
}
 
//获取推荐歌单   limit 取出 的歌单数量，默认12
export function getMusicList(limit=12){
  return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}

//获取推荐歌单详情
export function getPlayListDetail(id){
  return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}

//获取歌词
export function getLyric(id){
  return axios.get(`${baseUrl}/lyric?id=${id}`)
}

//搜索歌曲
export function searchMusic(keyword){
  return axios.get(`${baseUrl}/cloudsearch?keywords=${keyword}`)
}

//手机登录
export function phoneLogin(phone,password){
  return axios.get(`${baseUrl}/login/cellphone?phone=${phone}&password=${password}`)
}

//用户信息  
export function userDetail(uid){
  return axios.get(`${baseUrl}/user/detail?uid=${uid}`)
}
