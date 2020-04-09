<template>
 <div>
  <div class="top">
   <div class="cancel">
    <img src="">
   </div>
   Edit ur profile
   <div class="accept">
    <img src="">
   </div>
  </div>
  <div class="avatar">
   <div class="avatarIco">
    <img src="">
   </div>
   <div class="changeAvatar">
    Change avatar
   </div>
  </div>
  <div class="form">
   <div class="fullName">
    <div class="fieldLabel">
     Firstname
    </div>
    <input class="halfInput">
    <div class="fieldLabel">
     Secondname
    </div>
    <input class="halfInput">
   </div>
   <div class="fieldLabel">
    Login
   </div>
   <input>
   <div class="fieldLabel">
    Website
   </div>
   <input>
   <div class="fieldLabel">
    Bio
   </div>
   <input>
  </div>

</div>
</template>

<script>
export default {

}

</script>

<style scoped>
.top {
    display: grid;
    grid-template-columns: 8vh 1fr 8vh;
}

</style>