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
    <div class="gallery">
        <div v-for="n in 50">
            {{n}}
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'profileFeed',
    data() {
        return {
            taged: false,
        }
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

.gallery {
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 33vw;
  grid-gap: 1vw 1vw;
}

.gallery div {
    font-size: 10vw;
    font-weight: 600;
    text-align: center;
    align-self: center;
    
}
</style>
