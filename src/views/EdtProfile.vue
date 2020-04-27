<template>
<div>
    <div class="top">
        <router-link tag="div" class="cancel" :to="{name: 'Profile'}"></router-link>
        <div class="topText">
            Edit ur profile
        </div>
        <acceptLoader v-if="showLoader" />
        <div v-else class="accept" @click="confirm()">
        </div>
    </div>
    <div class="avatar">
        <div class="avatarIco">
            <img :src="this.$store.getters.auth.info.avatarSrc">
        </div>
        <div class="changeAvatar">
            <input type="file" accept="image/*" @change="previewImage">
            <button @click="onUpload()">Upload</button>
        </div>
    </div>
    <div class="form">
        <div class="fullName">
            <div>
                <div class="fieldLabel">
                    Firstname
                </div>
                <input class="halfInput" v-model="info.name">
            </div>

            <div>
                <div class="fieldLabel">
                    Surname
                </div>
                <input class="halfInput" v-model="info.surname">
            </div>
        </div>
        <div class="container">
            <div class="fieldLabel">
                Website
            </div>
            <input v-model="info.website">
        </div>
        <div class="container">
            <div class="fieldLabel">
                Bio
            </div>
            <input v-model="info.bio">
        </div>
    </div>

</div>
</template>

<script>
import acceptLoader from "@/components/acceptLoader.vue";
import {
    db
} from '../main.js'
import firebase from 'firebase'

export default {
    data() {
        return {
            showLoader: false,
            user: '',
            imageData: null,
        }
    },
    firestore() {
        return {
            user: db
                .collection('users')
                .where('usr.login', '==', this.$store.getters.auth.login),
        }
    },
    computed: {
        info() {
            return this.$store.getters.auth.info
        }
    },
    methods: {
        confirm() {
            this.showLoader = true;
            this.$store.dispatch('changeUserInfo', this.info)
            let ne = {
                usr: this.$store.getters.auth
            }
            db.collection('users')
                .doc(this.user[0].id)
                .set(ne)
                .then(() => {
                    console.log('user updated!')
                })
            setTimeout(() => {
                this.showLoader = false;
                this.$router.push({
                    name: 'Profile'
                });
            }, 500);
        },
        previewImage(event) {
            this.imageData = event.target.files[0];
        },
        onUpload() {
            if (!this.imageData) return
            const storageRef = firebase.storage().ref(`${this.$store.getters.auth.login}/${this.imageData.name}`).put(this.imageData);
            storageRef.on(`state_changed`, snapshot => {
                    this.showLoader = true;
                }, error => {
                    console.log(error.message)
                },
                () => {
                    this.showLoader = false;
                    storageRef.snapshot.ref.getDownloadURL().then((url) => {
                        this.$store.dispatch('changeAvatar', url)
                    });
                }
            );
        }
    },
    components: {
        acceptLoader
    }
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
