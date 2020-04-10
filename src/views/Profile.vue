<template>
<div class="box">
 <profileTop/>
 <profileFeed/>
 <bottom/>
 </div>
</template>

<script>
import bottom from '@/components/Bottom.vue'
import profileTop from '@/components/profileTop.vue'
import profileFeed from '@/components/profileFeed.vue'
export default {
  data() {
      return {

      }
  },
  components: {bottom, profileTop, profileFeed}  
}
</script>

<style scoped>
.box {
  margin: 0;
  padding: 0;
}
</style>