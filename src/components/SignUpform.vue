<template>
  <div id="signup-form">
    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" v-model="email" />
        <span v-if="email.length > 1">{{ email_msg }}</span>
      </div>
      <div class="form-group">
        <label for="psw1">
          Password
          <span id="characters">(6 or more characters required)</span>
        </label>
        <input type="password" v-model="password1" />
        <span v-show="msg1">{{ pwd1_msg }}</span>
      </div>
      <div class="form-group">
        <label for="psw2">Repeat Password</label>
        <input type="password" v-model="password2" />
        <span v-show="msg2">{{ pwd2_msg }}</span>
      </div>
      <div class="form-group">
        <button
          :class="{active: disable_btn}"
          :disabled="disable_btn"
          @click.prevent="on_signup()"
        >Sign Up</button>
        <a href="#0" @click="show_terms()">terms & conditions</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      email_msg: "",
      password1: "",
      pwd1_msg: "",
      password2: "",
      pwd2_msg: "",
      disable_btn: true,
      msg1: true,
      msg2: true
    };
  },

  // WATCH
  watch: {
    email: function(value) {
      this.valid_email(value, "email_msg");
    },
    password1: function(value) {
      if (this.check_password_length(value, "pwd1_msg", 6)) {
        this.check_passwords_match();
      }
    },
    password2: function(value) {
      if (this.check_password_length(value, "pwd2_msg", 6)) {
        this.check_passwords_match();
      }
    }
  },

  // METHODS
  methods: {
    // valid_email(email, msg) {
    //   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    //     this[msg] = "";
    //     return true;
    //   } else {
    //     this[msg] = "Keep typing...waiting for a valid email";
    //     return false;
    //   }
    // },

    check_password_length(value, msg, total) {
      var length = value.length;
      var sum = 0;
      var display;

      sum = total - length;

      switch (sum) {
        case 0:
          display = "";
          break;
        case 1:
          display = "Keep going - just need " + sum + " more character.";
          break;
        default:
          display = "Keep going - just need " + sum + " more characters";
      }

      if (length >= total) {
        this[msg] = "";
        return true;
      } else {
        this[msg] = display;
        return false;
      }
    },

    check_passwords_match() {
      if (this.password1.length > 5 && this.password2.length > 5) {
        if (this.password2 != this.password1) {
          this.pwd2_msg = "Passwords do not match";
          this.disable_btn = true;
          return true;
        } else {
          this.pwd2_msg = "";
          this.disable_btn = false;
          return false;
        }
      }
    },

    on_signup() {
      this.email = "";
      this.password1 = "";
      this.password2 = "";
      this.email_msg = "";
      this.pwd1_msg = "";
      this.pwd2_msg = "";
      this.msg1 = false;
      this.msg2 = false;
      this.disable_btn = true;
      this.$emit("change_comp", "results");
    },

    show_terms() {
      this.$emit("change_comp", "terms");
    }
  }
};
</script>

<style >
#signup-form {
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
}
</style>