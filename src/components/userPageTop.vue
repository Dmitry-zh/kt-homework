<template>
<div class="box">
    <div class="info" :class="{'mgnZero': showExit }">
        <div class="avatar">
            <div class="avatarImg">
                <img :src="user.info.avatarSrc">
            </div>
        </div>
        <div class="publications">
            <div class="count">{{user.publications}}</div>Publications
        </div>
        <div class="followers">
            <div class="count">{{user.followers}}</div>Followers
        </div>
        <div class="following">
            <div class="count">{{user.following}}</div>Following
        </div>
    </div>
    <div class="userName">{{user.info.name}} {{user.info.surname}}</div>
    <div class="about"> {{user.info.bio}}
    </div>
    <div class="about"> {{user.info.website}}
    </div>
</div>
</template>

<script>
export default {
    name: 'userPageTop',
    data() {
        return {
            showExit: false,
            user: ""
        }

    },
    computed: {

    },
    methods: {

    },
    props: ['user']
}
</script>

<style scoped>
.box {
    margin: 0;
    padding: 0;
}

.info {
    grid-area: info;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    grid-gap: 1vw;
    padding-top: 6vh;
    height: 15vh;
    grid-template-areas: "avatar publications followers  following";
}

.info.mgnZero {
    padding-top: 0;
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
    width: 100%;
    max-height: 15vh;
    object-fit: cover;
    border-radius: 50%;
}

.info .avatar .plus {
    right: 0;
    bottom: 0;
    width: 20%;
    position: absolute;
}

.info .avatar .plus img {
    border-radius: 50%;
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
    text-decoration: none;
    color: black;
    font-weight: 600;
    align-self: center;
}

.edit div {
    margin-left: auto;
    grid-area: edit;
    margin-top: 1vh;
    height: 3vh;
    width: 95vw;
    text-align: center;
    border: 1px solid lightgrey;
    background-color: #FDFDF5;
    padding-top: 1vh;
}
</style>
