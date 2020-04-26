<template>
<div class="box">
    <router-link tag="div" class="back" :to="{ name: 'Home' }">
        &#9665; Вернуться
    </router-link>
    <div class="welcomeMessage">
        <div class="logo">
            Instagram <br />
            two point null
        </div>
        <div class="txt">
            Зарегистрируйтесь, что бы<br />
            смотреть на попы ваших подруг<br />
            и милых котиков
        </div>
    </div>
    <form @submit.prevent="addNewUser(newUser)">
        <div class="field">
            <input v-model="newUser.login"
            @input="checkLoginFree(newUser.login), checkLoginCorrectSymbols(newUser.login), checkLoginLength(newUser.login)"
            placeholder="Ваш логин" />
            <div v-if="loginBusy" class="notChecked">
                Пользователь уже существует
            </div>
            <div v-else-if="wrongLoginSymbols" class="notChecked">
                Логин должен содержать только латинские буквы и цифры
            </div>
            <div v-else-if="wrongLoginLength" class="notChecked">
                Длина логина должна быть от 4 до 12 символов
            </div>
        </div>
        <div class="field pass">
            <input v-if="passwordIsVisible"
            v-model="newUser.password"
            type="text"
            @input="checkPasswordCorrectSymbols(newUser.password), checkPasswordLength(newUser.password)"
            placeholder="Введите пароль" />
            <input v-else v-model="newUser.password"
            type="password"
            @input="checkPasswordCorrectSymbols(newUser.password), checkPasswordLength(newUser.password)"
            placeholder="Введите пароль" />
            <div class="eye" :class="{ 'opened': passwordIsVisible }" @click="passwordShown()">
            </div>
        </div>
        <div v-if="wrongPasswordSymbols" class="notChecked">
            Пароль должен содержать только латинские буквы и хотя бы одну цифру
        </div>
        <div v-else-if="wrongPasswordLength" class="notChecked">
            Длина пароля должна быть от 4 до 12 символов
        </div>
        <div class="field">
            <input v-if="passwordIsVisible"
            v-model="newUser.passwordTwice"
            type="text"
            placeholder="Повторите пароль" />
            <input v-else v-model="newUser.passwordTwice"
            type="password"
            placeholder="Повторите пароль" />
            <div v-show="!equalPasswords" class="notChecked">
                Пароли не совпадают
            </div>
        </div>
        <div class="field">
            <input v-model.trim="newUser.name" placeholder="Ваше имя" />
        </div>
        <div class="field">
            <input v-model.trim="newUser.surname" placeholder="Ваша фамилия" />
        </div>
        <div class="field">
            <input v-model.trim="newUser.email"
            @input="checkMail(newUser.email)"
            placeholder="Электронная почта" />
            <div v-show="wrongMail" class="notChecked">
                Укажите корректный электронный адрес
            </div>
        </div>
        <div class="field">
            <input v-model.number="newUser.age"
            @input="checkAge()"
            type="number"
            placeholder="Полных лет" />
            <div v-show="wrongAge" class="notChecked">
                Укажите корректный возраст
            </div>
        </div>
        <div class="rules">
            <input type="checkbox" id="acceptRules" v-model="rules">
            <label for="acceptRules">
                Принимаю условия пользовательского соглашения
            </label>
            <br />
        </div>
        <input type="submit" value="Зарегистрироваться" :disabled="!canReg" />
    </form>
</div>
</template>

<script>
import {
    db
} from '../main.js'

export default {
    name: 'Reg',
    metaInfo: {
        title: 'Регистрация'
    },
    data() {
        return {
            newUser: {
                login: "",
                password: "",
                passwordTwice: "",
                name: "",
                surname: "",
                age: "",
                email: "",
                registered: "",
            },
            passwordIsVisible: false,
            rules: false,
            wrongAge: false,
            loginBusy: false,
            wrongLoginSymbols: false,
            wrongLoginLength: false,
            wrongPasswordSymbols: false,
            wrongPasswordLength: false,
            capsLock: "", //может быть когда нибудь хватит мозгов это сделать
            wrongMail: false,
        }
    },
    methods: {
        passwordShown() {
            this.passwordIsVisible = !this.passwordIsVisible
        },
        checkAge() {
            this.wrongAge = this.newUser.age <= 9 || this.newUser.age > 110 || !this.newUser.age
        },
        checkLoginFree(log) {
            let arr = this.$store.getters.users.filter((item) => item.usr.login.toLowerCase() === log.toLowerCase());
            this.loginBusy = arr.length > 0 ? true : false
        },
        checkLoginCorrectSymbols(log) {
            this.wrongLoginSymbols = !/^[a-zA-Z1-9]+$/.test(log)
        },
        checkLoginLength(log) {
            this.wrongLoginLength = log.length < 4 || log.length > 12
        },
        checkMail(mail) {
            if (mail.split("@").length === 2 &&
                mail.split("@")[1] &&
                mail.split("@")[1].split(".").length === 2 &&
                mail.split("@")[1].split(".")[1] &&
                /^[a-zA-Z]+$/.test(mail.split("@")[1].split(".")[1]) &&
                /^[a-zA-Z1-9]+$/.test(mail.split("@")[0]) &&
                /^[a-zA-Z1-9]+$/.test(mail.split("@")[1].split(".")[0])
            ) {
                this.wrongMail = false
            } else {
                this.wrongMail = true
            }
        },
        checkPasswordCorrectSymbols(pas) {
            this.wrongPasswordSymbols = !/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(pas)
        },
        checkPasswordLength(pas) {
            this.wrongPasswordLength = pas.length < 4 || pas.length > 12
        },
        addNewUser(usr) {
            usr.registered = new Date()
            db.collection('users').add({
                usr
            });
            this.newUser = "";
            this.$store.commit('SET_SESSION', usr.login)
            this.$router.push({
                path: `/user/${usr.login}`,
                params: this.$store.getters.auth
            })
        },
    },
    computed: {
        equalPasswords() {
            return this.newUser.password === this.newUser.passwordTwice || !this.newUser.passwordTwice
        },
        canReg() {
            return this.rules && !this.wrongAge && !this.loginBusy && !this.wrongLoginSymbols && !this.wrongLoginLength &&
                !this.wrongPasswordSymbols && !this.wrongPasswordLength && !this.wrongMail &&
                this.newUser.login && this.newUser.password && this.newUser.name &&
                this.newUser.surname && this.newUser.age && this.newUser.email
        }
    },
    firestore() {
        return {
            usrs: db.collection('users'),
        }
    },
    created() {
        this.$store.commit('SET_USERS', this.usrs);
    },
}
</script>

<style scoped>
.box {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}

.back {
    font-family: Geneva, Arial, Helvetica, sans-serif;
    font-size: 12px;
    padding: 5px;
    color: darkslategray;
    font-weight: 600;
    letter-spacing: .3px;
    width: fit-content;
}

.welcomeMessage {
    display: flex;
    flex-direction: column;
    height: 25%;
    width: 100%;
    justify-content: flex-start;
    text-align: center;
}

.welcomeMessage .logo {
    font-family: Brush Script MT, Brush Script Std, cursive;
    font-weight: 600;
    font-size: 28px;

}

.welcomeMessage .txt {
    margin-top: 5px;
    font-family: Geneva, Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: gray;
}

form {
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

form .field {
    width: 100%;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

form .field input {
    width: 80%;
    border-style: none none groove none;
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

form .rules {
    display: flex;
    flex-direction: row;
    text-align: start;
    width: 80%;
    padding-top: 20px;
    font-size: 16px;
}

form .rules label {
    font-family: Geneva, Arial, Helvetica, sans-serif;
}

input[disabled] {
    background: cadetblue !important;
    color: lightgray !important;
}

input[type="submit"] {
    padding: 5px;
    margin-top: 10px;
    background: royalblue;
    font-size: 16px;
    border: none;
    color: white;
    border-radius: 5px;
    font-weight: 500;
    width: 80%;
}

.notChecked {
    padding-top: 5px;
    color: red;
    text-align: center;
    font-size: 14px;
    width: 80%;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
