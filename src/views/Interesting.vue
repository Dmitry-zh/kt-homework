<template>
  <div>
    <searchPanel :searchText="searchText" v-show="panelShown" />
    <interestsPanel
      :interests="interests"
      @pickedInterest="pickInterest"
      :class="{'withPanel':panelShown}"
    />
    <loader v-if="fetching" />
    <div v-else class="gallery" :class="{'withPanel':panelShown}">
      <div v-for="(img, index) of tagedImgs" :key="index">
        <img :src="img.img" />
      </div>
    </div>
    <bottom />
  </div>
</template>

<script>
import bottom from "@/components/Bottom.vue";
import searchPanel from "@/components/searchPanel.vue";
import interestsPanel from "@/components/interestsPanel.vue";
import loader from "@/components/loader.vue";

export default {
  data() {
    return {
      scrollY: 0,
      scrollNow: 0,
      fetching: true,
      panelShown: true,
      interests: [
        "IGTV",
        "Магазин",
        "Фильмы",
        "Музыка",
        "Видеоигры",
        "Еда",
        "Мода",
        "Природа",
        "Наука"
      ],
      searchText: "Тест",
      imgs: []
    };
  },
  computed: {
    tagedImgs() {
      if (this.imgs.map(item => item.tag).includes(this.searchText)) {
        return this.imgs.filter(item => item.tag === this.searchText);
      } else {
        return this.imgs;
      }
    }
  },
  methods: {
    pickInterest(interest) {
      this.searchText = interest;
    }
  },
  created: async function() {
    let response = await fetch("./static/interesting.json");
    this.imgs = await response.json();
    this.imgs = this.imgs.photos;
    this.fetching = false;
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.scrollNow = window.scrollY;
      if (this.scrollNow > this.scrollY) {
        this.panelShown = false;
      } else {
        this.panelShown = true;
      }
      this.scrollY = this.scrollNow;
    });
  },
  metaInfo() {
    return {
      title: "Интересное"
    };
  },
  components: { bottom, searchPanel, interestsPanel, loader }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.gallery {
  margin-top: 7vh;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 33vw;
  grid-gap: 1vw 1vw;
}

.gallery > div > div {
  height: 100%;
}

.gallery > div:nth-child(8n-2) {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery.withPanel {
  margin-top: 13vh;
}
</style>