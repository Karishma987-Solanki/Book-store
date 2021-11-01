<template>
  <section id="nav" class="container-fluid">
    <nav class="navbar navbar-expand-lg">
      <router-link class="navbar-brand" to="/">Book Store</router-link>
      <button
        class="navbar-toggler navbar-dark"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active" v-if="!show">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item" v-if="!show">
            <router-link to="/signup" class="nav-link">Signup</router-link>
          </li>
          <li class="nav-item" v-if="show">
            <router-link class="nav-link" to="/new">Add Book</router-link>
          </li>
          <li class="nav-item" v-if="show">
            <a class="nav-link" v-on:click="logout" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: "main-navbar",
  data() {
    return {
      isLogin: true
    };
  },
  methods: {
    logout() {
      this.$store
        .dispatch("LogoutUser")
        .then(() => {
          this.$router.push("/login");
        })
        .catch(e => console.log(e));
    }
  },
  computed: {
    show() {
      return this.$store.getters.isAuthenticated;
    }
  }
};
</script>

<style scoped>
#nav {
  background-color: #00909e;
  color: white;
}

.navbar {
  padding: 0 0 2.5rem;
}

.navbar-brand {
  font-family: "Ubuntu";
  font-size: 3.5rem;
  font-weight: bold;
}

.nav-item {
  padding: 0 18px;
}

.navbar-brand:hover,
a:hover {
  color: #95f6ff;
}

.nav-link {
  font-size: 1.2rem;
  font-family: "Montserrat-Light", sans-serif;
}

a {
  color: white;
}
</style>
