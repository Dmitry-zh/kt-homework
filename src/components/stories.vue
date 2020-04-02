<template>
  <div class="stories">
    <div class="new story">
      <img :src="user.avatar" />
      <div class="add"></div>
      <div>Ваша история</div>
    </div>

    <div v-for="(story, index) in stories" :key="index" class="story">
      <img :src="story.src" />
      <div>{{story.author}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stories",
  data() {
    return {
      stories: [],
      user: {
        avatar: "./static/stories/user.jpg"
      }
    }
  },
  mounted() {
    fetch('./static/stories.json')
    .then(response => response.json())
    .then(json => this.stories=json.stories);
  }
};
</script>

<style scoped>
.stories {
  position: absolute;
  width: 100vw;
  left: 0;
  font-size: 12px;
  text-align: center;
  margin-top: 5.2vh;
  height: 16vh;
  display: flex;
  flex-direction: row;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0.1vh rgba(0, 0, 0, 0.3);
  overflow: auto;
}

.stories .story {
  margin-left: 1vw;
  margin-right: 3vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.stories .story img {
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
  border: 1.5px solid white;
  box-shadow: 0 0 0.3vh rgba(226, 32, 64, 0.9);
}

.stories .story.new {
  position: relative;
}

.stories .story.new .add {
position: absolute;
background-image: url(https://image.flaticon.com/icons/svg/1828/1828817.svg);
background-repeat: no-repeat;
background-size: 100%;
background-position-y:70%;
width:3vh;
height: 3vh;
right:0;
bottom: 1rem;
z-index: 2;
}
</style>