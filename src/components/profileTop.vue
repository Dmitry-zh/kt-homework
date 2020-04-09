<template>
 <div>
  <div class="top">
   <div class="profileName">
    {{user.login}}
   </div>
   <div class="menu">
    <img src="https://image.flaticon.com/icons/svg/545/545705.svg">
   </div>
 </div>
  <div class="info">
     <div class="avatar">
      <div class="avatarImg">
       <img :src="user.avatarSrc">
       <div class="plus">
        <img src="https://image.flaticon.com/icons/svg/1828/1828817.svg">
       </div>
      </div>
    </div>
    <div class="publications"><div class="count">{{user.publications}}</div>Publications
    </div>
    <div class="followers"><div class="count">{{user.followers}}</div>Followers
    </div>
    <div class="following"><div class="count">{{user.following}}</div>Following
    </div>
    </div>
    <div class="userName">{{user.name()}}</div>
    <div class="about"> {{user.bio}}
    </div>
   <div class="edit">
    <router-link tag="a" :to="{name: 'Edit'}">Edit profile</router-link>
   </div>
   </div>
</template>

<script>
export default {
 name: 'profileTop',
 computed: {
     user() {
         return this.$store.getters.user;
     }
 }   
}
</script>

<style scoped>
.top {
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  width: 100vw;
  padding-top: 1vh;
  background: white;
}

.top .menu {
  margin-right: 2vw;
  width: 4vh;
  height: 4vh;
}

.top .profileName {
  font-weight: 800;
  letter-spacing: 0.08rem;
  margin-left: 2vw;
}

.top .profileName::after {
  content: "▾"
}

.info {
  width: 100vw;
  grid-area: info;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  grid-gap: 1vw;
  padding-top: 6.2vh;
  height: 15vh;
  grid-template-areas: "avatar publications followers  following";
}

.info .avatar {
grid-area: avatar;
position: relative;
}

.info .publications {
grid-area: publications;
}

.info .followers {
grid-area: followers;
}

.info .following {
grid-area: following;
}

.info .avatar .avatarImg img {
  max-height: 15vh;
  max-width: 100%;
  border-radius: 50%;
}

.info .avatar .plus{
  right: 0;
  bottom: 0;
  width: 20%;
  position: absolute;
}

.info .avatar .plus img {
  border-radius:50%;
  border: 2px solid white;
  max-height: 5vh;
  object-fit: cover;
}

.info .count {
  font-weight: 800;
  font-size: 16px;
}

.info>div {
  text-align: center;
  align-self: center;
}

.userName {
  grid-area: username;
  margin-top: 2vh;
  font-weight: 700;
}

.about {
  grid-area: about;
  margin-top: 0.5vh;
  max-width: 40vw;
  max-height: 10vh;
  word-wrap: break-word;
  overflow: hidden;
}

.edit {
  grid-area: edit;
  margin-top: 1vh;
  height: 3vh;
  width: 95vw;
  margin-left:2.5vw;
  text-align: center;
  border: 1px solid lightgrey;
  background-color: #FDFDF5;
  padding-top: 1vh; 
}

.edit a {
text-decoration: none;
color: black;
font-weight: 600;
}
</style>