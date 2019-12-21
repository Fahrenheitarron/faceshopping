<template>
  <div class="concern">
    <img
      src="@/assets/publishSuccess.png"
      width="100%"
    >
    <div
      class="return"
      @click="returnList"
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
    returnList () {
      this.$router.push({ path: '/home' })
    }
  }
}
</script>

<style lang="less" scoped>
.concern {
  position: relative;
  width: 100%;
  .return {
    position: absolute;
    top: 405px;
    right: 27px;
    width: 156px;
    height: 44px;
  }
}
</style>