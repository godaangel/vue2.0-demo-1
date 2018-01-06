<template>
<wii-page>
  <wii-panel>
    <div class="header" :class="showPage">
      <h3 class="big-title">早上好，读者</h3>
      <p class="sub-title">请享受这美好的早晨</p>
    </div>
    <div class="search">
      <input type="text" placeholder="搜索作者、书名">
      <i class="weui-icon-search"></i>
    </div>
    <div class="block">
      <div class="block-head">
        <span class="title">热门推荐</span>
        <span class="more">查看全部</span>
      </div>
      <div class="content">
        <div class="book" :style="{'animation-delay': (1.5 + index*0.2)+'s'}" v-for="(item, index) in bookList">
          <img :src="item.img" alt="">
        </div>
      </div>
    </div>

    <div class="block block-2">
      <div class="block-head">
        <span class="title">榜单排行</span>
        <span class="more">查看全部</span>
      </div>
      <div class="content">
        <div class="book book-rank" :style="{'animation-delay': (1.8 + index*0.2)+'s'}" v-for="(item, index) in bookRankList">
          <span class="title">{{item.title}}</span>
        </div>
      </div>
    </div>
  </wii-panel>
  <!-- <wii-tabbar :conf="tabConf"></wii-tabbar> -->
</wii-page>
</template>

<script>

export default {
  name: 'Index',
  data () {
    return {
      navConf:{
        content:[{
          model: 'nav',
          name: '自定义导航',
          active: true,
          params: {
            id: 0,
            name: '自定义导航'
          }
        },{
          model: 'nav',
          type: 'link',
          href: '#guide_2',
          name: '导航二',
          active: false,
          params: {
            id: 1,
            name: '导航二'
          }
        },{
          model: 'nav',
          type: 'link',
          href: '#guide_3',
          name: '导航三',
          active: false,
          params: {
            id: 2,
            name: '导航三'
          }
        }]
      },
      tabConf:{
        content:[{
          model: 'nav',
          type: 'link',
          href: '#/index',
          name: '首页',
          active: true,
          icon: 'http://39.106.62.130/images/book.svg',
          icon_active: 'http://39.106.62.130/images/book_active.svg'
        }, {
          model: 'nav',
          type: 'link',
          href: '#/book',
          name: '图书列表',
          active: false,
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
      checkboxConf:{
        name: 'checkbox',
        value: [1],
        options:[{
          label: '自定义选择一',
          value: '1'
        },{
          label: '自定义选择二',
          value: '2'
        }]
      },
      radioConf:{
        name: 'radio',
        value: 2,
        options:[{
          label: '自定义单项选择一',
          value: '1'
        },{
          label: '自定义单项选择二',
          value: '2'
        }]
      },
      citypicker: '',
      datetime: '',
      image: {
        alt: '单个示例图片',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511020043434&di=093ff5d755ecda26bb4d0ab2eb8e1ff9&imgtype=0&src=http%3A%2F%2Fpic2.52pk.com%2Ffiles%2F161107%2F1285740_143530_1.png',
        attrs: {
          width: '100%',
          height: '180px'
        }
      },
      imageList: [{
        alt: '示例图片组',
        src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1530678619,3275431284&fm=27&gp=0.jpg'
      },{
        alt: '示例图片组',
        src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2989526819,4024988842&fm=27&gp=0.jpg'
      }],
      bookList: [{
        img: 'http://img3.imgtn.bdimg.com/it/u=681995639,2158653970&fm=27&gp=0.jpg'
      },{
        img: 'http://img3.imgtn.bdimg.com/it/u=681995639,2158653970&fm=27&gp=0.jpg'
      },{
        img: 'http://img3.imgtn.bdimg.com/it/u=681995639,2158653970&fm=27&gp=0.jpg'
      },{
        img: 'http://img3.imgtn.bdimg.com/it/u=681995639,2158653970&fm=27&gp=0.jpg'
      }],
      bookRankList: [{
        title: '新书榜'
      },{
        title: '热门榜'
      },{
        title: '推荐榜'
      }],
      showPage: ''
    }
  },
  mounted(){
    var that = this;
    // that.showPage = 'show-page';
  }
}
</script>
<style lang="less" scoped>
/* 头部动画 */
@keyframes hanimation{
  0% {
    opacity: 0;
    -webkit-transform: translateY(10/20rem);
            transform: translateY(10/20rem);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}

/* 搜索框动画 */
@keyframes sanimation{
  0% {
    opacity: 0;
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

/* 书框动画 */
@keyframes bcanimation{
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* 书动画 */
@keyframes banimation{
  0% {
    opacity: 0;
    -webkit-transform: translateX(10rem/20);
            transform: translateX(10rem/20);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}
/* 书动画 */
@keyframes branimation{
  0% {
    opacity: 0;
    -webkit-transform: translateX(40rem/20);
            transform: translateX(40rem/20);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}

@baseColor: #333;
@redColor: #fd5a5f;
@tagColor: #adb1bf;
@subColor: #525252;
@helpColor: #919193;
*{
  box-sizing: border-box;
  outline: none;
}
.page{
  background: #fff;
  text-align: left;
  padding: 0.5rem 0rem;
}
.header{
  padding: 0rem 0.75rem;
  .big-title{
    font-weight: normal;
    opacity: 0;
    animation: hanimation 0.8s;
    animation-fill-mode: forwards;
    animation-delay: 1s;
  }
  .sub-title{
    font-size: 0.6rem;
    color: @helpColor;
    opacity: 0;
    animation: hanimation 0.8s;
    animation-fill-mode: forwards;
    animation-delay: 1.2s;
  }
}
.search{
  margin: 1.5rem 0rem;
  padding: 0rem 0.75rem;
  position: relative;
  opacity: 0;
  animation: sanimation 1.2s;
  animation-fill-mode: forwards;
  input{
    height: 2rem;
    line-height: 2rem;
    width: 100%;
    box-shadow: -0.2rem 0.2rem 0.5rem 0rem rgba(0, 0, 0, 0.2);
    padding-left: 2rem;
    border: none;
    font-size: 0.6rem;
  }
  i{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1.2rem;
    font-size: 0.8rem;
  }
}
.block{
  padding: 0rem 0.75rem;
  opacity: 0;
  animation: bcanimation 0.8s;
  animation-fill-mode: forwards;
  animation-delay: 1.2s;
  margin-bottom: 25rem/20;
  &.block-2{
    animation-delay: 1.5s;
  }
  .block-head{
    position: relative;
    .title{
      font-size: 0.8rem;
      color: @subColor;
    }
    .more{
      position: absolute;
      padding-right: 1rem;
      right: 0;
      font-size: 0.7rem;
      top: 50%;
      transform: translateY(-50%);
      color: @helpColor;
      &:after{
        content: " ";
        display: inline-block;
        height: 6rem/20;
        width: 6rem/20;
        border-width: 2rem/20 2rem/20 0 0;
        border-color: #C8C8CD;
        border-style: solid;
        -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: relative;
        top: -2rem/20;
        position: absolute;
        top: 50%;
        margin-top: -4rem/20;
        right: 2rem/20;
      }
    }
  }
  .content{
    margin-top: 20rem/20;
    white-space: nowrap;
    overflow-x: auto;
    margin-left: -0.75rem;
    padding-left: 0.75rem;
    margin-right: -0.75rem;
    .book{
      display: inline-block;
      overflow: hidden;
      width: 100rem/20;
      height: 140rem/20;
      box-shadow: 1px 2px 5px 0px rgba(0, 0, 0, 0.2);
      border-radius: 3rem/20;
      margin-right: 15rem/20;
      opacity: 0;
      animation: banimation 0.8s;
      animation-fill-mode: forwards;
      animation-delay: 1.5s;
      &.book-rank{
        width: 140rem/20;
        height: 80rem/20;
        line-height: 60rem/20;
        animation: branimation 0.4s;
        animation-fill-mode: forwards;
        animation-delay: 1.8s;
        text-align: center;
        background-color: #6583f9;
        .title{
          font-size: 14rem/20;
          color: #fff;
        }
      }
      img{
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
}

</style>
