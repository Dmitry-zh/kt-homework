<template>
<div class="box">
    <div class="message">
        {{message[0].message}}
    </div>
    <form class="form" @submit.prevent="checkAuth(login, password)">
        <div class="field">
            <div>Введите логин
            </div>
            <input v-model="login" />
        </div>
        <div class="field">
            <div>Введите пароль
            </div>
            <input type="password" v-model="password" />
        </div>
        <input type="submit" value="Вход">
    </form>
    <router-link tag="a" :to = "{ name: 'Reg' }">
    Зарегистрироваться
    </router-link>
</div>
</template>

<script>
import {
    db
} from '../main.js'

export default {
    name: 'auth',
    data() {
        return {
            message: "",
            login: "",
            password: "",
        }
    },
    firestore() {
        return {
            message: db.collection('hello'),
            usrs: db.collection('users'),
        }
    },
    computed: {

    },
    methods: {
        checkAuth(log, pas) {
            this.$store.getters.users.map((obj) => {
            if (obj.usr.login === log && obj.usr.password === pas) {
                this.$store.commit('SET_SESSION', log)
                this.$router.push({path: `/user/${log}`, params: this.$store.getters.auth})
            }
        });
}
},
created() {
    this.$store.commit('SET_USERS', this.usrs)

}
}
</script>

<style scoped>
.box {
    display: flex;
    flex-direction: column;
}
</style>
