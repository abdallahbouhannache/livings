<template>
  <div class="tile is-child">
    <header class="card-header">
      <p class="card-header-title">{{ hdTitle }}</p>
      <!-- <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
      </a>-->
    </header>
    <!-- <figure class="image sticker_price is-64x64">
      <img class="is-rounded" :src="sticker" />
    </figure>-->

    <StickerInfo clss="sticker_price" :lSticker="sticker" :stickdata="stickerData" />

    <figure class="image is-4by3" v-on:click="printme">
      <img :src="picUrl" alt="Placeholder image" />
    </figure>

    <!-- <footer class="card-footer">
      <a href="#" class="card-footer-item">Save</a>
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>-->

    <landFootBar @check-product="checkProduct" />
  </div>
</template>

<script>
import landFootBar from "../components/landFootBar";
import StickerInfo from "../components/StickerInfo";
import { mapState } from "vuex";

export default {
  name: "Product",
  components: {
    landFootBar,
    StickerInfo
  },
  props: {
    hdTitle: {
      type: String,
      default: "counselling & psychotherapy level 3 diploma course"
    },
    field: {
      type: String,
      default: "£14 instead of "
    },
    picUrl: {
      type: String,
      default: require("../assets/img/blank.jpg")
    }
  },
  data() {
    return {
      pic: require("../assets/img/a.jpg"),
      stickerData: {
        price: 100.02,
        discount: 10
      },
      sticker: "../assets/img/sticker.jpg",
      productData: {}
    };
  },
  created() {
    // console.log("fefezfzef")
    this.sticker = require("../assets/img/sticker.jpg");
  },
  computed: mapState({
    // arrow functions can make the code very succinct!
    productS: state => state.Product.state,

    // passing the string value 'count' is same as `state => state.count`
    productAlias: "productS",

    // to access local state with `this`, a normal function must be used
    getProductS(state) {
      return state;
    }
  }),

  // console: () => console,
  // window: () => window
  methods: {
    printme() {
      console.log(this.productS);
    },
    checkProduct() {
      console.log("product");
    }
  }
};
</script>

<style scoped></style>
