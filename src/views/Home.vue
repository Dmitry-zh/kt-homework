<template>
<div>
    <div v-if="!checkAuth">
        <auth />
    </div>
    <div v-else>
        <homeHeader />
        <stories />
        <div class="testbtn" @click="exit()">ВЫЙТИ</div>
        <bottom />
    </div>
</div>
</template>

<script>
import bottom from "@/components/Bottom.vue";
import homeHeader from "@/components/homeHeader.vue";
import stories from "@/components/stories.vue";
import auth from '../components/auth.vue'

export default {
    data() {
        return {};
    },
    metaInfo: {
        title: 'Инстаграм 2'
    },
    components: {
        bottom,
        homeHeader,
        stories,
        auth
    },
    methods: {
        exit() {
            this.$store.dispatch('commitSession', false)
        }
    },
    computed: {
        checkAuth() {
            return this.$store.getters.auth
        },
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.testbtn {
    border: 1px solid black;
    margin-top: 50vh;
}
</style>
