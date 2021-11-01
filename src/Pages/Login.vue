<template>
  <div>
    <div id="login" class="container-fluid">
      <h1>Log In</h1>
      <div v-if="!verified">
        <h3 v-if="error">{{ error }}</h3>
        <div v-if="!submitted">
          <form>
            <label for="username">Username</label><br />
            <input type="text" id="username" v-model="username" /><br />
            <label for="password">Password</label><br />
            <input
              type="password"
              id="password"
              v-model.lazy="password"
            /><br />
            <button @click.prevent="submitForm">Submit</button><br />
          </form>
        </div>
        <div v-else>Loading... {{ verifyDetail() }}</div>
      </div>
      <div v-else>Login Successful!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      error: "",
      submitted: false,
      verified: false
    };
  },
  methods: {
    submitForm() {
      if (this.username.length < 5) {
        this.error = "Invalid Username";
      } else {
        this.submitted = true;
      }
    },
    verifyDetail() {
      this.$store
        .dispatch("LoginUser", {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.verified = true;
          this.$router.push("/");
        })
        .catch(() => {
          this.error = error;
          this.submitted = false;
          this.password = "";
        });
    }
  }
};
</script>

<style>
#login {
  padding-bottom: 7%;
}
</style>
