import axios from "@/util/MyAxios";
import bus from "@/util/Bus";

// 模拟请求，本地测试
// export function login() {
//   axios.get("./test/test.json").then(response => {
//     // 模拟异步延时操作
//     window.console.log("Login.js");
//     setTimeout(() => {
//       sessionStorage.setItem("token", response.data.user.token);
//       sessionStorage.setItem("role", response.data.user.role);
//       window.location.href = "./index.html";
//     }, 500);
//   });
// }

/************真正请求，向后端发送post请求********/
export function login(user) {
  console.log(user.number);
  console.log(user.password);
  axios
    .post("/login", user)
    .then(response => {
      let token = response.headers["token"];
      let role = response.headers["role"];
      console.log(role);

      if (token != null) {
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("role", role);
        console.log(role);
        setTimeout(() => {
          bus.$emit(bus.user, response.data.user);
          window.location.href = "./index.html";
        }, 1000);
      }
    })
    .catch(error => {
      bus.$emit(bus.e, error.response.data.message);
    });
}
