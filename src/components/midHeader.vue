<template>
  <div class="midheader">
    <div class="tile is-ancestor headTile hdt1">
      <div class="tile is-parent">
        <img class="picel" src="../assets/pictures/shoes.jpg" />
      </div>
    </div>
    <section class="tile is-ancestor headTile hdt2">
      <div class="tile is-parent subhdt2A">
        <div class="tile is-child box mdheader">
          <div class="textpan">
            <p class="title">One</p>
            <p
              class="subtitle"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare est ligula, id sollicitudin quam efficitur at. Fusce viverra fringilla mauris in vulputate.</p>
          </div>
          <div class="twoBtns">
            <button class="button is-link btnitem btn1">
              <span class="icon is-small">
                <i class="fas fa-bold"></i>
              </span>
              shop now
            </button>
            <button class="button is-dark btnitem btn2">
              <span class="icon is-small">
                <i class="fas fa-italic"></i>
              </span>
              More
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "midHeader"
};
</script>

<style>
.midheader {
  margin-top: 30px;
}
.tile.is-ancestor {
  margin-left: 0 !important;
}
.idls {
}
.tile {
  width: 100%;
}
.picel {
  width: 100%;
  height: 150px;
  background-size: cover;
}
.hdt2 {
  display: flex;
  flex-direction: row;
}
.subhdt2A {
  flex: 1.4;
}
.subhdt2B {
  flex: 0.5;
}
.hdt2.tile {
}

.textpan {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
}
.textpan > .title {
  flex: 1;
}
.textpan > .subtitle {
  flex: 1;
}
div.twoBtns {
  display: flex;
  flex-direction: column;
  width: 250px;
  flex: 0.25;
  /* align-self: flex-end; */
}
.mdheader {
  display: flex !important;
}
.button {
  width: 150px;
  align-self: center;
  margin: 10px 0;
}
.btnitem {
  width: 150px;
  align-self: flex-end;
  margin: 10px 0;
}
.btn1 {
}
</style>