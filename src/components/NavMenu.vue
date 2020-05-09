<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item navitem">Home</a>

        <a class="navbar-item navitem">Documentation</a>

        <div class="navbar-item navitem has-dropdown is-hoverable">
          <a class="navbar-link navitem">More</a>

          <div class="navbar-dropdown">
            <a class="navbar-item navitem">About</a>
            <a class="navbar-item navitem">Jobs</a>
            <a class="navbar-item navitem">Contact</a>
            <hr class="navbar-divider" />
            <a class="navbar-item navitem">Report an issue</a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavMenu"
};
</script>

<style scoped>
.navbar {
  width: 80vw;
  border: 1px solid rgb(25, 34, 160);
  border-width: 1px 1px 0 1px;
}
a.navitem:hover {
  background-color: #00d1b2 !important;
  color: #fff;
}
.navbar-link .navitem:hover {
  background-color: #00d1b2 !important;
}
</style>