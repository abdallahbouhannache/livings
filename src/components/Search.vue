<template>
  <!-- Main container -->
  <nav class="level">
    <!-- Left side -->
    <div class="level-left">
      <div class="level-item">
        <p class="subtitle is-5">
          <strong>Piece Detachee</strong>
        </p>
      </div>
      <div class="level-item">
        <div class="field has-addons">
          <p class="control p1">
            <input class="input" type="text" placeholder="trouver la piece!" />
          </p>
          <p class="control p2">
            <button class="button is-success">Search</button>
          </p>
        </div>
      </div>
    </div>

    <!-- Right side -->
    <div class="level-right">
      <p class="level-item">
        <strong>All</strong>
      </p>
      <p class="level-item">
        <router-link to="#">
          <i class="fas fa-upload fa-lg">publier</i>
        </router-link>
      </p>

      <p class="level-item">
        <router-link to="#">
          <i class="fas fa-concierge-bell fa-lg">trouver</i>
        </router-link>
      </p>
      <p class="level-item">
        <router-link to="#">
          <i class="fas fa-shopping-basket fa-lg">panier</i>
        </router-link>
      </p>
      <router-link to="/404">
        <i class="fas fa-info-circle fa-lg"></i>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.level {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80vw;
  margin-top: 15px;
  padding: 20px;
  /* border: 1px solid black; */
}
.level-left {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.field {
  width: 500px;
  display: flex;
}
p.control.p1 {
  flex: 1.5;
}
p.control.p2 {
  margin: 0 30px;
}
p.control.p2 > button {
  border-radius: 50px 50px !important;
}
p.control.p2 > button:hover {
  color: #fff;
  background-color: #379557;
}
.input {
  border-radius: 18px 50px 50px 18px !important;
}
.level-right {
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0;
}
</style>