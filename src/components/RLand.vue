/* THE RIGHT LANDING VIEW COMPONENT */

<template>
  <div class="RLandwrapper">
    <section class="tile is-parent is-vertical">
      <productR
        v-for="(prod,index) in listOfPrds"
        :key="index"
        :hdTitle="prod.hdTitle"
        :subhdT="prod.subhdT"
        :picBgUrl="prod.picBgUrl"
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
      type: Object,
      default: () => [
        {
          hdTitle: "11counselling & psychotherapy level 3 diploma course",
          subhdT:
            "11£14 instead of £318 for a counselling and psychotherapy diploma level 3 online course from Alpha Academy - save 96%",
          picBgUrl: "blank.jpg"
        },
        {
          hdTitle: "11counselling & psychotherapy level 3 diploma course",
          subhdT:
            "11£14 instead of £318 for a counselling and psychotherapy diploma level 3 online course from Alpha Academy - save 96%",
          picBgUrl: "blank.jpg"
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
      fBg: "",
      listOfPrds1: 5,
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
          hdTitle: "11counselling & psychotherapy level 3 diploma course",
          subhdT:
            "11£14 instead of £318 for a counselling and psychotherapy diploma level 3 online course from Alpha Academy - save 96%",
          picBgUrl: "blank.jpg"
        }
      ]
    };
  },
  methods: {
    init() {
      /* mapping props to localdata */
      let tableOfProducts = Object.assign({}, this.prodList);
      this.listOfPrds = tableOfProducts;
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
