<template>
<div class="box">
<div class="top">
    <div class = "backBtn">
    &#9665;
    </div>
    <div class = "login">
    {{userLogin}}
    </div>
    </div>
<div v-if="user.length===0"> Пользователь еще не зарегистрировался в Instagram 2.0 </div>
    <div v-else>
    <userPageTop :user="this.user[0].usr"/>
    </div>
    <profileFeed />
</div>
</template>

<script>
//{{user[0].usr.info}}
import userPageTop from '@/components/userPageTop.vue'
import profileFeed from '@/components/profileFeed.vue'
import {
    db
} from '../main.js'

export default {
    name: 'UserPage',
    metaInfo: {
        title: 'Пользователь'
    },
    data() {
        return {
            user: ""
        }
    },
    computed: {
        userLogin() {
            return this.user.length>0?this.$attrs.login:'   ...  '
        }
    },
    firestore() {
        return {
            user: db
                .collection('users')
                .where('usr.login', '==', this.$attrs.login),
        }
    },
    beforeMount() {
        if (this.$attrs.login === this.$store.getters.auth.login)
            this.$router.replace({
                name: 'Profile'
            })
    },
    components: {
        profileFeed,
        userPageTop,
    }
}
</script>

<style scoped>
.box {
    margin: 0;
    padding: 0;
    width: 100%;
}
.top {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 9fr;
    grid-auto-rows: 5vh;
    position: fixed;
    top: 0;
    background: white;
}


</style>
