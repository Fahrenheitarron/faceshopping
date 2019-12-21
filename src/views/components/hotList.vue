<template>
  <cube-scroll
    ref="scroll"
    :data="items"
    :options="options"
    @pulling-down="onPullingDown"
    @pulling-up="onPullingUp"
  >
    <ul class="masonry">
      <li
        v-for="(item, index) in items"
        class="list-item"
        :key="index"
        @click="linkToDetail"
      >
        <img
          :src="item.url"
          width="100%"
          height="170px"
          style="border-radius: 4px"
        >
        <p class="comment">{{item.content}}</p>
        <div class="pic-num clearfix">
          <span
            class="fl"
            style="color: #944FE9;"
          >¥ {{item.price}}</span>
          <span class="fr">晒单量 {{item.contents}}</span>
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
      this.$router.push({ path: '/wareDetail' })
    }
  },
  mounted () {
    this.$api.getConfigsByProductId(2).then((res) => {
      this.items = res
    })
  }
}
</script>

<style lang="less" scoped>
.fr {
  float: right;
}
.fl {
  float: left;
}
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
.masonry {
  height: 600px;
  padding: 10px;
  -moz-column-count: 2; /* Firefox */
  -webkit-column-count: 2; /* Safari 和 Chrome */
  column-count: 2;
  -moz-column-gap: 15px;
  -webkit-column-gap: 15px;
  column-gap: 15px;
}
.list-item {
  width: 170px;
  margin-bottom: 15px;
  -moz-page-break-inside: avoid;
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
  border-radius: 4px;
}
.pic-num {
  font-size: 14px;
  overflow: hidden;
  margin-top: 4px;
  height: 20px;
  line-height: 20px;
  padding: 0 4px;
}
.comment {
  width: 162px;
  line-height: 1.15;
  font-size: 14px;
  color: #191919;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-top: 5px;
}
</style>