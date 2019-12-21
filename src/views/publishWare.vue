<template>
  <div class="concern">
    <img
      src="@/assets/publishWare.png"
      width="100%"
    >
    <div
      class="publish"
      @click="linkToPublish"
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
    linkToPublish () {
      this.$router.push({ path: '/publishing' })
    }
  }
}
</script>

<style lang="less" scoped>
.concern {
  position: relative;
  width: 100%;
  .publish {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 355px;
  }
}
</style>