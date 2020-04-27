<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  beforeMount() {
    if (!this.$store.getters.auth) {
     this.$router.replace({name: 'Home'})
    }
    this.$router.beforeEach((to, from, next) => {
      if ((to.name === 'Reg' || to.name === 'Home') && !this.$store.getters.auth) next()
      if (this.$store.getters.auth) next()
    })
  }
}
</script>

