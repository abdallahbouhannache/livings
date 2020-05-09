<template>
  <div id="app" class="appMain">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: "App",
  components: { Navigation }
};
</script>

<style lang="css">
#app {
  display: block;
}
.appMain {
}
</style>
