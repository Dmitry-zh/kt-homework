<template>
<div class="box">
    <div class="logo">
        Instagram
        <div>
            two point null
        </div>
    </div>
    <form class="form" @submit.prevent="checkAuth(login, password)">
        <div class="field">
            <input v-model="login" placeholder="Введите ваш логин" />
        </div>
        <div class="field pas">
            <input v-if="showPassword" type="text" v-model="password" placeholder="Введите ваш пароль" />
            <input v-else type="password" v-model="password" placeholder="Введите ваш пароль" />
        <div class="eye" :class="{ 'opened': showPassword }" @click="showPassword = !showPassword">
            </div>
            </div>
        <input type="submit" :disabled="!emptyFields" value="Вход">
    </form>
    <div v-show="errMessage" class="err">{{errMessage}}</div>
    <div class="register">
        Еще нет аккаунта?
        <router-link tag="a" :to="{ name: 'Reg' }">
            Зарегистрироваться
        </router-link>
    </div>

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
            login: "",
            password: "",
            errMessage: "",
            showPassword: false,
        }
    },
    firestore() {
        return {
            usrs: db.collection('users'),
        }
    },
    computed: {
        emptyFields() {
            return this.login && this.password
        }
    },
    methods: {
        checkAuth(log, pas) {
            let usr = this.$store.getters.users.filter((obj) => {
                return obj.usr.login.toLowerCase() === log.toLowerCase()
            })
            if (usr.length === 0) {
                this.errMessage = "Такого пользователя не существует"
            } else {
                if (usr[0].usr.password === pas) {
                    this.$store.dispatch('commitSession', usr[0])
                    //this.$router.push({path: `/user/${log}`, params: this.$store.getters.auth})
                } else {
                    this.errMessage = "Неверный пароль"
                }
            }
        },
    },
    created() {
        this.$store.dispatch('commitUsers', this.usrs)

    }
}
</script>

<style scoped>
.box {
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
}

.logo {
    font-family: Brush Script MT, Brush Script Std, cursive;
    font-weight: 600;
    font-size: 36px;
    text-align: center;
}

.logo>div {
    font-size: 22px;
}

form {
    width: 100%;
    display: flex;
    flex-direction: column;
}

form .field {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

form .field input {
    width: 80%;
    border-style: none none groove none;
}

input[disabled] {
    background: cadetblue !important;
    color: lightgray !important;
}

input[type="submit"] {
    align-self: center;
    padding: 5px;
    margin-top: 20px;
    background: royalblue;
    font-size: 16px;
    border: none;
    color: white;
    border-radius: 5px;
    font-weight: 500;
    width: 80%;
}

.register {
    margin-top: 30px;
    text-align: center;
    font-family: Geneva, Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: darkgray;
}

.register a {
    text-decoration: none;
    color: black;
}

.err {
    color: red;
    font-family: Geneva, Arial, Helvetica, sans-serif;
    margin-top: 10px;
    font-size: 14px;
}

.eye {
    width: 1em;
    height: 1em;
    right: 0;
    position: absolute;
    margin-right: 12%;
    background: no-repeat center/100% url(https://image.flaticon.com/icons/svg/2210/2210266.svg)
}

.eye.opened {
    background: no-repeat center/100% url(https://image.flaticon.com/icons/svg/2210/2210317.svg)
}
</style>
