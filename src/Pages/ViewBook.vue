<template>
  <div id="book-view" class="container-fluid">
    <div v-if="!remove">
      <div class="row" v-if="!edit">
        <div class="col-lg-4">
          <img :src="book.thumbnail" />
        </div>
        <div class="col-lg-8">
          <h1>{{ book.product_title }}</h1>
          <h4>{{ book.author }}</h4>
          <h4>${{ book.price }}/- Only</h4>
          <h5>{{ book.pages }}</h5>
          <br />
          <h6>{{ book.description }}</h6>
          <div v-if="show">
            <button @click="edit = !edit">Edit This Product</button>
            <button @click.prevent="remove = !remove">Delete Product</button>
          </div>
        </div>
      </div>
      <div class="row" v-else>
        <div class="col-lg-4">
          <img :src="book.thumbnail" />
        </div>
        <div class="col-lg-8">
          <h2 style="color:red;">{{ error }}</h2>
          <h1>
            <input
              type="text"
              v-model="book.product_title"
              placeholder="Product Title"
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
          <div v-if="edit">
            <button @click.prevent="saveProduct">Save</button>
            <button @click.prevent="edit = !edit">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h4>Are you sure you want to delete this?</h4>
      <button @click.prevent="deleteProduct">Delete</button>
      <button @click.prevent="remove = !remove">Cancel</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "product-book",
  data() {
    return {
      book: {},
      edit: false,
      remove: false,
      error: ""
    };
  },
  created() {
    return axios
      .get("http://127.0.0.1:8000/api/book/" + this.$route.params.id)
      .then(res => {
        this.book = res.data;
      })
      .catch(e => context.error(e));
  },
  computed: {
    show() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    saveProduct() {
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
    deleteProduct() {
      this.$store.dispatch("deleteBooks", this.book);
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
#book-view {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

img {
  width: 100%;
}
</style>
