<template>
<div v-if="checkUser">
Привет {{this.$attrs.login}}
</div>
<div v-else>
Пошел на хуй с чужой страницы
</div>
</template>

<script>
export default {
    name: 'UserPage',
        metaInfo: {
    title: 'Пользователь'
  },
    computed: {
        checkUser() {
            return this.$attrs.login === this.$store.getters.auth.login
        }
    },
}
</script>

<style scoped>
</style>
