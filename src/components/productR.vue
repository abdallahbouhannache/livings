<template>
  <div class="tile is-child box Rprd">
    <p class="title is-5">{{ LhdTitle }}</p>
    <p class="subtitle has-text-info" href="#">{{ LsubhdT }}</p>

    <figure class="image is-4by3">
      <!-- <img :src="fBg" alt="Placeholder image" /> -->
      <img :src="require(`../assets/img/${LpicBgUrl}`)" />
      <StickerInfo clss="sticker_RL" :lSticker="Lsticker" :stickdata="LstickerData" />
    </figure>

    <landFootBar :titleC="true" titleF="True" @check-product="checkProduct"></landFootBar>
  </div>
</template>

<script>
import landFootBar from "./landFootBar";
import StickerInfo from "./StickerInfo";
export default {
  name: "productR",
  components: {
    landFootBar,
    StickerInfo
  },
  data() {
    return {
      LhdTitle: "11£14 instead of £318 for a counselling and",
      LsubhdT: "localemptydata",
      // LpicBgUrl: require("../assets/img/a.jpg"),
      LpicBgUrl: "a.jpg",
      Lsticker: require("../assets/img/sticker.jpg"),
      LstickerData: {
        price: 200.02,
        discount: 51
      },
      fBg: "",
      listOfPrds: 5
    };
  },
  props: {
    /* general productR props*/
    hdTitle: {
      type: String,
      default: "counselling & psychotherapy level 3 diploma course"
    },
    subhdT: {
      type: String,
      default:
        "£14 instead of £318 for a counselling and psychotherapy diploma level 3 online course from Alpha Academy - save 96%"
    },
    picBgUrl: { type: String, default: "blank.jpg" },
    // StickerInfo props
    /* clss="sticker_RL" :lSticker="sticker" :stickdata="stickerData" */
    stickerData: {
      type: Object,
      default: () => ({ price: 200.02, discount: 51 })
    },
    sticker: { type: String, default: require("../assets/img/sticker.jpg") }

    // landFootBar props
    /* :titleC="true" titleF="True" */
  },
  methods: {
    init() {
      /* productR props to Localdata */
      this.LhdTitle = this.hdTitle;
      this.LsubhdT = this.subhdT;
      this.LpicBgUrl = this.picBgUrl;

      /* StickerInfo props to data */
      this.Lsticker = this.sticker;
      this.LstickerData = this.stickerData;

      /* LandFootBar props to data */
    },
    checkProduct() {
      console.log("Rland");
    }
  },
  computed: {
    // console: () => console,
    // window: () => window
  },
  created() {
    // this.sticker = require("../assets/img/sticker.jpg");
  },
  mounted() {
    setTimeout(() => {
      this.init();
    }, 5000);
  }
};
</script>

<style scoped>
</style>