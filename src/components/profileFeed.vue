<template>
<div class="box">
    <div class="feedButtons">
        <div class="userFeed" :class="{'faded' : taged}" tabindex="1" @focus="taged=false">
        </div>
        <div class="tagged" :class="{'faded' : taged}" tabindex="2" @focus="taged=true">
        </div>
    </div>
    <div class="underline" :class="{'tagged' : taged}">
    </div>
    <template v-if="taged">
    <transition name="slide-left" mode="out-in">
    <component :is="currentView">
    </component>
    </transition>
    </template>
    <template v-else>
    <transition name="slide-right" mode="out-in">
    <component :is="currentView">
    </component>
    </transition>
    </template>
</div>
</template>

<script>
import profilePhotos from '@/components/profilePhotos.vue'
import profileTaggedPhotos from '@/components/profileTaggedPhotos.vue'
export default {
    name: 'profileFeed',
    data() {
        return {
            taged: false,
        }
    },
    computed: {
        userPhotos() {
            return this.$store.getters.userPhotos;
        },
        tagged() {
            return this.$store.getters.taggedPhotos;
        },
        currentView() {
            return this.taged?profileTaggedPhotos:profilePhotos
        },
    },
    components: {
        profilePhotos,
        profileTaggedPhotos
    },
}
</script>

<style scoped>
.feedButtons {
    margin-top: 1vh;
    width: 100%;
    grid-area: switch;
    padding-top: 0.5vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 6.5vh;
    background-color: #FDFDF5;
    text-align: center;
}

.feedButtons>.userFeed {
    background-image: url(../../public/static/ico/feedbtnUser.svg);
    background-repeat: no-repeat;
    background-position: center;
    height: 80%;
    width: 100%;
    opacity: 1;
}

.feedButtons>.userFeed.faded {
    opacity: 0.5;
}

.feedButtons>.tagged {
    background-image: url(../../public/static/ico/feedbtnTaged.svg);
    background-repeat: no-repeat;
    background-position: center;
    height: 80%;
    width: 100%;
    opacity: 0.5;
}

.feedButtons>.tagged.faded {
    opacity: 1;
}

.feedButtons div:focus {
    outline: none;
}

.underline {
    margin-top: 1vh;
    width: 50%;
    height: 0.2vh;
    background-color: black;
    margin-left: 0;
    transition: margin 0.2s;
}

.underline.tagged {
    margin-left: 50%;
}


.slide-right-enter-active, .slide-right-leave-active{
  transition: all .15s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-right-leave-to{
  transform: translateX(-100vw);
  opacity: 0;
}
.slide-right-enter{
  transform: translateX(-100vw);
  opacity: 0;
}

.slide-left-enter-active, .slide-left-leave-active{
  transition: all .15s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-left-leave-to{
  transform: translateX(100vw);
  opacity: 0;
}
.slide-left-enter{
  transform: translateX(100vw);
  opacity: 0;
}
</style>
