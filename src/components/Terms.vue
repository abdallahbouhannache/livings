<template>
  <div id="terms">
    <div class="terms">
      <h4>TERMS & CONDITIONS</h4>
      <p>A list of terms, conditions, and policies.</p>
      <button @click="back_to_signup()">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  // METHODS
  methods: {
    back_to_signup() {
      this.$emit("change_comp", "signup-form");
    }
  }
};
</script>

<style>
</style>