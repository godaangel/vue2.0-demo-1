<template>
<wii-page>
  <wii-panel>
    <wii-cells>
      <wii-input :conf="{label: '姓名'}"></wii-input>
      <wii-input :conf="{label: '年龄'}"></wii-input>
      <wii-input :conf="{label: '工作'}"></wii-input>
      <wii-textarea :conf="{placeholder: '写点什么吧'}"></wii-textarea>
      <wii-select></wii-select>
    </wii-cells>

    <wii-cell-title>文本框</wii-cell-title>
    <wii-cells>
      <wii-textarea :conf="{placeholder: '写点什么吧'}"></wii-textarea>
    </wii-cells>
    <wii-cell-tips :conf="{}">我是说明文本</wii-cell-tips>

    <wii-cell-title>复选框</wii-cell-title>
    <wii-cells :conf="{class_name: 'weui-cells_checkbox'}">
      <wii-checkbox :conf="checkboxConf"></wii-checkbox>
    </wii-cells>

    <wii-cell-title>单选框</wii-cell-title>
    <wii-cells :conf="{class_name: 'weui-cells_radio'}">
      <wii-radio :conf="radioConf"></wii-radio>
    </wii-cells>

    <wii-cells>
      <wii-city-picker ref="citypicker" v-model="citypicker"></wii-city-picker>
      <wii-datetime v-model="datetime" title="date" start-date="1900-01-01" end-date="2999-01-01"></wii-datetime>
    </wii-cells>

    <wii-cells>
      <wii-image :conf="image"></wii-image>
      <wii-image-group :conf="imageList"></wii-image-group>
    </wii-cells>
    
  </wii-panel>
  <wii-tabbar :conf="tabConf"></wii-tabbar>
</wii-page>
</template>

<script>
import {WiiPage, WiiNavbar, WiiTabbar, WiiPanel, WiiCells, WiiCellTitle, WiiCellTips, WiiInput, WiiTextarea, WiiCheckbox, WiiRadio, WiiSelect, WiiDatetime, WiiCityPicker, WiiImage, WiiImageGroup} from 'wy-components';

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
          href: '#/form',
          name: '表单页',
          active: true,
          icon: 'http://p.qpic.cn/automall_pic/0/20170916150704_63696/0',
          icon_active: 'http://p.qpic.cn/automall_pic/0/20170916150704_33568/0'
        },{
          model: 'nav',
          type: 'link',
          href: '#/index',
          name: '列表页',
          active: false,
          icon: 'http://p.qpic.cn/automall_pic/0/20170916151053_45826/0',
          icon_active: 'http://p.qpic.cn/automall_pic/0/20170916151053_45826/0'
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
  },
  components:{
    WiiPage,
    WiiNavbar,
    WiiTabbar,
    WiiPanel,

    WiiCells,
    WiiCellTitle,
    WiiCellTips,
    WiiInput,
    WiiTextarea,
    WiiCheckbox,
    WiiRadio,
    WiiSelect,

    WiiDatetime, 
    WiiCityPicker,

    WiiImage,
    WiiImageGroup
  }
}
</script>
<style>

</style>
