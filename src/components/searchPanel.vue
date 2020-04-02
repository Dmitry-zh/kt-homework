<template>
    <div class="panel">
        <form @submit.prevent="search" @changes="changeText(text)">
          <button class="loupe" type="submit"></button>
          <input type="text" v-model="searchText"/>
        </form>
        <img :src="cutawayImg">
        </div>
</template>

<script>
export default {
  props: ['searchText'],
  name: 'searchPanel',
  methods: {
      search() {
        console.log(`Ищем ${this.searchText}`); //будущая реализация
      },
      changeText(text) {
        console.log(`Ищем ${text}`);
        this.searchText=text;
      }
  },
  data() {
      return {
          loupeImg: './static/ico/loupe.svg',
          cutawayImg: './static/ico/cutaway.svg',
        }
}
}
</script>

<style scoped>
.panel {
  top:0;
  padding-top: 0.5vh;
  width: 100vw;
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 7vh;
  grid-gap: 1vw 1vh; 
  z-index: 2;
  background-color: white; 
}

.panel input {
  margin-left:5px;
  margin-top: 5px;
}

form {
  display: grid;
  grid-template-columns: 5vh 1fr;
  grid-gap: 1vw 1vh;   
}

.loupe {
  background-color: white;
  outline: none;
  border: none;
  background-size: 4.8vh;
  background-image: url(../../public/static/ico/loupe.svg);
  background-repeat: no-repeat;
  background-position: center;
}

img {
    width: 5vh;
    height: 5vh;
}
</style>