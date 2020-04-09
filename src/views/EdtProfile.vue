<template>
<div>
    <div class="top">
        <router-link tag="div" class="cancel" :to="{name: 'Profile'}"></router-link>
        <div class="topText">
            Edit ur profile
        </div>
        <acceptLoader v-if="showLoader"/>
        <div v-else class="accept" @click="confirm(user.info)" @touchstart="confirm(user.info)" >
        </div>
    </div>
    <div class="avatar">
        <div class="avatarIco">
            <img :src="user.info.avatarSrc">
        </div>
        <div class="changeAvatar">
            Change avatar
        </div>
    </div>
    <div class="form">
        <div class="fullName">
            <div>
                <div class="fieldLabel">
                    Firstname
                </div>
                <input class="halfInput" v-model="user.info.firstname">
            </div>

            <div>
                <div class="fieldLabel">
                    Surname
                </div>
                <input class="halfInput" v-model="user.info.surname">
            </div>
        </div>
        <div class="container">
            <div class="fieldLabel">
                Login
            </div>
            <input v-model="user.info.login">
        </div>
        <div class="container">
            <div class="fieldLabel">
                Website
            </div>
            <input v-model="user.info.website">
        </div>
        <div class="container">
            <div class="fieldLabel">
                Bio
            </div>
            <input v-model="user.info.bio">
        </div>
    </div>

</div>
</template>

<script>
import acceptLoader from "@/components/acceptLoader.vue";

export default {
    data() {
        return {
            showLoader: false,
        }
    },
    computed: {
        user() {
            return this.$store.getters.user;
        }
    },
    methods: {
        confirm(userInformation) {
            this.$store.dispatch('changeUserInfo', userInformation);
            this.showLoader = true;
            setTimeout(() => {
                this.showLoader = false;
                this.$router.push({
                    name: 'Profile'
                });
            }, 2000);
        }
    },
    components: {acceptLoader}
}
</script>

<style scoped>
.top {
    display: grid;
    grid-template-columns: 4vh 1fr 4vh;
    grid-template-rows: 4vh;
}

.top .topText {
    padding-left: 2vh;
    font-weight: 600;
    align-self: center;
}

.cancel {
    background-image: url(../../public/static/ico/cancel.svg);
    background-repeat: no-repeat;
    background-position: center;
    width: 80%;
}

.accept {
    background-image: url(../../public/static/ico/accept.svg);
    background-repeat: no-repeat;
    background-position: center;
    width: 80%;
}

.avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1vh;
}

.avatar .avatarIco {
    width: 10vh;
    height: 10vh;
    margin: 1vh 0 1vh 0;
}

.avatar .avatarIco img {
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.changeAvatar {
    margin-bottom: 2vh;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form .fullName {
    width: 95.5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.form .fullName div {
    display: flex;
    flex-direction: column;
}

.fieldLabel {
    align-self: flex-start;
    color: gray;
    font-size: 12px;
    margin-bottom: 1.5vh;
}

input {
    width: 90vw;
    height: 25px;
    margin-bottom: 2vh;
    border-style: hidden hidden solid hidden;
    border-color: darkgray;
}

.halfInput {
    width: 35vw;
}
</style>
