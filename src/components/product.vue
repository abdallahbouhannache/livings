<template>
  <div class="tile is-child">
    <header class="card-header">
      <p class="card-header-title">{{hdTitle}}</p>
      <!-- <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
      </a>-->
    </header>
    <!-- <figure class="image sticker_price is-64x64">
      <img class="is-rounded" :src="sticker" />
    </figure>-->

    <StickerInfo clss="sticker_price" sticker="sticker.jpg" />

    <figure class="image is-4by3">
      <img :src="picUrl" alt="Placeholder image" />
    </figure>

    <!-- <footer class="card-footer">
      <a href="#" class="card-footer-item">Save</a>
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>-->
    <landFootBar />
  </div>
</template>

<script>
import landFootBar from "../components/landFootBar";
import StickerInfo from "../components/StickerInfo";

export default {
  name: "product",
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
      sticker: require("../assets/img/sticker.jpg")
    };
  }
};
</script>

<style scoped>
</style>