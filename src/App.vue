<style lang="scss">
  .slide-fade-enter-active {
    transition: all 1s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-out .5s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }
</style>

<template>
  <div id="app">
    <wii-header></wii-header>
    <transition name="slide-fade">
      <router-view class="view"></router-view>
    </transition>
    <guider></guider>
  </div>
</template>

<script>

import WiiHeader from './component/header.vue'
import Guider from './component/lol/guide.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App Godaangel!'
    }
  },
  mounted(){
    console.log('-------'+this.msg+'-------');
  },
  components: { 
    WiiHeader,
    Guider
  }
}
</script>

<style lang="scss">
  @import './assets/css/dz-style.scss';
  @import './assets/css/dz-toast.css';
  @import './assets/css/modal.scss';
  @import './assets/css/layout.scss';
  @import './assets/css/demo.css';
</style>
