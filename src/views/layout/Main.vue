<template>
  <div class="main">
    <div class="content-wrapper">
      <transition
        :enter-active-class="`animated slideInLeft page-toggle-enter-active`"
        :leave-active-class="`animated slideOutRight page-toggle-leave-active`"
      >
        <router-view />
      </transition>
    </div>
    <van-tabbar route>
      <van-tabbar-item
        v-for="item in options"
        :to="item.path"
        :key="item.name + item.path"
        :icon="item.meta.icon"
        replace
        >{{ item.name }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      options: []
    }
  },
  props: {},
  computed: {},
  watch: {},
  created() {
    const root = this.$router.options.routes[0]

    root.children.map((v) => {
      v.path = root.path + v.path
    })
    console.log()
    this.options = root.children
  },
  mounted() {},
  methods: {},
  components: {}
}
</script>
<style lang="less" scoped>
.main {
  overflow-x: hidden;
  .content-wrapper {
    border: solid 1px red;
    width: 100vw;
    height: calc(100vh - 50px);
    overflow: auto;
  }
}
</style>
<style lang="less">
.page-toggle-enter-active {
  position: absolute !important;
  animation-duration: 0.3s !important;
}
.page-toggle-leave-active {
  position: absolute !important;
  animation-duration: 0.3s !important;
}
.page-toggle-enter {
}
.page-toggle-leave-to {
}
</style>
