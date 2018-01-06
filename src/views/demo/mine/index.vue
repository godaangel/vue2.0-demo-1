<template>
<wii-page>
  <wii-filter></wii-filter>
  <wii-panel>
    个人中心
  </wii-panel>
  <wii-tabbar :conf="tabConf"></wii-tabbar>
</wii-page>
</template>

<script>

export default {
  name: 'HelloWorld',
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
          active: true,
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
      }]
    }
  }
}
</script>
<style>

</style>
