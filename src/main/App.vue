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
import bus from "@/util/Bus";
export default {
  components: {
    teacher: () => import("./views/teacher/Teacher"),
    admin: () => import("./views/admin/Admin")
  },
  data: () => ({
    isLogin: true,
    role: "teacher"
  }),
  // 注册监听
  created() {
    bus.$on(bus.isLogin, data => {
      this.isLogin = data;
    });
    bus.$on(bus.role, data => {
      this.role = data;
    });
  },
  // 销毁前取消监听
  beforeDestroy() {
    bus.$off(bus.isLogin);
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
