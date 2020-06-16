<template>
  <figure @click="getOffer()" :class="['image is-64x64', clss]">
    <img class="is-rounded stickPic" :src="lSticker" />
    <span class="stInfos">
      <p>{{price}}</p>
      <p>{{discount}}</p>
    </span>
  </figure>

  <!-- require(`../assets/img/${sticker}`) -->
</template>

<script>
export default {
  name: "StickerInfo",
  props: {
    lSticker: { type: String, default: require("../assets/img/sticker.jpg") },
    clss: { type: String, default: "sticker_RL" },
    stickerData: {
      type: Object,
      default() {
        return {
          price: 0,
          discount: 0
        };
      }
    }
  },
  data: () => {
    return {
      stickerPicUrl: "../assets/img/sticker.jpg",
      price: 0,
      discount: 0
    };
  },
  methods: {
    getOffer: () => {
      console.log("clicked");
    }
  },
  created() {},
  mounted() {},

  computed: {
    console: () => console,
    window: () => window

    // updateData: () => {
    //   this.price = this.stickerData.price;
    //   this.discount = this.stickerData.discount;
    // }
  },
  watch: {
    stickerData: function() {
      this.discount = this.stickerData["discount"];
      this.price = this.stickerData["price"];
    },
    lSticker: function() {
      this.stickerPicUrl = this.lSticker;
    }
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
  position: relative;
  top: calc(100% - 200px);
  z-index: 478;
  left: 74%;
}
.stickPic {
  z-index: -10;
}
.stickinfo {
  color: #fff;
  z-index: 5555;
  /* border:1px solid red; */
}
.stInfos > * {
  color: #fff;
}
</style>