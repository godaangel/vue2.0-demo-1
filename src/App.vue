<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="view"></router-view>
    </transition>
    <!-- <wii-tabbar :conf="tabConf"></wii-tabbar> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left',
      tabConf:{
        content:[{
          model: 'nav',
          type: 'link',
          href: '#/book',
          name: '图书列表',
          active: true,
          icon: 'http://39.106.62.130/images/book.svg',
          icon_active: 'http://39.106.62.130/images/book_active.svg'
        }, {
          model: 'nav',
          type: 'link',
          href: '#/mine',
          name: '个人中心',
          active: false,
          icon: 'http://39.106.62.130/images/mine.svg',
          icon_active: 'http://39.106.62.130/images/mine_active.svg'
        }]
      },
    }
  },
  mounted(){
    
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;

      let parentPathList = ['/book', '/mine'];

      // console.log(parentPathList.indexOf(to.path))
      if(toDepth < fromDepth || parentPathList.indexOf(to.path)!=-1 && parentPathList.indexOf(from.path) != -1 && parentPathList.indexOf(to.path) < parentPathList.indexOf(from.path)){
        this.transitionName = 'slide-right'
      }else{
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.view{
  transition: all .5s ease;
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
</style>
