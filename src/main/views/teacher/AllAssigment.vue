<template>
  <assigments v-bind:assigments="this.allAssigments" />
</template>

<script>
import bus from "@/util/Bus";
import { listAllAssigments } from "@/main/api/Main";
export default {
  components: {
    assigments: () => import("./Assigments")
  },
  data() {
    return {
      allAssigments: [
        {
          begintime: null,
          endtime: null,
          place: null,
          statement: null,
          feedback: null
        }
      ]
    };
  },
  created() {
    listAllAssigments();
    bus.$on(bus.allAssigments, data => {
      this.allAssigments = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.allAssigments);
  }
};
</script>
