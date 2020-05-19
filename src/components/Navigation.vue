<template>
  <!-- head component of navigation ^ -->
  <div class="navigationPanel">
    <!--search top bar div -->
    <Search />
    <div class="is-divider"></div>

    <!--navbar menu  lowersection  div -->
    <NavMenu />
  </div>
</template>

<script>
import Search from "./Search";
import NavMenu from "./NavMenu";
export default {
  name: "Navigation",
  components: {
    Search,
    NavMenu
  }
};
</script>

<style scoped>
/* .Finder {
  border: 2px solid red;
}
.Finder > h1 {
  color: red !important;
  font-size: 1.8em;
  flex: 0.8;
} */
.navigationPanel {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(0, 0, 0);
  border-width: 1px 0;
}
.navbar-start {
  display: flex;
  flex-direction: row;
}
.navbar-menu {
  border: 2px solid red;
  display: flex;
  flex-direction: column;
}
.field {
  border: 2px solid green;
  flex: 0.4;
}
.is-divider {
  width: 100%;
  border: 0.6px solid black;
  position: relative;
  top: -25px;
}
</style>
