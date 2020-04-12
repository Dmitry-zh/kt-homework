<template>
<div class="gallery">
    <div class="photo" v-for="(tag, index) in tagged" :key="index">
        <img :src="tag.src">
    </div>
</div>
</template>

<script>
export default {
    name: 'profileTaggedPhotos',
    computed: {
        tagged() {
            return this.$store.getters.taggedPhotos;
        },
    }
}
</script>

<style scoped>
.gallery {
    margin-top: 1vh;
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 33vw;
    grid-gap: 1vw 1vw;
}

.gallery img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>