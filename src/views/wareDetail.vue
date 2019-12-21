<template>
  <div class="ware">
    <img
      src="@/assets/wareDetail.png"
      width="100%"
    >
    <div
      class="one"
      @click="linkToComment"
    ></div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    linkToComment () {
      this.$router.push({ path: '/commentDetail' })
    }
  }
}
</script>

<style lang="less" scoped>
.ware {
  width: 100%;
  position: relative;
  .one {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 500px;
  }
}
</style>