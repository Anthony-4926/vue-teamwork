<template>
  <assigments
    v-bind:assigments="this.allAssigments"
    v-bind:teacherSelf="this.teacherSelf"
  />
</template>

<script>
import bus from "@/util/Bus";
import { listAllAssigmentsByTeacher } from "@/main/api/Main";
export default {
  components: {
    assigments: () => import("./Assigments")
  },
  data() {
    return {
      allAssigments: null,
      teacherSelf: false
    };
  },
  created() {
    listAllAssigmentsByTeacher();
    bus.$on(bus.allAssigments, data => {
      this.allAssigments = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.allAssigments);
  }
};
</script>
