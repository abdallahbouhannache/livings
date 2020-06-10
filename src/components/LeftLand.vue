/* the left side wrapper */

<template>
  <div class="LeftproductsWrp">
    <section class="tile is-vertical is-full is-parent">
      <!-- the picture component -->

      <product
        class="box"
        v-for="(prod,index) in Lproducts"
        :key="index"
        :hdTitle="prod.hdTitle"
        :subhdT="prod.subhdT"
        :picBgUrl="prod.picBgUrl"
      ></product>
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
import Product from "../components/product";

export default {
  name: "LeftLand",
  components: {
    Product
  },
  data() {
    return {
      messages: ["hello", "vue", "js"],
      Lproducts: [
        {
          hdTitle: "11counselling ",
          subhdT: "11£14 level 3 online course from Alpha Academy - save 96%",
          picBgUrl: "blank.jpg"
        }
      ]
    };
  },
  props: {
    products: {
      type: Object,
      default: () => [
        {
          hdTitle: "11counselling ",
          subhdT: "11£14 level 3 online course from Alpha Academy - save 96%",
          picBgUrl: "blank.jpg"
        },
        {
          hdTitle: "11counselling & 3 diploma course",
          subhdT: "for a counselling and psychotherapy diploma level ",
          picBgUrl: "blank.jpg"
        }
      ]
    }
  },
  mounted() {
    this.Lproducts = this.products;
  }
};
</script>

<style scoped>
.LeftproductsWrp {
  margin-top: 15px;
}
</style>
