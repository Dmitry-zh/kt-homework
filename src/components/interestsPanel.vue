<template>
  <div class="interests">
    <div
      v-for="interest of interests"
      :key="interest"
      class="interest"
      @click="pick(interest)"
    >{{interest}}</div>
  </div>
</template>

<script>
export default {
  name: "interestsPanel",
  computed: {
    interests() {
      return this.$store.getters.interests
    }
  },
  methods: {
    pick(interest) {
      this.$store.dispatch('delImgs');
      this.$emit("pickedInterest", interest);
        }
     
    }
  };
</script>

<style scoped>
.interests.withPanel {
  top: 5vh;
  margin-top: 0.5vh;
}

.interests {
  overflow-x: auto;
  width: 100vw;
  top: 0;
  position: fixed;
  display: flex;
  flex-direction: row;
  padding-top: 0.3vh;
  justify-content: flex-start;
  align-items: center;
  height: 7vh;
  background-color: white;
  z-index: 2;
}

.interest {
  margin: 0 0.1rem 0 0.2rem;
  padding: 1vh 0.3vh 1vh 0.3vh;
  letter-spacing: 0.05rem;
  border: 1px solid #d3d3d3;
  background-color: #fff;
  border-radius: 5px;
}
</style>