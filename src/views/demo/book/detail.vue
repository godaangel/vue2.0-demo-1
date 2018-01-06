<template>
 <wii-page>
  <wii-panel>
    <wii-loading></wii-loading>
    <wii-no-data backgroundColor="#f8f8f8"></wii-no-data>

    <wii-article>
      <h1>文章详情 大标题</h1>
      <section>
        <h2 class="title">章标题</h2>
        <section>
          <h3>1.1 节标题</h3>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
          </p>
          <h3>1.2 单个图片(不能放大)</h3>
          <p>
            <wii-image :conf="image"></wii-image>
          </p>
          <h3>1.3 可放大查看的图片组</h3>
          <p>
            <wii-image-group :conf="imageList"></wii-image-group>
          </p>
        </section>
      </section>
    </wii-article>

    <wii-preview>
      <span slot="title">标题</span>

      <wii-preview-item>
        <span slot="label">商品名称</span>
        电动打蛋机
      </wii-preview-item>
      <wii-preview-item>
        <span slot="label">标题</span>
        名字名字
      </wii-preview-item>
      <wii-preview-item>
        <span slot="label">很长标题</span>
        很长标题很长标题很长标题很长标题很长标题很长标题很长标题很长标题很长标题
      </wii-preview-item>

      <wii-button slot="buttons" :conf="{class_name: 'default', type: 'back'}">取消</wii-button>
      <wii-button slot="buttons" :callback="btnCallback">操作</wii-button>
    </wii-preview>

    <div class="buttons">
      <wii-button :conf="{type: 'back'}">返回上一页</wii-button>
    </div>

    <div class="buttons">
      <wii-button :conf="{class_name: 'error', type: 'ajax', disabled: true}">不可操作</wii-button>
    </div>

  </wii-panel>
 </wii-page>
</template>

<script>

export default {
  data() {
    return {
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
  mounted(){
    var that = this;
  },
  methods: {
    btnCallback(res){
      console.log('按钮自定义事件', res);
    }
  }
}
</script>

<style lang="less">
  .buttons{
    margin-top: 15px;
    padding: 0 15px;
  }
</style>
