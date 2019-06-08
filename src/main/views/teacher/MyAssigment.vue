<template>
  <assigments
    v-bind:assigments="this.myAssigments"
    v-bind:teacherSelf="this.teacherSelf"
  />
</template>

<script>
import bus from "@/util/Bus";
import { listMyAssigments } from "@/main/api/Main";
export default {
  components: {
    assigments: () => import("./Assigments")
  },
  data() {
    return {
      myAssigments: [
        {
          begintime: null,
          endtime: null,
          place: null,
          statement: null,
          feedback: null
        }
      ],
      teacherSelf: { teacherSelf: "true" }
    };
  },
  created() {
    listMyAssigments();
    bus.$on(bus.assigments, data => {
      this.myAssigments = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.assigments);
  },
  beforeMount() {
    bus.$emit(bus.teacherSelf, true);
  }
};
</script>
