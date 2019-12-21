<template>
  <cube-scroll
    ref="scroll"
    :data="items"
    :options="options"
    @pulling-down="onPullingDown"
    @pulling-up="onPullingUp"
  >
    <ul class="concern">
      <li
        v-for="(item, index) in items"
        class="list-item"
        :key="index"
        @click="linkToDetail"
      >
        <div class="clearfix">
          <img
            :src="item.url"
            style="border-radius: 50%"
            class="fl big-img"
            width="120px"
            height="120px"
          >
          <div class="fl">
            <p>{{item.name}}</p>
            <p style="margin-top:5px">{{item.add}}<span class="circle"></span>{{item.age}}岁<span class="circle"></span>单身</p>
            <p style="margin-top:14px"><span
                class="tag"
                v-for="(tag, index) in item.like"
                :key="index"
              >{{tag}}</span></p>
            <p style="margin-top:10px">
              <img
                v-for="(img,index) in item.content.url"
                :key="index"
                :src="img"
                class="small-img"
              >
            </p>
          </div>
        </div>
        <p class="comment">{{item.content.content}}</p>
        <div class="info">
          颜值匹配交友度<span style="color: #944FE9;margin-right:30px">{{item.shopSimilar}}%</span>
          购物喜好匹配度<span style="color: #944FE9">{{item.inSimilar}}%</span>
        </div>
      </li>
    </ul>
  </cube-scroll>
</template>
<script>
export default {
  data () {
    return {
      items: []
    }
  },
  computed: {
    options () {
      return {
        pullDownRefresh: this.pullDownRefreshObj,
        pullUpLoad: this.pullUpLoadObj,
        scrollbar: true
      }
    },
  },

  methods: {
    tabClick (index) {
      this.activeIndex = index
    },
    onPullingDown () {
      // 模拟更新数据
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          this.items.unshift(1)
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    },
    onPullingUp () {
      // 模拟更新数据
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          this.items = this.items.concat(11)
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)

    },
    linkToDetail () {
      this.$router.push({ path: '/concernDetail' })
    }
  },
  mounted () {
    this.$api.getConfigsByProductId(1).then((res) => {
      this.items = res
    })
  }
}
</script>

<style lang="less" scoped>
.clearfix:after {
  display: block;
  clear: both;
  content: '';
  visibility: hidden;
  height: 0;
}

.clearfix {
  zoom: 1;
}
.concern {
  text-align: left;
  font-size: 14px;
  height: 600px;
  padding: 20px;
}
.fl {
  float: left;
}
.list-item {
  width: 335px;
  margin-bottom: 10px;
  .circle {
    display: inline-block;
    width: 4px;
    height: 4px;
    background: #d8d8d8;
    border-radius: 50%;
    position: relative;
    top: -3px;
  }
  .big-img {
    margin-right: 15px;
  }
  .tag {
    width: 36px;
    height: 18px;
    padding: 0px 2px;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    margin-left: 7px;
    border: 1px solid;
    border-radius: 3px;
    &:nth-child(1) {
      margin-left: 0;
    }
    &:nth-child(2n) {
      color: #944fe9;
      border-color: #944fe9;
    }
    &:nth-child(2n + 1) {
      color: #4f6ce9;
      border-color: #4f6ce9;
    }
  }
  .small-img {
    width: 40px;
    height: 40px;
    border-radius: 6px;
    margin-left: 7px;
    &:nth-child(1) {
      margin-left: 0;
    }
  }
  .comment {
    width: 335px;
    line-height: 1.15;
    font-size: 14px;
    color: #191919;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-top: 20px;
  }
  .info {
    width: 335px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background: #eee3ff;
    border-radius: 16px;
    margin-top: 15px;
  }
}
</style>