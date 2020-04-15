<template>
  <div>
    <searchPanel :searchText="searchText" v-show="panelShown" />
    <interestsPanel
      @pickedInterest="pickInterest"
      :class="{'withPanel':panelShown}"
    />
    <loader v-if="fetching" />
    <div v-else class="gallery" :class="{'withPanel':panelShown}">
      <div v-for="(img, index) of imgs ":key="index">
        <img :src="img" />
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
import axios from "axios";

export default {
  data() {
    return {
      scrollY: 0,
      scrollNow: 0,
      fetching: true,
      panelShown: true,
      count: 25,
      selectedInt: "",
      offset: 0,
      searchText: "Тест",
      pesHeaders: {
    'Ocp-Apim-Subscription-Key' : '2037cc9985be4292a3aae7f12cafe423',
    },
    };
  },
  computed: {
    imgs() {
      return this.$store.getters.imgs;
    }
  },
  methods: {
    pickInterest(interest) {
      this.fetching = true;
      this.selectedInt = interest;
      axios.get(`https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=`
      +encodeURIComponent(interest)
      +"&count="+this.count
      +"&offset="+this.offset, {headers : this.pesHeaders})
      .then((response) => {
        let payload = response.data.value.map((obj)=> {
          this.imgs.push(obj.contentUrl);
        });
        this.$store.dispatch('newImgs', payload)
        this.fetching = false;
        window.scrollTo(0, document.body.clientHeight - document.documentElement.clientHeight);
        panelShown = true;
      });
    }
  },
  created() {
    window.addEventListener("scroll", () => {
      this.scrollNow = window.scrollY;
      if (this.scrollNow > this.scrollY) {
        this.panelShown = false;
      } else {
        this.panelShown = true;
      }
      if (window.scrollY >= document.body.clientHeight - document.documentElement.clientHeight) {
        this.offset+=25;
        this.pickInterest(this.selectedInt);
      }
      this.scrollY = this.scrollNow;
    });
  },
  mounted() {
    this.pickInterest('Сиськи') // НЕ ЗАБЫТЬ УБРАТЬ В ПРОДАКШЕНЕ
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