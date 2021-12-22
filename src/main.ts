import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Analytics from "vue-analytics";

Vue.use(Analytics, {
  id: "UA-168769445-1",
  router,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
