<template>
  <div id="app">
    <template v-if="role == 'teacher'">
      <teacher />
    </template>
    <template v-else-if="role == 'admin' || role == 'superadmin'">
      <admin />
    </template>
    <alertdialog />
  </div>
</template>
<script>
import bus from "@/util/Bus";
export default {
  components: {
    teacher: () => import("./views/teacher/Teacher"),
    admin: () => import("./views/admin/Admin"),
    alertdialog: () => import("@/components/AlertDialog")
  },
  data: () => ({
    role: null
  }),
  created() {
    // 监听角色
    bus.$on(bus.role, data => {
      this.role = data;
    });
  },
  destroyed() {
    bus.$off(bus.role);
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
