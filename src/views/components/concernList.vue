<template>
  <ul class="concern">
    <li
      v-for="(item, index) in items"
      class="list-item"
      :key="index"
      @click="linkToDetail"
    >
      <div class="clearfix">
        <img
          :src="item.head_img"
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
              v-for="(tag, index) in item.interest"
              :key="index"
            >{{tag}}</span></p>
          <p style="margin-top:10px">
            <img
              v-for="(img,index) in item.imgs"
              :key="index"
              :src="img"
              class="small-img"
            >
          </p>
        </div>
      </div>
      <p class="comment">{{item.content}}</p>
      <div class="info">
        颜值匹配交友度<span style="color: #944FE9;margin-right:30px">{{item.shopSimilar}}%</span>
        购物喜好匹配度<span style="color: #944FE9">{{item.inSimilar}}%</span>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      items: [{ "activityId": 129, "add": "北京", "age": 47, "content": "good", "create": 1576944547088, "head_img": "//img10.360buyimg.com/imgzone/jfs/t1/90627/37/7908/91546/5dff03e2E1f2f7cc5/6b0aaf8cc1fd65d8.png", "id": 966, "imgs": ["//img10.360buyimg.com/imgzone/jfs/t1/106722/5/7822/206462/5dfee79aE229c9e03/2f50b45685a2224e.png", "//img10.360buyimg.com/imgzone/jfs/t1/101916/29/7770/180838/5dfee799E939063ce/42c71f3752b6dc19.png"], "inSimilar": 85.0, "interest": ["外向", "旅行"], "likes": 25, "name": "Birll", "replies": 19, "sex": 0, "shopSimilar": 86.0, "skuId": 352, "userId": 940 },
      { "activityId": 490, "add": "北京", "age": 19, "content": "good", "create": 1576944547088, "head_img": "//img10.360buyimg.com/imgzone/jfs/t1/108394/15/1587/78802/5dfee893E09503e3e/022a25ada3be68e1.png", "id": 408, "imgs": ["//img10.360buyimg.com/imgzone/jfs/t1/95093/28/7766/151753/5dfee798E02490680/72990afc50c1bd3c.png", "//img10.360buyimg.com/imgzone/jfs/t1/101916/29/7770/180838/5dfee799E939063ce/42c71f3752b6dc19.png"], "inSimilar": 92.0, "interest": ["外向", "旅行"], "likes": 32, "name": "Birll", "replies": 43, "sex": 0, "shopSimilar": 83.0, "skuId": 313, "userId": 811 },
      { "activityId": 734, "add": "北京", "age": 8, "content": "good", "create": 1576944547088, "head_img": "//img10.360buyimg.com/imgzone/jfs/t1/108894/29/1624/96030/5dfee893E13a67a6c/2d16109919f23173.png", "id": 443, "imgs": ["//img10.360buyimg.com/imgzone/jfs/t1/106722/5/7822/206462/5dfee79aE229c9e03/2f50b45685a2224e.png", "//img10.360buyimg.com/imgzone/jfs/t1/101916/29/7770/180838/5dfee799E939063ce/42c71f3752b6dc19.png"], "inSimilar": 99.0, "interest": ["外向"], "likes": 12, "name": "Birll", "replies": 42, "sex": 0, "shopSimilar": 92.0, "skuId": 738, "userId": 529 },
      { "activityId": 980, "add": "北京", "age": 30, "content": "good", "create": 1576944547088, "head_img": "//img10.360buyimg.com/imgzone/jfs/t1/108394/15/1587/78802/5dfee893E09503e3e/022a25ada3be68e1.png", "id": 601, "imgs": ["//img10.360buyimg.com/imgzone/jfs/t1/106722/5/7822/206462/5dfee79aE229c9e03/2f50b45685a2224e.png"], "inSimilar": 97.0, "interest": ["asdasda"], "likes": 47, "name": "Birll", "replies": 18, "sex": 0, "shopSimilar": 83.0, "skuId": 444, "userId": 486 },
      { "activityId": 150, "add": "北京", "age": 49, "content": "good", "create": 1576944547088, "head_img": "//img10.360buyimg.com/imgzone/jfs/t1/90627/37/7908/91546/5dff03e2E1f2f7cc5/6b0aaf8cc1fd65d8.png", "id": 463, "imgs": ["//img10.360buyimg.com/imgzone/jfs/t1/102639/15/7723/206163/5dfee799Ebb832171/9ec51345ec2ec33f.png", "//img10.360buyimg.com/imgzone/jfs/t1/104453/34/7901/91677/5dfee798E28a5ae55/749f2f1be178f0f6.png"], "inSimilar": 99.0, "interest": ["外向", "旅行"], "likes": 39, "name": "Birll", "replies": 30, "sex": 0, "shopSimilar": 96.0, "skuId": 816, "userId": 469 },
      { "activityId": 431, "add": "北京", "age": 33, "content": "good", "create": 1576944547088, "head_img": "//img10.360buyimg.com/imgzone/jfs/t1/108894/29/1624/96030/5dfee893E13a67a6c/2d16109919f23173.png", "id": 264, "imgs": ["//img10.360buyimg.com/imgzone/jfs/t1/104453/34/7901/91677/5dfee798E28a5ae55/749f2f1be178f0f6.png"], "inSimilar": 86.0, "interest": ["asdasda"], "likes": 49, "name": "Birll", "replies": 0, "sex": 0, "shopSimilar": 91.0, "skuId": 246, "userId": 827 },
      { "activityId": 78, "add": "北京", "age": 6, "content": "good", "create": 1576944547088, "head_img": "//img10.360buyimg.com/imgzone/jfs/t1/108394/15/1587/78802/5dfee893E09503e3e/022a25ada3be68e1.png", "id": 355, "imgs": ["//img10.360buyimg.com/imgzone/jfs/t1/106722/5/7822/206462/5dfee79aE229c9e03/2f50b45685a2224e.png", "//img10.360buyimg.com/imgzone/jfs/t1/101916/29/7770/180838/5dfee799E939063ce/42c71f3752b6dc19.png"], "inSimilar": 95.0, "interest": ["外向", "旅行"], "likes": 22, "name": "Birll", "replies": 36, "sex": 0, "shopSimilar": 98.0, "skuId": 366, "userId": 645 },
      { "activityId": 392, "add": "北京", "age": 9, "content": "good", "create": 1576944547088, "head_img": "//img10.360buyimg.com/imgzone/jfs/t1/108894/29/1624/96030/5dfee893E13a67a6c/2d16109919f23173.png", "id": 49, "imgs": ["//img10.360buyimg.com/imgzone/jfs/t1/101916/29/7770/180838/5dfee799E939063ce/42c71f3752b6dc19.png", "//img10.360buyimg.com/imgzone/jfs/t1/101916/29/7770/180838/5dfee799E939063ce/42c71f3752b6dc19.png"], "inSimilar": 89.0, "interest": ["asdasda"], "likes": 6, "name": "Birll", "replies": 3, "sex": 0, "shopSimilar": 84.0, "skuId": 329, "userId": 465 },
      { "activityId": 562, "add": "北京", "age": 49, "content": "good", "create": 1576944547088, "head_img": "//img10.360buyimg.com/imgzone/jfs/t1/108394/15/1587/78802/5dfee893E09503e3e/022a25ada3be68e1.png", "id": 652, "imgs": ["//img10.360buyimg.com/imgzone/jfs/t1/104453/34/7901/91677/5dfee798E28a5ae55/749f2f1be178f0f6.png", "//img10.360buyimg.com/imgzone/jfs/t1/101916/29/7770/180838/5dfee799E939063ce/42c71f3752b6dc19.png"], "inSimilar": 83.0, "interest": ["asdasda"], "likes": 43, "name": "Birll", "replies": 44, "sex": 0, "shopSimilar": 93.0, "skuId": 961, "userId": 703 },
      { "activityId": 727, "add": "北京", "age": 19, "content": "good", "create": 1576944547088, "head_img": "//img10.360buyimg.com/imgzone/jfs/t1/108894/29/1624/96030/5dfee893E13a67a6c/2d16109919f23173.png", "id": 150, "imgs": ["//img10.360buyimg.com/imgzone/jfs/t1/106722/5/7822/206462/5dfee79aE229c9e03/2f50b45685a2224e.png", "//img10.360buyimg.com/imgzone/jfs/t1/101916/29/7770/180838/5dfee799E939063ce/42c71f3752b6dc19.png"], "inSimilar": 89.0, "interest": ["asdasda"], "likes": 38, "name": "Birll", "replies": 39, "sex": 0, "shopSimilar": 88.0, "skuId": 72, "userId": 797 }]
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
    // this.$api.getConfigsByProductId(1).then((res) => {
    //   this.items = res
    // })
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