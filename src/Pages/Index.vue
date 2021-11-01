<template>
  <div id="app" class="container-fluid">
    <h1>Available Books</h1>
    <div class="row">
      <div v-for="item in loadMobiles" :key="item.id" class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <router-link :to="'/book/' + item.id">
          <div class="aspect r-5-3 border-3 overflow-hidden">
            <img class="all-img" :src="item.thumbnail" />
          </div>
          <h5>{{ item.product_title }}</h5>
          <div class="mt-8 small-bold">{{ item.description }}</div>
          <p class="text-ellipsis-2l">{{ item.price }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  computed: {
    isLogin() {
      return this.$store.getters.isAuthenticated;
    },
    loadMobiles() {
      return this.$store.getters.Books;
    }
  }
};
</script>

<style scoped>
.all-img {
  object-fit: cover;
  width: 45%;
  height: 15%;
}

a {
  color: black;
}

a:hover {
  color: grey;
  text-decoration: none;
}
</style>
