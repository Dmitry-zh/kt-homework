<template>
<div>
 <profileTop/>
 <bottom/>
 </div>
</template>

<script>
import bottom from '@/components/Bottom.vue'
import profileTop from '@/components/profileTop.vue'
export default {
  data() {
      return {

      }
  },
  components: {bottom, profileTop}  
}
</script>