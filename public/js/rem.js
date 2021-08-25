function remSize() {
  let deviceWidth = document.documentElement.clientWidth || window.innerWidth  //获取房前设备窗口大小
  //设置设备最大最小窗口
  if (deviceWidth >= 750) {
    deviceWidth = 750
  }
  if (deviceWidth <= 320) {
    deviceWidth = 320
  }

  document.documentElement.style.fontSize = (deviceWidth/7.5) + 'px'
  document.body.style.fontSize = 0.5+'rem'
}

remSize()

window.onresize = function(){
  remSize()
}