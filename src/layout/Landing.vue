<template>
  <div class="landingwrp">
    <!-- header tile  -->
    <midHeader></midHeader>

    <!-- the main layout -->
    <div class="tile is-ancestor">
      <!-- the left small division -->

      <LeftLand></LeftLand>

      <!-- the right big division -->
      <RLand picBgUrl="a.jpg"></RLand>
    </div>
  </div>
</template>

<script>
import RLand from "../components/RLand";
import LeftLand from "../components/LeftLand";
import midHeader from "../components/midHeader";
export default {
  name: "Landing",
  components: {
    RLand,
    LeftLand,
    midHeader
  }
};
</script>

<style scoped>
.landingwrp {
  max-width: 80vw;
  position: relative;
}
</style>
