<template>
  <div class="landingwrp">
    <!-- header tile  -->
    <midHeader></midHeader>

    <!-- the main layout -->
    <div class="tile is-ancestor">
      <!-- the left small division -->

      <LeftLand :products="this.productArry"></LeftLand>

      <!-- the right big division -->
      <RLand :prodList="this.VideoProdsArry" picBgUrl="a.jpg"></RLand>
    </div>
  </div>
</template>

<script>
var API_KEY = "17009623-9b2c574ad3f2a00a8257d86a5";

var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + "&safesearch";
// +encodeURIComponent("");

var VIDEOURL =
  "https://pixabay.com/api//videos/?key=" + API_KEY + "&q=" + "&safesearch";
// encodeURIComponent("red roses");

import { mapGetters, mapActions } from "vuex";
import RLand from "../components/RLand";
import LeftLand from "../components/LeftLand";
import midHeader from "../components/midHeader";
export default {
  name: "Landing",
  components: {
    RLand,
    LeftLand,
    midHeader
  },
  methods: {
    ...mapActions({
      fetchProducts: "Pixabay/fetchProducts",
      fetchVideoProduct: "Pixabay/fetchVideoProduct"
    })
  },
  computed: {
    ...mapGetters({
      productArry: "Pixabay/getProds",
      VideoProdsArry: "Pixabay/getVideoProds"
    })
  },
  created() {
    this.fetchProducts(URL);
    this.fetchVideoProduct(VIDEOURL);
    setTimeout(() => {
      // console.clear();
      // console.log(this.productArry[1]);
    }, 2000);
  }
};
</script>

<style scoped>
.landingwrp {
  max-width: 80vw;
  position: relative;
}
</style>
