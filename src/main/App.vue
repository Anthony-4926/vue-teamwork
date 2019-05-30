<template>
  <div id="app">
    <template v-if="role == 'teacher'">
      <teacher />
    </template>
    <template v-else-if="role == 'admin'">
      <admin />
    </template>
  </div>
</template>
<script>
export default {
  components: {
    teacher: () => import("./views/teacher/Teacher"),
    admin: () => import("./views/admin/Admin")
  },
  data: () => ({
    role: null
  }),
  // 注册监听
  created() {
    // console.log("created");
    if (sessionStorage.getItem("role") == "15ade689eff335c") {
      this.role = "teacher";
    } else if (sessionStorage.getItem("role") == "ff2587edaa6828bde3") {
      this.role = "admin";
    }
  }
};
</script>
<style>
ul {
  list-style: none;
}
#app {
  width: 100%;
}
a {
  text-decoration: none;
}
</style>
