import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import bus from "@/util/Bus";

Vue.config.productionTip = false;

console.log("index.html");
let token = sessionStorage.getItem("token");
if (token == null) {
  window.location.href = "./login.html";
} else {
  let roleCode = sessionStorage.getItem("role");
  let role = null;
  if (roleCode == "15ade689eff335c") {
    role = "teacher";
  } else if (roleCode == "ff2587edaa6828bde3") {
    role = "admin";
  } else if (roleCode == "2356afcd332d") {
    role = "superadmin";
  }

  setTimeout(() => {
    bus.$emit(bus.role, role);
  }, 1);

  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
}
