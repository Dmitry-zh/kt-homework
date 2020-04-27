let checkAuth = {
  beforeMount() {
    if (!this.$store.getters.auth) this.$router.push({name: 'Home'})
  }
}

export default checkAuth
