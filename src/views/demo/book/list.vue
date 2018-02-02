<style lang="less">
  
</style>

<template>
  <wii-page>
    <wii-filter :filter_data="filter"></wii-filter>
    <!-- <wii-navbar :callback="navClick" :conf="navConf"></wii-navbar> -->
    <wii-panel>
      <wii-list :infinite="infinite" :refresh="refresh" ref="list" v-if="showList">
        <wii-list-item :key="index" :conf="item" v-for="(item,index) in list">
          <!-- <span slot="innerContent">内部信息</span>
          <span slot="outContent">外部信息</span> -->
        </wii-list-item>
      </wii-list>
    </wii-panel>
    <wii-tabbar :conf="tabConf"></wii-tabbar>
 </wii-page>
</template>

<script type="text/javascript">

  import $ from 'webpack-zepto';

  import Utils from '../../../libs/utils.js';

  export default {
    data() {
      var date = new Date();
      var oneDay = 24*60*60*1000;
      var timeArr = [];
      for(let i = 0; i < 7; i ++){
        let time = Utils.timestampToDate(date.getTime()+oneDay*i).split(' ')[0];
        timeArr.push({
          name: time,
          value: time
        });
      }

      return {
        showList: true,
        page: 0,
        maxPage: 2,
        navConf:{
          content:[{
            model: 'nav',
            name: '带图片列表',
            active: true,
            params: {
              id: 0,
              name: '带图片列表',
              type: 'itemWithImg'
            }
          },{
            model: 'nav',
            type: 'link',
            // href: '#guide_3',
            name: '不带图片列表',
            active: false,
            params: {
              id: 2,
              name: '不带图片列表',
              type: 'itemWithOutImg'
            }
          },{
            model: 'nav',
            type: 'link',
            // href: '#guide_2',
            name: '带图片和其他',
            active: false,
            params: {
              id: 1,
              name: '带图片和其他',
              type: 'itemWithImgOther'
            }
          }]
        },
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
        list: [],
        itemWithImg: {
          title: '列表标题',
          img_url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1530678619,3275431284&fm=27&gp=0.jpg',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          href: '#/book/detail'
        },
        itemWithImgOther: {
          title: '列表标题',
          img_url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1530678619,3275431284&fm=27&gp=0.jpg',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          other_from: '科技在线',
          other_time: '2017-09-10',
          other_desc: '标签1',
          href: '#/book/detail'
        },
        itemWithOutImg: {
          title: '列表标题',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          other_from: '科技在线',
          other_time: '2017-09-10',
          other_desc: '标签2',
          href: '#/book/detail'
        },
        pagination: {
          current_page: 1,
          page_size: 10,
          total: 0
        },
        hasMore: true,
        filter: [{
          name: "选择楼层",
          sub: [{
            name: '全部',
            value: ''
          }, {
            name: '新科研楼',
            value: '新科研楼'
          }, {
            name: '鸿通楼',
            value: '鸿通楼'
          }]
        }, {
          name: "选择类型",
          sub: [{
            name: '全部',
            value: ''
          }, {
            name: '大型会议室',
            value: '大型会议室',
            sub: [{
              name: '全部',
              value: ''
            }, {
              name: '带投影',
              value: '带投影'
            }, {
              name: '不带投影',
              value: '不带投影'
            }, {
              name: '视频会议',
              value: '视频会议'
            }, {
              name: '预定茶歇',
              value: '预定茶歇'
            }]
          }, {
            name: '中型会议室',
            value: '中型会议室',
            sub: [{
              name: '全部',
              value: ''
            }, {
              name: '带投影',
              value: '带投影'
            }, {
              name: '不带投影',
              value: '不带投影'
            }]
          }, {
            name: '小型会议室',
            value: '小型会议室',
            sub: [{
              name: '全部',
              value: ''
            }, {
              name: '带投影',
              value: '带投影'
            }, {
              name: '小组讨论',
              value: '小组讨论'
            }]
          }]
        }, {
          name: "选择日期",
          sub: timeArr
        }]
      }
    },
    mounted(){
      var that = this;

      // 在此给每个选项加入处理回调函数
      that.filter[0].callback = function(res) {
        console.log(res);
      }
      that.filter[1].callback = function(res) {
        console.log(res);
      }
      that.filter[2].callback = function(res) {
        console.log(res);
      }
    },
    //相关操作事件
    methods: {
      /**
       * 示例：点击nav切换状态
       * @Author   Warrenyang
       * @DateTime 2017-09-16
       * @version  [version]
       * @param    {[type]}   ret        返回参数
       * @return   {[type]}   [description]
       */
      navClick(ret){
        var that = this;
        console.log('点击导航',ret);
        for(let i in that.navConf.content){
          if(i == ret.clickIndex){
            that.navConf.content[i].active = true;
          }else{
            that.navConf.content[i].active = false;
          }
        }
        that.type = ret.params.type;
        that.page = 0;
        that.list = [];
        that.showList = false;
        that.$nextTick(function(){
          that.showList = true; //通过v-if进行刷新
        });
      },
      /**
       * list初始化以及下拉加载更多
       * @Author   Warrenyang
       * @DateTime 2017-09-21
       * @version  [version]
       * @param    {Function} done [description]
       * @return   {[type]}        [description]
       */
      infinite(done){
        var that = this;
        console.log('infinite');
        that.getList(done);
      },
      /**
       * 下拉刷新处理
       * @Author   Warrenyang
       * @DateTime 2017-09-21
       * @version  [version]
       * @param    {Function} done [description]
       * @return   {[type]}        [description]
       */
      refresh(done){
        var that = this;
        console.log('refresh');
        that.page = 0;
        that.list = [];
        that.pagination = {
          current_page: 1,
          page_size: 10,
          total: 0
        };
        that.hasMore = true;
        that.$nextTick(function(){
          done();
          // that.getList(done);
        });
      },
      /**
       * 获取list
       * @Author   Warrenyang
       * @DateTime 2017-09-23
       * @version  [version]
       * @param    {Function} done [description]
       * @return   {[type]}        [description]
       */
      getList(done){
        var that = this;
        // if(that.page >= that.maxPage){
        //   done(true);
        //   return false;
        // }
        // that.page ++;
        // setTimeout(function(){
        //   for(let i = 0; i < 10; i++){
        //     that.list.push(that[that.type]);
        //   }
        //   done();
        // },1500);
        // 
        if(!that.hasMore){
          done(true);
          return false;
        }

        $.ajax({
          url: '/book_room/room/list',
          method: 'GET',
          data: {
            current_page: that.pagination.current_page
          },
          success(res){
            let resArr = [];
            for(let i in res.data.list){
              resArr.push({
                img_url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1530678619,3275431284&fm=27&gp=0.jpg',
                title: res.data.list[i].name,
                desc: res.data.list[i].des,
                other_time: Utils.timestampToDate(res.data.list[i].update_time),
                href: '#/book/detail'
              })
            }
            that.list = that.list.concat(resArr);

            that.pagination = res.data.pagination; 
            that.pagination.current_page ++;
            if(that.pagination.current_page > Math.ceil(that.pagination.total/that.pagination.page_size)){
              done(true);
              that.hasMore = false;
            }else if(that.list.length == 0){
              done(true);
            }else{
              done();
            }
            
          }
        })
      }
    }
  }
</script>