/* THE RIGHT LANDING VIEW COMPONENT */

<template>
  <div class="RLandwrapper">
    <section class="tile is-parent is-vertical" v-for="prod in listOfPrds" :key="prod">
      <div class="tile is-child box Rprd">
        <p class="title is-5">{{hdTitle}}</p>
        <p @click="console.log(filename)" class="subtitle has-text-info" href="#">{{subhdT}}</p>

        <figure class="image is-4by3">
          <!-- <img :src="fBg" alt="Placeholder image" /> -->
          <img :src="require(`../assets/img/${picBgUrl}`)" />
          <StickerInfo clss="sticker_RL" sticker="sticker.jpg" />
        </figure>

        <landFootBar titleh="True"></landFootBar>
      </div>
    </section>
  </div>
</template>

<script>
import landFootBar from "../components/landFootBar";
import StickerInfo from "../components/StickerInfo";
export default {
  name: "Rland",
  components: {
    landFootBar,
    StickerInfo
  },
  props: {
    hdTitle: {
      type: String,
      default: "counselling & psychotherapy level 3 diploma course"
    },
    subhdT: {
      type: String,
      default:
        "£14 instead of £318 for a counselling and psychotherapy diploma level 3 online course from Alpha Academy - save 96%"
    },
    picBgUrl: String
  },
  data() {
    return {
      picBg: require("../assets/img/a.jpg"),
      sticker: require("../assets/img/sticker.jpg"),
      fBg: "",
      listOfPrds: 5
    };
  },
  methods: {
    init() {}
  },
  computed: {
    console: () => console,
    window: () => window
  },
  mounted() {
    this.init();
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
