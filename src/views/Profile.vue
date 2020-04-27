<template>
<div class="box">
    <profileTop />
    <profileFeed />
    <div style="top: 40vh">РЕАЛИЗУЙ ПРИМЕСИ НА ЗАГРУЗКУ КАРТИНОК (ИСПОЛЬЗУЮ В ДВУХ КОМПОНЕНТАХ)
    </div>
    <bottom />
</div>
</template>

<script>
import bottom from '@/components/Bottom.vue'
import profileTop from '@/components/profileTop.vue'
import profileFeed from '@/components/profileFeed.vue'
//import checkAuth from '../../public/static/mixins/checkAuth.js'

export default {
    data() {
        return {

        }
    },
    components: {
        bottom,
        profileTop,
        profileFeed
    },
  //  mixins: [checkAuth],
}
</script>

<style scoped>
.box {
    margin: 0;
    padding: 0;
}
</style>
