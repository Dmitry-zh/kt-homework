<template>
<div class="gallery">
    <div class="photo" v-for="(photo, index) in userPhotos" :key="index">
        <img :src="photo">
    </div>
</div>
</template>

<script>
export default {
    name: 'profilePhotos',
    computed: {
        userPhotos() {
            return this.$store.getters.userPhotos;
        },
    }
}
</script>

<style scoped>
.gallery {
    margin-top: 1vh;
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 31.5vw;
    grid-gap: 1vw 1vw;
}

.gallery img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
