import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
// Make BootstrapVue available throughout project
Vue.use(BootstrapVue);
// Make BootstrapVue BootstrapVue icon components available throughout project
Vue.use(IconsPlugin);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
