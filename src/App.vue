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
  padding-bottom: 50px;
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
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden !important;
}
img {
  content: normal !important;
}
</style>
