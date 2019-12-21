<template>
  <div class="concern">
    <img
      src="@/assets/publishing.png"
      width="100%"
    >
    <div
      class="confirm"
      @click="linkToSuccess"
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
    linkToSuccess () {
      this.$router.push({ path: '/publishSuccess' })
    }
  }
}
</script>

<style lang="less" scoped>
.concern {
  position: relative;
  width: 100%;
  .confirm {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 40px;
    height: 50px;
  }
}
</style>