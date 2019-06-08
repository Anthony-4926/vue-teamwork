<template>
  <div id="teacher_view">
    <!-- 边侧栏 -->
    <adminSidebar />
    <!-- 工作空间 -->
    <div class="work_space">
      <div class="work_content">
        <router-view v-bind:key="$route.path" />
      </div>
    </div>
    <!-- <alertdialog /> -->
  </div>
</template>

<script>
export default {
  components: {
    adminSidebar: () => import("@/main/views/admin/AdminSidebar")
  },
  // 注册监听
  created() {
    this.$router.push("/invigilations");
  }
};
</script>

<style>
body {
  align-items: flex-start;
  background-image: url();
  background-color: rgb(159, 243, 243);
  justify-content: left;
}

.work_space {
  /* 设置工作空间宽度屏幕占70% */
  width: 70%;
  margin-top: 15vh;
}
.work_content {
  justify-content: center;
  background-color: #fff;
  width: 80%;
}

#teacher_view {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>
