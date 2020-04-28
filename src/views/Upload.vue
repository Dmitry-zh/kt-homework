<template>
<div>
    <div>
        Загрузка // будущая реализация
    </div>
    <bottom />
</div>
</template>

<script>
import bottom from '@/components/Bottom.vue'
import firebase from 'firebase'

export default {
    data() {
        return {
            imageData: null,
            picture: null,
            uploadValue: 0,
        }
    },
    metaInfo() {
        return {
            title: "Загрузить фото"
        };
    },
    methods: {
        previewImage(event) {
            this.uploadValue = 0;
            this.picture = null;
            this.imageData = event.target.files[0];
        },
        onUpload() {
            this.picture = null;
            const storageRef = firebase.storage().ref(`${this.$store.getters.auth.login}/${this.imageData.name}`).put(this.imageData);
            storageRef.on(`state_changed`, snapshot => {
                    this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                }, error => {
                    console.log(error.message)
                },
                () => {
                    this.uploadValue = 100;
                    storageRef.snapshot.ref.getDownloadURL().then((url) => {
                        this.picture = url;
                    });
                }
            );
        }
    },
    components: {
        bottom
    }
}
</script>

<style scoped>
img.preview {
    width: 200px;
}
</style>
