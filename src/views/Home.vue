<template>
  <div class="home">
    <van-button>test</van-button>
  </div>
</template>

<script>
import { Button } from 'vant'

export default {
  name: 'Home',
  components: {
    [Button.name]: Button,
  },
}
</script>
