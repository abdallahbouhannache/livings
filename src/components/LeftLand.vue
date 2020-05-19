
/* the left side wrapper */

<template>
  <div class="LeftproductsWrp">
    <section class="tile is-full box is-parent" v-for="prod in products" :key="prod">
      <!-- the picture component -->

      <product />
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
import product from "../components/product";

export default {
  name: "LeftLand",
  components: {
    product
  },
  data() {
    return {
      messages: ["hello", "vue", "js"],
      products: 6
    };
  },
  props: {}
};
</script>

<style scoped>
.LeftproductsWrp {
  margin-top: 15px;
}
</style>