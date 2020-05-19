<template>
  <div class="counterVw is-primary">
    <span class="identifier">{{ identifier }}</span>
    <i class="icon" v-if="value > 1000">
      <animated-number :value="value" :duration="300" />
    </i>
  </div>
</template>
<script>
import AnimatedNumber from "animated-number-vue";

export default {
  components: {
    AnimatedNumber
  },
  props: {
    identifier: { type: String, default: "bought" },
    value: { type: Number, default: 1040 }
  },
  data() {
    return {
      vals: 1040,
      identis: "bought"
    };
  },
  methods: {
    formatToPrice(value) {
      return `${this.identifier} ${value} `;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courgette&display=swap");
.counterVw {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Courgette", cursive;

  margin-right: 10px;
  /* border: 1px solid red; */
}
.identifier {
  padding: 0;
  position: relative;
  font-size: 1.1em;
  text-shadow: 1px 1px 1px black;
}
i.icon:after {
  font-family: "Font Awesome 5 Free";
  content: "\f541";
  display: inline-block;
  padding-right: 3px;
  vertical-align: middle;
  font-weight: 900;
  padding: 0 5px;
}
</style>
