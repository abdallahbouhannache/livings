<template>
  <div id="login" class="Login Page">
    <!-- <div id="description">
      <h1>Login</h1>
      <p>By logging in you agree to the ridiculously long terms that you didn't bother to read.</p>
    </div>-->
    <div id="formlogin">
      <form @submit.prevent="doLogin">
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          v-model="email"
          placeholder="me@example.com"
          autocomplete="off"
        />

        <label for="password">Password</label>&nbsp;
        <i class="fas" :class="[passwordIcon]" @click="hidePassword = !hidePassword"></i>
        <input :type="passwordType" id="password" v-model="password" placeholder="**********" />

        <button type="submit">Log in</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      hidePassword: true
    };
  },
  computed: {
    passwordType() {
      return this.hidePassword ? "password" : "text";
    },
    passwordIcon() {
      return this.hidePassword ? "fa-eye" : "fa-eye-slash";
    }
  },
  methods: {
    doLogin() {
      alert("Not implemented yet :O");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Nunito");
@import url("https://use.fontawesome.com/releases/v5.0.6/css/all.css");
@import "../assets/styling/Login.css";
</style>