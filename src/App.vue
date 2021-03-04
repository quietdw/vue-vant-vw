<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'APP',
  data() {
    return {}
  },
  created() {}
}
</script>

<style lang="less">
#app {
  .content-wrapper {
    height: calc(100vh - 50px);
    overflow: auto;
  }
}
</style>
<style>
:root {
  box-sizing: border-box;
}

*,
::before,
::after {
  box-sizing: inherit;
}
</style>
