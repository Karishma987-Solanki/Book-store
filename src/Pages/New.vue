<template>
  <div class="container-fluid">
    <h1>Add Book</h1>
    <div class="row">
      <div class="col-lg-4">
        <img :src="book.thumbnail" />
      </div>
      <div class="col-lg-8">
        <h2 style="color:red;">{{ error }}</h2>
        <h1>
          <input
            type="text"
            v-model="book.product_title"
            placeholder="Book Title"
          />
        </h1>
        <h4>
          <input
            type="text"
            v-model="book.author"
            placeholder="Book Author"
          />
        </h4>
        <h4>
          $
          <input type="text" v-model="book.price" placeholder="Price" />/-
          Only
        </h4>
        <h5>
          <input
            type="text"
            v-model="book.pages"
            placeholder="Number of Pages"
          />
        </h5>
        <br />
        <h6>
          <textarea
            cols="81"
            rows="4"
            v-model="book.description"
            placeholder="Description"
          ></textarea>
        </h6>
        <button @click.prevent="addBook">Add Book</button>
        <button @click.prevent="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: {
        product_title: "",
        thumbnail: "https://m.media-amazon.com/images/I/81Kp0FHzxpL._AC_UY218_.jpg",
        author: "",
        pages: "",
        description: "",
        price: ""
      },
      error: "",
      edit: false
    };
  },
  created: function() {
    this.checkLogin();
  },
  methods: {
    addBook() {
      if (!this.book.product_title) {
        this.error = "*Please Provide a valid Book Name*";
      } else if (!this.book.author) {
        this.error = "*Please Provide a valid Author Name*";
      } else if (!this.book.description) {
        this.error = "*Please Provide a description*";
      } else if (!this.book.pages) {
        this.error = "*Please provide number of pages in Book*";
      } else if (!this.book.price) {
        this.error = "*Please mention price for the Book*";
      } else {
        this.$store.dispatch("addBooks", this.book);
        this.$router.push("/");
      }
    },
    checkLogin() {
      if (!this.$store.getters.isAuthenticated) {
        this.$router.push("/login");
      }
    }
  },
  computed: {
    cancel() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
img {
  width: 100%;
}
</style>
