let routeView = null

function onLoad() {
  routeView = document.querySelector('#routeView')
  onHashChange()
}

function onHashChange() {
  switch (location.hash) {
    case '#/home':
      routeView.innerHTML = 'home'
      return
    case '#/about':
      routeView.innerHTML = 'about'
      return
    default:
      routeView.innerHTML = 'default'
      return
  }
}

window.addEventListener('DOMContentLoaded', onLoad)

// 浏览器前进后退、a标签跳转
window.addEventListener('hashchange', onHashChange)
