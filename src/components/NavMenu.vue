/*  */
<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link :to="{ path: 'https://bulma.io' }" class="navbar-item">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </router-link>

      <a
        role="button"
        class="navbar-b urger burger"
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
        <router-link :to="{ path: 'shops' }" class="navbar-item navitem">shops</router-link>
        <router-link :to="{ path: 'Watches' }" class="navbar-item navitem">Watches</router-link>
        <div class="navbar-item navitem has-dropdown is-hoverable">
          <router-link :to="{ path: 'More' }" class="navbar-item navitem">More</router-link>
          <div class="navbar-dropdown">
            <router-link :to="{ path: 'Electronics' }" class="navbar-item navitem">Electronics</router-link>
            <router-link :to="{ path: 'Health' }" class="navbar-item navitem">Health</router-link>
            <router-link :to="{ path: 'Jewellery' }" class="navbar-item navitem">Jewellery</router-link>
            <router-link :to="{ path: 'Watches' }" class="navbar-item navitem">Watches</router-link>
            <router-link :to="{ path: 'About' }" class="navbar-item navitem">About</router-link>
            <hr class="navbar-divider" />
            <router-link :to="{ path: 'Issue' }" class="navbar-item navitem">Report an issue</router-link>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link v-if="!authenticated" :to="{ path: 'Register' }" class="button is-primary">
              <strong>Sign up</strong>
            </router-link>
            <router-link
              class="button is-light"
              v-if="authenticated"
              :to="{ path: '/' }"
              v-on:click.native="logout()"
            >Logout</router-link>
            <router-link
              class="button is-light"
              v-if="!authenticated"
              :to="{ path: 'Login' }"
              v-on:click.native="logout()"
            >Login</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "userX",
        password: "password"
      }
    };
  },

  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
};
</script>

<style scoped>
.navbar {
  width: 80vw;
  /* border: 1px solid rgb(25, 34, 160);
  border-width: 1px 1px 0 1px; */
}
a.navitem:hover {
  background-color: #00d1b2 !important;
  color: #fff;
}
.navbar-link .navitem:hover {
  background-color: #00d1b2 !important;
}
</style>