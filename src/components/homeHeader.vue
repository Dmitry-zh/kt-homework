<template>
  <div class="upper">
    <div class="ico">
      <img :src="cameraIco">
    </div>
    <div class="logo">Instagram 2.0</div>
    <div class="directButton">
      <router-link tag="img" :src="letterIco" class="profile" :to="{name: 'Direct'}"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeHeader",
  data() {
    return {
      cameraIco: "./static/ico/camera.svg",
      letterIco: "./static/ico/letter.svg"
    };
  }
};
</script>

<style scoped>
.upper {
  left: 0;
  top: 0;
  position: fixed;
  display: grid;
  width: 100vw;
  grid-template-columns: 6vh 1fr 6vh;
  height: 6vh;
  background-color: #fdfdf5;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.5);
  z-index: 3;
}

.upper .logo {
  font-family: Brush Script MT, Brush Script Std, cursive;
  padding-left: 5vw;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
}

.upper > div {
  align-self: center;
  text-align: center;
}

.upper img {
  width: 75%;
}
</style>