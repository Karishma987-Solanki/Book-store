import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import router from "./routes";
import VueHorizontalList from "vue-horizontal-list";
import store from "./store";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);

Vue.config.productionTip = false;

Vue.component("vue-horizontal-list", VueHorizontalList);

new Vue({
  router,
  store,
  el: "#app",
  created: function() {
    this.$store.dispatch("fetchProducts");
    this.checkLogin();
  },
  watch: {
    $route: "checkLogin"
  },
  methods: {
    checkLogin() {
      if ($cookies.get("token") != null) {
        this.$store.dispatch("UpdateCookies", $cookies.get("token"));
      }
    }
  },
  render: h => h(App)
});
