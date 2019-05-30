import axios from "@/util/MyAxios";
// import bus from "@/util/Bus";

export function login() {
  axios.get("./test/test.json").then(response => {
    // 模拟异步延时操作
    window.console.log("Login.js");
    setTimeout(() => {
      sessionStorage.setItem("token", response.data.user.token);
      sessionStorage.setItem("role", response.data.user.role);
      window.location.href = "./index.html";
    }, 500);
  });
}

// export function login(user) {
//   axios
//     .post("/login", user)
//     .then(response => {
//       let token = response.headers["token"];
//       let role = response.headers["role"];
//       if (token != null) {
//         bus.$emit(bus.loginSuccess, true);
//         sessionStorage.setItem("token", token);
//         sessionStorage.setItem("role", role);
//         setTimeout(() => {
//           bus.$emit(bus.user, response.data.user);
//         }, 1000);
//       }
//     })
//     .catch(error => {
//       bus.$emit(bus.e, error.response.data.message);
//     });
// }
