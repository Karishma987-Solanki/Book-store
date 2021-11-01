<template>
  <div>
    <div id="signup" class="container-fluid">
      <h1>Sign Up</h1>
      <div v-if="!verified">
        <h3 v-if="error">{{ error }}</h3>
        <div v-if="!submitted">
          <form>
            <label for="username">Username</label><br />
            <input type="text" id="username" v-model="username" /><br />
            <label for="email">Email</label><br />
            <input type="email" id="email" v-model="email" /><br />
            <label for="password1">Password</label><br />
            <input
              type="password"
              id="password1"
              v-model.lazy="password1"
            /><br />
            <label for="password2">Confirm Password</label><br />
            <input
              type="password"
              id="password2"
              v-model.lazy="password2"
            /><br />
            <button @click.prevent="submitForm">Submit</button>
          </form>
        </div>
        <div v-else>Loading... {{ verifyDetail() }}</div>
      </div>
      <div v-else>Signup Successful!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      username: "",
      email: "",
      password1: "",
      password2: "",
      error: "",
      submitted: false,
      verified: false
    };
  },
  methods: {
    submitForm() {
      if (this.username.length < 5) {
        this.error = "Username must be minimum 8 characters";
      } else {
        if (this.password1 != this.password2) {
          this.error = "Passwords not Match";
          this.password1 = "";
          this.password2 = "";
        } else {
          this.submitted = true;
        }
      }
    },
    verifyDetail() {
      this.$store
        .dispatch("SignupUser", {
          username: this.username,
          email: this.email,
          password1: this.password1,
          password2: this.password2
        })
        .then(() => {
          this.verified = true;
          this.$router.push("/");
        })
        .catch(() => {
          this.error = error;
          this.submitted = false;
          this.password1 = "";
          this.password2 = "";
        });
    }
  }
};
</script>

<style>
#signup {
  padding-bottom: 7%;
}
</style>
