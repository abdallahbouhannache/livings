/* THE RIGHT LANDING VIEW COMPONENT */

<template>
  <div class="RLandwrapper">
    <section class="tile is-parent is-vertical">
      <productR
        v-for="(prod,index) in listOfPrds"
        :key="index"
        :hdTitle="prod.hdTitle"
        :subhdT="prod.subhdT"
        :picBgUrl="prod.RpicUrl"
        :videoUrl="prod.videoUrl"
      ></productR>
    </section>
  </div>
</template>

<script>
import productR from "./productR";

export default {
  name: "Rland",
  components: {
    productR
  },
  props: {
    /* the RLand Props  */

    /* the productArray props */
    prodList: {
      type: Array,
      default: () => [
        {
          LhdTitle: "",
          RpicUrl: "",
          picBgUrl: "blank.jpg",
          id: 0,
          downloads: 0,
          subhdT: "",
          videoUrl: "",
          stickerData: {
            price: 1,
            discount: 0
          }
        }
      ]
    }
  },
  data() {
    return {
      // picBg: require("../assets/img/a.jpg"),
      // sticker: "../assets/img/sticker.jpg",
      // stickerData: {
      //   price: 200.02,
      //   discount: 51
      // },
      // fBg: "",
      // listOfPrds1: 5,
      // productData: {
      //   hdTitle: {
      //     type: String,
      //     default: "counselling & psychotherapy level 3 diploma course"
      //   },
      //   subhdT: {
      //     type: String,
      //     default:
      //       "£14 instead of £318 for a counselling and psychotherapy diploma level 3 online course from Alpha Academy - save 96%"
      //   },
      //   picBgUrl: String
      // },
      /* localArray of products */
      listOfPrds: [
        {
          LhdTitle: "",
          RpicUrl: "",
          picBgUrl: "blank.jpg",
          id: 0,
          downloads: 0,
          subhdT: "",
          videoUrl: "",
          stickerData: {
            price: 1,
            discount: 0
          }
        }
      ]
    };
  },
  methods: {
    init() {
      /* mapping props to localdata */
      // let tableOfProducts = Object.assign({}, this.prodList);
      this.listOfPrds = [...this.prodList.slice(1)];
    },
    checkProduct() {
      console.log("Rland");
    }
  },
  computed: {
    console: () => console,
    window: () => window
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.init();
    }, 500);
  },
  watch: {
    prodList: function() {
      this.init();
    }
  }
};
</script>

<style scoped>
.RLandwrapper {
  /* border: 1px solid red; */
}
.Rprd {
  /* border: 1px solid red; */
}
</style>
