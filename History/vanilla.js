let routeView = null

function onLoad() {
  routeView = document.querySelector('#routeView')

  // 页面第一次加载时更新一次
  onPopState()

}

function onPopState() {
  switch (location.pathname) {
    case '/home':
      routeView.innerHTML = 'home'
      return
    case '/about':
      routeView.innerHTML = 'about'
      return
    default:
      routeView.innerHTML = 'default'
      return
  }
}

window.addEventListener('DOMContentLoaded', onLoad)

// 只有浏览器前进后退是能监听到
window.addEventListener('popstate', onPopState)

// a标签跳转无法触发popstate 需要做一个劫持
window.addEventListener('click', e => {
  if ((e.target.nodeName = 'A' && e.target.getAttribute('href'))) {
    e.preventDefault()
    history.pushState(null, '', e.target.getAttribute('href'))
    onPopState()
  }
})
