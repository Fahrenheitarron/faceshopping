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
        <!-- <img
          :src="item.url"
          width="100%"
        > -->
        <img
          :src="item.url"
          width="100%"
        >
        <div class="comment">
          <img
            src="@/assets/unGood.png"
            v-if="!item.isLike"
            @click="item.isLike=!item.isLike"
            width="22px"
            height="22px"
          >
          <img
            src="@/assets/good.png"
            v-if="item.isLike"
            @click="item.isLike=!item.isLike"
            width="22px"
            height="22px"
          >
          <span>{{item.likes}}</span>
          <img
            style="margin-left: 10px"
            src="@/assets/comment.png"
            width="22px"
            height="22px"
          >
          <span>{{item.comment}}</span>
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
      this.$router.push({ path: '/commentDetail' })
    }
  },
  mounted () {
    this.$api.getConfigsByProductId(0).then((res) => {
      this.items = res
      res.forEach(item => {
        item.isLike = false
      })
    })
  }
}
</script>

<style lang="less" scoped>
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
.comment {
  font-size: 14px;
  span {
    position: relative;
    top: -8px;
  }
}
</style>