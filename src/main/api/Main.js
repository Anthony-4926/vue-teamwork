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

/**
 * 获取所有监考任务
 */
export function listAllAssigments() {
  // let headers = { authorization: sessionStorage.getItem("Authorization") };
  axios.get(`/test/test.json`).then(response => {
    bus.$emit(bus.allAssigments, response.data.allInvigilations);
  });
}

/**
 * 获取老师个人监考任务
 */
export function listMyAssigments() {
  // let headers = { authorization: sessionStorage.getItem("Authorization") };
  axios.get(`/test/test.json`).then(response => {
    bus.$emit(bus.assigments, response.data.myInvigilations);
  });
}

/**
 * 监考回复
 * @param {监考任务id} aid
 * @param {回复信息} message
 */
export function feedback(Iid, message) {
  console.log(Iid);
  console.log(message);
  // axios.post(`Invigilations/${Iid}/message`, message).then(response => {
  //   bus.$emit(bus.assigments, response.data.myAssigments);
  // });
}

export function updateInvigilation(invigilation) {
  console.log(invigilation);

  // axios
  //   .post(`Invigilations/${invigilation.id}`, invigilation)
  //   .then(response => {
  //     bus.$emit(bus.allAssigments, response.data.allInvigilations);
  //   });
}

export function listTeachers() {
  axios.get(`/test/test.json`).then(response => {
    bus.$emit(bus.allTeachers, response.data.teachers);
  });
}
