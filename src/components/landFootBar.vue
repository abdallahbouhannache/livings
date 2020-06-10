/* the footer of the landing wrapper */
<template>
  <div class="hero is-primary">
    <div class="lContainer" v>
      <h1 class="title" v-if="titleC">{{ titleF }}</h1>
      <div class="counters">
        <Counter :cData="counterData" />
        <!-- with number -->
        <Counter :cData="counterData" />
        <!-- with percentage -->
      </div>
      <button
        class="button is-info is-focused voirBtn"
        @click="$emit('check-product')"
      >
        <span class>Voir</span>
        <span class="icon is-small">
          <i class="fas fa-exclamation"></i>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import Counter from "../components/Counter";
export default {
  name: "landFootBar",
  components: {
    Counter,
  },
  props: {
    titleC: {
      type: Boolean,
      default: false,
    },
    titleF: {
      type: String,
      default: "empty",
    },
    percentage: {
      type: Number,
      default: 55,
    },
  },
  data() {
    return {
      numbersaves: 44,
      counterData: {
        identifier: "default",
        value: 1040,
      },
    };
  },
  methods: {
    /* open post/page by navigation using vue router */
    openPost(e) {
      console.log(e);
    },
  },
};
</script>

<style scoped>
.lContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.lContainer > .title {
  margin: 15px;
}
.counters {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 0.6;
  padding: 5px 0;
}
.voirBtn {
  margin-right: 5px;
}
</style>
