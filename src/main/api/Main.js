import axios from "@/util/MyAxios";
import bus from "@/util/Bus";

/**
 * 获取教师信息
 */
export function getUserInfor() {
  axios.get("/test/test.json").then(response => {
    bus.$emit(bus.user, response.data.teacher);
  });
}

/**
 * 更新教师信息
 * @param {*} user
 */
export function updateUserInfor(user) {
  axios.post(`teacher/update`, user).then(response => {
    setTimeout(() => {
      bus.$emit(bus.user, response.data.user);
    }, 1000);
  });
}

export function listAllAssigments() {
  // let headers = { authorization: sessionStorage.getItem("Authorization") };
  axios.get(`/test/test.json`).then(response => {
    bus.$emit(bus.allAssigments, response.data.allAssigments);
  });
}

export function listMyAssigments() {
  // let headers = { authorization: sessionStorage.getItem("Authorization") };
  axios.get(`/test/test.json`).then(response => {
    bus.$emit(bus.assigments, response.data.myAssigments);
  });
}
