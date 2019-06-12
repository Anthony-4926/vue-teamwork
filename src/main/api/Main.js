import axios from "@/util/MyAxios";
import bus from "@/util/Bus";

/**
 * 获取教师信息
 */
export function getUserInfor() {
  // axios.get("/test/test.json").then(response => {
  //   bus.$emit(bus.user, response.data.teacher);
  // });

  axios.get("/teachers/getInfor").then(response => {
    // console.log(response.data.user);
    bus.$emit(bus.user, response.data.user);
  });
}

/**
 * 更新教师信息
 * @param {*} user
 */
export function updateUserInfor(user) {
  // console.log(user);
  axios.post(`teachers/update`, user);
}

/**
 * 更新教师信息
 * @param {*} user
 */
export function updateUserInforByAdmin(user) {
  // console.log(user);
  axios.post(`admin/update`, user);
}

/**
 * 管理员获取所有监考任务
 */
export function listAllAssigmentsByAdmin() {
  axios.get(`/admin/invigilations`).then(response => {
    bus.$emit(bus.allAssigments, response.data.invigilations);
    // console.log(response.data.invigilations);
  });
}

/**
 * 教师获取所有监考任务
 */
export function listAllAssigmentsByTeacher() {
  axios.get(`/teachers/invigilations`).then(response => {
    bus.$emit(bus.allAssigments, response.data.invigilations);
    // console.log(response.data.invigilations);
  });
}

/**
 * 获取老师个人监考任务
 */
export function listMyAssigments() {
  axios.get(`/teachers/personal/invigilations`).then(response => {
    // console.log(response.data.personalInvigilations);
    bus.$emit(bus.assigments, response.data.personalInvigilations);
  });
}

/**
 * 监考回复
 * @param {监考任务id} aid
 * @param {回复信息} message
 */
export function feedback(invigilation) {
  // console.log(invigilation);
  // updateInvigilation(invigilation);
  axios.post(
    `teachers/invigilation/${invigilation.id}/feedBackMessage`,
    invigilation
  );
}

/**
 * 获取所有教师
 */
export function listTeachers() {
  // axios.get(`/test/test.json`).then(response => {
  //   bus.$emit(bus.allTeachers, response.data.teachers);
  // });

  axios.get(`/admin/listTeachers`).then(response => {
    bus.$emit(bus.allTeachers, response.data.teachers);
    // console.log("listTeacher");
  });
}

/**
 * 基于id删除老师
 * @param {老师id} tid
 */
export function setAdmin(t) {
  axios.post(`superAdmin/updateAuthority`, t);
}

/**
 * 添加老师
 * @param {老师实体} teacher
 */
export function addTeacher(teacher) {
  axios.post(`admin/add`, teacher).then(response => {
    // console.log(response.data);

    bus.$emit(bus.newTeacher, response.data.newTeacher);

    // return response.data.user;
  });
}

/**
 * 修改监考记录
 * @param {监考记录} invigilation
 */
export function updateInvigilation(invigilation) {
  // console.log(invigilation);
  axios.post(`admin/update/invigilation`, invigilation).then(response => {
    if (response.data.invigilation.conflictMessage != "") {
      alert(`${response.data.invigilation.conflictMessage}，但允许`);
    }
  });
}

/**
 * 添加监考
 * @param {监考} invigilation
 */
export function addInvigilation(invigilation) {
  axios.post(`admin/add/invigilation`, invigilation).then(response => {
    if (response.data.invigilation.conflictMessage != "") {
      alert(`${response.data.invigilation.conflictMessage}，但允许`);
    }
    console.log(response.data.invigilation);

    bus.$emit(bus.newInvigilation, response.data.invigilation.invigilation);
  });
}
