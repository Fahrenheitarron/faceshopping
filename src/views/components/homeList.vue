<template>
  <ul class="masonry">
    <li
      v-for="(item, index) in items"
      class="list-item"
      :key="index"
      @click="linkToDetail"
    >
      <img
        :src="item.url"
        style="border-radius:4px"
        width="100%"
      >
      <div class="comment">
        <img
          src="@/assets/unGood.png"
          v-if="!item.isLike"
          @click.stop="likeItem(item)"
          width="22px"
          height="22px"
        >
        <img
          src="@/assets/good.png"
          v-if="item.isLike"
          @click.stop="likeItem(item)"
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
        <span>{{item.replies}}</span>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      items: [{ "isLike": false, "activityId": 171, "add": "北京", "age": 28, "content": "good", "create": 1576943657490, "head_img": "adasda", "id": 333, "imgs": ["asdasda"], "inSimilar": 85.0, "interest": ["asdasda"], "likes": 43, "name": "Birll", "replies": 28, "sex": 0, "shopSimilar": 93.0, "skuId": 849, "userId": 297, "url": '//img10.360buyimg.com/imgzone/jfs/t1/106722/5/7822/206462/5dfee79aE229c9e03/2f50b45685a2224e.png' },
      { "isLike": false, "activityId": 640, "add": "北京", "age": 40, "content": "good", "create": 1576943657490, "head_img": "adasda", "id": 136, "imgs": ["asdasda"], "inSimilar": 99.0, "interest": ["asdasda"], "likes": 18, "name": "Birll", "replies": 3, "sex": 0, "shopSimilar": 96.0, "skuId": 500, "userId": 316, "url": '//img10.360buyimg.com/imgzone/jfs/t1/93178/19/7823/227832/5dfee69cE86af7662/79509ed34e3bc3dc.png' },
      { "isLike": false, "activityId": 264, "add": "北京", "age": 28, "content": "good", "create": 1576943657490, "head_img": "adasda", "id": 206, "imgs": ["asdasda"], "inSimilar": 94.0, "interest": ["asdasda"], "likes": 13, "name": "Birll", "replies": 11, "sex": 0, "shopSimilar": 90.0, "skuId": 217, "userId": 657, "url": '//img10.360buyimg.com/imgzone/jfs/t1/101835/38/7815/252413/5dfee69cE11694e32/d300fa4377236c82.png' },
      { "isLike": false, "activityId": 984, "add": "北京", "age": 25, "content": "good", "create": 1576943657490, "head_img": "adasda", "id": 209, "imgs": ["asdasda"], "inSimilar": 80.0, "interest": ["asdasda"], "likes": 29, "name": "Birll", "replies": 37, "sex": 0, "shopSimilar": 93.0, "skuId": 204, "userId": 135, "url": '//img10.360buyimg.com/imgzone/jfs/t1/107417/23/1528/279237/5dfee69bE18c60d25/f86821c75cd0b73b.png' },
      { "isLike": false, "activityId": 459, "add": "北京", "age": 15, "content": "good", "create": 1576943657490, "head_img": "adasda", "id": 414, "imgs": ["asdasda"], "inSimilar": 83.0, "interest": ["asdasda"], "likes": 41, "name": "Birll", "replies": 33, "sex": 0, "shopSimilar": 90.0, "skuId": 134, "userId": 593, "url": '//img10.360buyimg.com/imgzone/jfs/t1/101835/38/7815/252413/5dfee69cE11694e32/d300fa4377236c82.png' },
      { "isLike": false, "activityId": 955, "add": "北京", "age": 2, "content": "good", "create": 1576943657490, "head_img": "adasda", "id": 539, "imgs": ["asdasda"], "inSimilar": 90.0, "interest": ["asdasda"], "likes": 47, "name": "Birll", "replies": 42, "sex": 0, "shopSimilar": 94.0, "skuId": 807, "userId": 753, "url": '//img10.360buyimg.com/imgzone/jfs/t1/101835/38/7815/252413/5dfee69cE11694e32/d300fa4377236c82.png' },
      { "isLike": false, "activityId": 347, "add": "北京", "age": 20, "content": "good", "create": 1576943657490, "head_img": "adasda", "id": 141, "imgs": ["asdasda"], "inSimilar": 96.0, "interest": ["asdasda"], "likes": 33, "name": "Birll", "replies": 25, "sex": 0, "shopSimilar": 92.0, "skuId": 761, "userId": 662, "url": '//img10.360buyimg.com/imgzone/jfs/t1/99283/19/7805/212339/5dfee69bEa946af78/90f0b00fdabe5fbf.png' },
      { "activityId": 61, "add": "北京", "age": 49, "content": "good", "create": 1576943657490, "head_img": "adasda", "id": 318, "imgs": ["asdasda"], "inSimilar": 94.0, "interest": ["asdasda"], "likes": 41, "name": "Birll", "replies": 48, "sex": 0, "shopSimilar": 87.0, "skuId": 951, "userId": 287, "url": '//img10.360buyimg.com/imgzone/jfs/t1/101835/38/7815/252413/5dfee69cE11694e32/d300fa4377236c82.png' },
      { "isLike": false, "activityId": 27, "add": "北京", "age": 20, "content": "good", "create": 1576943657490, "head_img": "adasda", "id": 221, "imgs": ["asdasda"], "inSimilar": 94.0, "interest": ["asdasda"], "likes": 14, "name": "Birll", "replies": 10, "sex": 0, "shopSimilar": 96.0, "skuId": 407, "userId": 603, "url": '//img10.360buyimg.com/imgzone/jfs/t1/101835/38/7815/252413/5dfee69cE11694e32/d300fa4377236c82.png' },
      { "activityId": 625, "add": "北京", "age": 26, "content": "good", "create": 1576943657490, "head_img": "adasda", "id": 325, "imgs": ["asdasda"], "inSimilar": 91.0, "interest": ["asdasda"], "likes": 27, "name": "Birll", "replies": 20, "sex": 0, "shopSimilar": 85.0, "skuId": 86, "userId": 504, "url": '//img10.360buyimg.com/imgzone/jfs/t1/95534/18/7835/129851/5dfee69aEaef3b6b2/9d317c1e510b7eec.png' }]
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
    },
    likeItem (item) {
      item.isLike = !item.isLike
    }
  },
  mounted () {
    // this.items.forEach(item => {
    //   item.isLike = false
    // })
    // this.$api.getConfigsByProductId(0).then((res) => {
    //   this.items = res
    //   res.forEach(item => {
    //     item.isLike = false
    //   })
    // })
  }
}
</script>

<style lang="less" scoped>
.masonry {
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