<template>
<div class="box">
    <div v-if="!checkAuth">
    <auth/>
    </div>
    <div v-else>АВТОРИЗОВАН
    </div>
</div>
</template>

<script>
import auth from '../components/auth.vue'

export default {
    name: 'Home',
        metaInfo: {
    title: 'Авторизация'
  },
    components: {
        auth,
    },
    computed: {
        checkAuth() {
            return this.$store.getters.auth
        },
    }
}
</script>
