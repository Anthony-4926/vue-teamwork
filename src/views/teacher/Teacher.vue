<template>
  <div id="teacher_view">
    <!-- 边侧栏 -->
    <teacherSidebar />
    <!-- 工作空间 -->
    <div class="work_space">
      <div class="work_content">
        <!-- 默认加载监考信息 -->
        <template v-if="teacher_isFirst">
          <myAssigment />
        </template>
        <template v-else>
          <router-view v-bind:key="$route.path" />
        </template>
      </div>
    </div>
    <!-- <alertdialog /> -->
  </div>
</template>

<script>
import bus from "@/util/Bus";
export default {
  components: {
    teacherSidebar: () => import("@/views/teacher/TeacherSidebar"),
    myAssigment: () => import("@/views/teacher/MyAssigment")
  },
  data() {
    return {
      teacher_isFirst: true
    };
  },
  // 注册监听
  created() {
    bus.$on(bus.isLogin, data => {
      this.isLogin = data;
    }),
      bus.$on(bus.teacher_isFirst, data => {
        this.teacher_isFirst = data;
      });
  },
  // 销毁前取消监听
  beforeDestroy() {
    bus.$off(bus.isLogin);
    bus.$off(bus.teacher_isFirst);
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
