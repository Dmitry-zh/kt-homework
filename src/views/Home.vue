<template>
  <div>
    <homeHeader/>
    <stories />
    <bottom />
  </div>
</template>

<script>
import bottom from "@/components/Bottom.vue";
import homeHeader from "@/components/homeHeader.vue";
import stories from "@/components/stories.vue";

export default {
  data() {
    return {};
  },
  components: { bottom, homeHeader, stories },
  metaInfo: {
    title: "Инстаграм 2.0"
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
