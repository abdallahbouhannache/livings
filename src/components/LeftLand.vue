/* the left side wrapper */

<template>
  <div class="LeftproductsWrp">
    <section class="tile is-vertical is-full is-parent">
      <!-- the picture component -->

      <ProductL
        class="box"
        v-for="(prod,index) in Lproducts"
        :key="index"
        :hdTitle="prod.LhdTitle"
        :subhdT="prod.subhdT"
        :picUrl="prod.LpicBgUrl"
        :RpicUrl="prod.RpicUrl"
        :sticker="prod.Lsticker"
        :stickerData="prod.stickerData"
      ></ProductL>
      <!-- the picture component END -->
      <!-- the picture component -->

      <!-- <div class="tile is-child box">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
      </figure>
      <p class="title">one</p>
      </div>-->
      <!-- the picture component END -->
    </section>
  </div>
</template>

<script>
import ProductL from "../components/productL";

export default {
  name: "LeftLand",
  components: {
    ProductL
  },
  data() {
    return {
      messages: ["hello", "vue", "js"],
      Lproducts: [
        {
          LhdTitle: "lfLocal 11counselling ",
          subhdT: "lfLocal  online course from Alpha Academy - save 96%",
          LpicBgUrl: "assets/img/blank",
          Lsticker: "assets/img/blank",
          RpicUrl: "",
          stickerData: {
            price: 200.02,
            discount: 57
          }
        }
      ]
    };
  },
  props: {
    products: {
      type: Array,
      default: () => [
        {
          LhdTitle: "",
          subhdT: "",
          LpicBgUrl: "assets/img/f",
          RpicUrl: "",
          Lsticker: "assets/img/f",
          stickerData: {
            price: 300.02,
            discount: 56
          }
        },
        {
          LhdTitle: "",
          subhdT: "",
          LpicBgUrl: "assets/img/f",
          RpicUrl: "",
          Lsticker: "assets/img/f",
          stickerData: {
            price: 300.02,
            discount: 56
          }
        }
      ]
    }
  },
  mounted() {
    // this.Lproducts = Array.from([...this.products]);
    this.Lproducts = this.products;
    // console.log(this.Lproducts);
  }
};
</script>

<style scoped>
.LeftproductsWrp {
  margin-top: 15px;
}
</style>
