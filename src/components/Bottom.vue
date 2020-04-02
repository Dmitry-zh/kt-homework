<template>
  <div class="bottom">
    <router-link active-class="active" tag="div" class="home" :to="{name: 'Home'}"></router-link>
    <router-link active-class="active" tag="div" class="interesting" :to="{name: 'Interesting'}"></router-link>
    <router-link active-class="active" tag="div" class="upload" :to="{name: 'Upload'}"></router-link>
    <router-link active-class="active" tag="div" class="activity" :to="{name: 'Activity'}"></router-link>
    <router-link active-class="active" tag="div" class="profile" :to="{name: 'Profile'}"></router-link>
  </div>
</template>


<script>
export default {
  name: "bottom",
  props: []
};
</script>


<style scoped>
.bottom {
  bottom: 0;
  left: 0;
  position: fixed;
  height: 8vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
  background-color: #fdfdf5;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.5);
}

.bottom div {
  width: 6vh;
  height: 6vh;
}

.home {
  background-image: url(../../public/static/ico/home.svg);
}
.home.active {
  background-image: url(../../public/static/ico/active_home.svg);
}

.interesting {
  background-image: url(../../public/static/ico/interesting.svg);
}
.interesting.active {
  background-size: 6vh;
  background-image: url(../../public/static/ico/active_interesting.png);
}

.upload {
  background-image: url(../../public/static/ico/upload.svg);
}
.upload.active {
  background-size: 6vh;
  background-image: url(../../public/static/ico/active_upload.svg);
}

.activity {
  background-image: url(../../public/static/ico/activity.svg);
}
.activity.active {
  background-image: url(../../public/static/ico/active_activity.svg);
}

.profile {
  background-size: 6vh;
  background-image: url(../../public/static/ico/profile.svg);
}
.profile.active {
  background-size: 6vh;
  background-image: url(../../public/static/ico/active_profile.svg);
}
</style>