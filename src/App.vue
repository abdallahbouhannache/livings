<template>
  <div id="app" class="appMain">
    <Navigation />
    <router-view />
    <!-- <transition>
    </transition>-->
  </div>
</template>

<script>
// const { mapGetters } = createNamespacedHelpers("");
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: { Navigation },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style lang="css">
#app {
  display: block;
  min-height: 150vh;
}
.appMain {
}
</style>
