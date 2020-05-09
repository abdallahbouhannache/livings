<template>
  <div class="landingwrp">
    <div class="tile is-ancestor headTile hdt1">
      <div class="tile is-parent">
        <img class="picel" src="../assets/pictures/shoes.jpg" />
      </div>
    </div>

    <div class="tile is-ancestor headTile hdt2">
      <div class="tile is-parent subhdt2A">
        <article class="tile is-child box">
          <p class="title">One</p>
          <p class="subtitle">Subtitle</p>
        </article>
      </div>
      <div class="tile is-parent subhdt2B">
        <p class="buttons">
          <button class="button is-link btn1">
            <span class="icon is-small">
              <i class="fas fa-bold"></i>
            </span>
            shop now
          </button>
          <button class="button is-dark btn2">
            <span class="icon is-small">
              <i class="fas fa-italic"></i>
            </span>
            More
          </button>
        </p>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title">One</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
        </div>
        <div class="tile is-child box">
          <p class="title">Two</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title">Three</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
          <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
          <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing"
};
</script>

<style scoped>
.landingwrp {
  max-width: 80vw;
  position: relative;
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
p.buttons {
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;
  width: 200px;
  align-self: flex-end;
}
.btn1 {
}
</style>