<template>
  <div class="comment">
    <img
      src="@/assets/commentDetail.png"
      width="100%"
    >
    <div
      class="ware"
      @click="linkToWare"
    ></div>
    <img
      v-if="!isConcern"
      src="../assets/concern.png"
      width="22px"
      height="22px"
      class="concern-btn"
      @click="succ"
    >
    <img
      v-if="isConcern"
      src="../assets/concernTogether.png"
      width="22px"
      height="22px"
      class="concern-btn"
      @click="succ"
    >
    <img
      v-if="!isLike"
      src="../assets/unGood.png"
      width="22px"
      height="22px"
      class="like"
      @click="concern"
    >
    <img
      v-if="isLike"
      src="../assets/good.png"
      width="22px"
      height="22px"
      class="like"
      @click="concern"
    >
    <img
      src="../assets/success.png"
      class="success-icon"
      v-if="isSuccess"
    >
    <div
      class="close"
      v-if="isSuccess"
      @click="isSuccess=false"
    ></div>
    <div
      class="next"
      v-if="isSuccess"
      @click="next"
    ></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLike: false,
      isConcern: false,
      isSuccess: false
    }
  },
  methods: {
    linkToWare () {
      location.href = '//item.jd.com/42384028568.html'
    },
    concern () {
      this.isLike = !this.isLike
    },
    succ () {
      this.isConcern = true
      this.isSuccess = true
    },
    next () {
      this.$router.push({ path: '/chat' })
    }
  }
}
</script>

<style lang="less" scoped>
.comment {
  position: relative;
  width: 100%;
  .ware {
    width: 120px;
    height: 120px;
    position: absolute;
    top: 120px;
    left: 120px;
  }
  .like {
    position: absolute;
    top: 394px;
    left: 20px;
  }
  .concern-btn {
    width: 80px;
    height: 25px;
    position: absolute;
    top: 24px;
    right: 20px;
  }
  .success-icon {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
  }
  .close {
    position: absolute;
    z-index: 100;
    top: 65px;
    left: 300px;
    width: 30px;
    height: 30px;
  }
  .next {
    position: absolute;
    z-index: 100;
    top: 480px;
    left: 100px;
    width: 180px;
    height: 50px;
  }
}
</style>