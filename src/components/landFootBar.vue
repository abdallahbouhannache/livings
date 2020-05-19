/* the footer of the landing wrapper */
<template>
  <div class="hero is-primary">
    <div class="lContainer" v>
      <h1 class="title" v-if="titleh">{{titlef}}</h1>
      <div class="counters">
        <Counter />
        <!-- with number -->
        <Counter />
        <!-- with percentage -->
      </div>
      <button class="button is-info is-focused voirBtn">
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
    Counter
  },
  props: {
    titlef: {
      type: String,
      default: "counselling & psychotherapy level 3 diploma course"
    },
    percentage: {
      type: Number,
      default: 55
    }
  },
  data() {
    return {
      numbersaves: 44
    };
  }
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