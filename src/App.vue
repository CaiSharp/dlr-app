<template>
  <div id="app">
    <router-view name="navbar"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  @import "sass/main";
</style>
