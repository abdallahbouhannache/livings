<template>
  <figure :class="['image is-64x64', clss]">
    <img class="is-rounded" :src="require(`../assets/img/${sticker}`)" />
  </figure>
</template>

<script>
export default {
  props: {
    sticker: { type: String, default: "sticker.jpg" },
    clss: { type: String, default: "sticker_RL" }
  }
};
</script>

<style scoped>
.sticker_RL {
  position: relative;
  top: 0;
  left: calc(100% - 100px);
  z-index: 8;
}
.sticker_price {
  float: right;
  position: relative;
  top: 45%;
  z-index: 8;
}
</style>