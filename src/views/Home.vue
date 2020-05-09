<template>
  <div id="home" class="home mainwrapper">
    <Landing></Landing>
  </div>
</template>

<script>
import Landing from "../layout/Landing";
export default {
  name: "Home",
  components: {
    Landing
  }
};
</script>

<style lang="css">
.mainwrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.home {
}
</style>
