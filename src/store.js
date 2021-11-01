import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    books: [],
    token: null
  },
  mutations: {
    setBooks(state, posts) {
      state.books = posts;
    },
    addBooks(state, post) {
      state.books.push(post);
    },
    editBooks(state, editedPost) {
      const postIndex = state.books.findIndex(
        post => post.id === editedPost.id
      );
      state.books[postIndex] = editedPost;
    },
    deleteBooks(state, deletedPost) {
      const postIndex = state.books.findIndex(
        post => post.id === deletedPost.id
      );
      state.books.pop(postIndex);
    },
    setToken(state, token) {
      $cookies.set("token", token, 60 * 60);
      state.token = token;
    },
    clearToken(state) {
      state.token = null;
    }
  },
  actions: {
    fetchProducts(vuexContext) {
      axios
        .get("http://127.0.0.1:8000/api/book/")
        .then(res => {
          const postArray = [];
          for (let key in res.data) {
            postArray.push(res.data[key]);
          }
          vuexContext.commit("setBooks", postArray);
        })
        .catch(e => console.log(`error ${e}`))
    },
    setBooks(vuexContext, posts) {
      vuexContext.commit("setBooks", posts);
    },
    addBooks(vuexContext, createdPost) {
      return axios
        .post("http://127.0.0.1:8000/api/book/", createdPost, {
          headers: {
            Authorization: "Token " + this.getters.getToken
          }
        })
        .then(result => {
          vuexContext.commit("addBooks", {
            ...createdPost,
            id: result.data.id
          });
        })
        .catch(e => console.log(e));
    },
    editBooks(vuexContext, editedPost) {
      return axios
        .put(
          "http://127.0.0.1:8000/api/book/" + editedPost.id + "/",
          editedPost,
          {
            headers: {
              Authorization: "Token " + this.getters.getToken
            }
          }
        )
        .then(result => {
          vuexContext.commit("editBooks", editedPost);
        })
        .catch(e => console.log(e));
    },
    deleteBooks(vuexContext, deletedPost) {
      return axios
        .delete("http://127.0.0.1:8000/api/book/" + deletedPost.id + "/", {
          headers: {
            Authorization: "Token " + this.getters.getToken
          }
        })
        .then(result => {
          vuexContext.commit("deleteBooks", deletedPost);
        })
        .catch(e => console.log(e));
    },
    LoginUser(vuexContext, authData) {
      let authURL = "http://127.0.0.1:8000/rest-auth/login/";
      return axios
        .post(authURL, {
          username: authData.username,
          password: authData.password,
          returnSecureToken: true
        })
        .then(result => {
          vuexContext.commit("setToken", result.data.key);
        })
        .catch(e => console.log(e));
    },
    SignupUser(vuexContext, authData) {
      let authURL = "http://127.0.0.1:8000/rest-auth/registration/";
      return axios
        .post(authURL, {
          username: authData.username,
          email: authData.email,
          password1: authData.password1,
          password2: authData.password2,
          returnSecureToken: true
        })
        .then(result => {
          vuexContext.commit("setToken", result.data.key);
        })
        .catch(e => console.log(e));
    },
    LogoutUser(vuexContext) {
      $cookies.remove("token");
      vuexContext.commit("clearToken");
    },
    UpdateCookies(vuexContext, token) {
      vuexContext.commit("setToken", token);
    }
  },
  getters: {
    Books(state) {
      return state.books;
    },
    isAuthenticated(state) {
      return state.token != null;
    },
    getToken(state) {
      return state.token;
    }
  }
});
export default store;
