<template>
  <div class="navigate">
    <div class="search">
      <div>
        <input
          class="input"
          type="text"
        >
        <img
          class="input-img"
          src="@/assets/search.png"
          width="11px"
          height="11px"
        >
        <img
          src="@/assets/people.png"
          width="20px"
          height="21px"
          style="margin-left:10px"
          @click="showList"
        >
        <img
          src="@/assets/list.png"
          v-show="listShow"
          width="106px"
          height="139px"
          class="peopleList"
        >
        <div
          class="hideList"
          v-show="listShow"
          @click="linkToMy"
        ></div>
      </div>
    </div>
    <cube-tab-bar
      class="tab-bar"
      v-model="activeIndex"
      showSlider
      :data="[{label: '颜值', value: 'Home'}, {label: '关注', value: 'Concern'}, {label: '热门商品', value: 'Hot'}]"
      @click="tabClick"
    >
    </cube-tab-bar>
    <Home v-show="activeIndex === 'Home'"></Home>
    <Concern v-show="activeIndex === 'Concern'"></Concern>
    <Hot v-show="activeIndex === 'Hot'"></Hot>
    <div class="footer">
      <div
        @click="toPublish"
        class="publish-btn"
      ></div>
    </div>
  </div>
</template>

<script>
import Home from './components/homeList'
import Concern from './components/concernList'
import Hot from './components/hotList'

export default {
  data () {
    return {
      activeIndex: 'Home',
      searchContent: '',
      listShow: false
    }
  },

  components: {
    Home,
    Concern,
    Hot
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
    toPublish () {
      this.$router.push({ name: 'publishWare' })
    },
    showList () {
      this.listShow = !this.listShow
    },
    linkToMy () {
      this.$router.push({ path: '/privateInfo' })
    }
  }
}
</script>

<style lang="less" scoped>
.navigate {
  .search {
    height: 44px;
    background: url('../assets/search-bg.png') no-repeat;
    margin-bottom: 10px;
    position: relative;
    .input-img {
      position: absolute;
      left: 30px;
      top: 16px;
    }
    .input {
      width: 300px;
      height: 28px;
      margin-top: 8px;
      border-radius: 15px;
      text-indent: 20px;
    }
    .peopleList {
      position: fixed;
      top: 40px;
      right: 28px;
      z-index: 100;
    }
    .hideList {
      width: 106px;
      height: 30px;
      position: fixed;
      top: 40px;
      right: 28px;
      z-index: 100;
      cursor: pointer;
    }
  }
  .tab-bar {
    font-size: 18px;
    color: #bbbccd;
  }
  .cube-tab-bar-slider {
    background-color: #ff61ab;
  }
  .cube-tab_active {
    color: #ff61ab;
  }
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 74px;
    z-index: 100;
    background: url('../assets/publish.png') no-repeat;
    background-size: 100%;
    .publish-btn {
      width: 48px;
      height: 48px;
      position: fixed;
      left: 164px;
      bottom: 26px;
    }
  }
}
</style>
<style lang="less">
.navigate {
  .cube-tab-bar-slider {
    background-color: #ff61ab;
  }
  .cube-tab_active {
    color: #ff61ab;
  }
}
</style>
