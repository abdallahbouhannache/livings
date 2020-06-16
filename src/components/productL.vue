<template>
  <div class="tile is-child">
    <header class="card-header">
      <p class="card-header-title">{{ LhdTitle }} {{LsubhdT}}</p>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>

    <!-- <figure class="image sticker_price is-64x64">
      <img class="is-rounded" :src="sticker" />
    </figure>-->

    <StickerInfo clss="sticker_price" :lSticker="Lsticker" :stickerData="LstickerData" />

    <figure class="image is-4by3" v-on:click="printme">
      <img :src="this.getPicUrl()" alt="Placeholder image" />
    </figure>

    <!-- <footer class="card-footer">
      <a href="#" class="card-footer-item">Save</a>
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>-->

    <landFootBar
      :titleC="LtitleC"
      :titleF="LtitleF"
      :percentage="Lpercentage"
      :counterData="LcounterData"
      @check-product="checkProduct"
    />
  </div>
</template>

<script>
import landFootBar from "../components/landFootBar";
import StickerInfo from "../components/StickerInfo";
// import { mapState } from "vuex";

export default {
  name: "productL",
  components: {
    landFootBar,
    StickerInfo
  },
  props: {
    hdTitle: {
      type: String,
      default: "counselling & psychotherapy level 3 diploma course"
    },
    subhdT: {
      type: String,
      default: ""
    },
    picUrl: {
      type: String,
      default: "assets/img/blank"
    },
    RpicUrl: {
      type: String,
      default: ""
    },
    stickerData: {
      type: Object,
      default: () => ({
        price: 100.02,
        discount: 58
      })
    },
    sticker: {
      type: String,
      default:
        "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg"
    },
    titleC: { type: Boolean, default: false },
    titleF: {
      type: String,
      default: "some"
    },
    percentage: { type: Boolean, default: false },
    counterData: {
      type: Object,
      default: () => ({
        identifier: "buys",
        value: 33
      })
    }
  },
  data() {
    return {
      LhdTitle: "Ltitle",
      LsubhdT: "Lfield",
      LpicUrl: require("../assets/img/a.jpg"),
      LRpicUrl: "",
      LstickerData: {
        price: 111.02,
        discount: 59
      },
      Lsticker: "",
      /* landfootbar */
      LtitleC: "",
      LtitleF: "",
      Lpercentage: false,
      LcounterData: {
        identifier: "",
        value: 0
      }
    };
  },
  mounted() {
    this.init();
  },
  created() {
    // console.log("fefezfzef")
    // this.sticker = require("../assets/img/sticker.jpg");
  },
  computed: {},
  methods: {
    getPicUrl() {
      return this.LRpicUrl.length == 0 ? this.LpicUrl : this.LRpicUrl;
    },
    printme() {
      // console.log(this.productS);
    },
    checkProduct() {
      // console.log("product");
    },
    /* init to initialize the Localdata with props */
    init() {
      setTimeout(() => {
        this.LhdTitle = this.hdTitle;
        this.LsubhdT = this.subhdT.split(",")[0];
        this.LstickerData = this.stickerData;
        // this.Lsticker = require(`../${this.sticker}.jpg`);
        this.Lsticker = this.sticker;
        this.LpicUrl = require(`../${this.picUrl}.jpg`);
        this.LRpicUrl = this.RpicUrl;
        /* landfootBar */
        this.LtitleC = this.titleC;
        this.LtitleF = this.titleF;
        this.Lpercentage = this.percentage;
        this.LcounterData = this.counterData;
      }, 4000);
    }
  }
};
</script>
 
<style scoped></style>
