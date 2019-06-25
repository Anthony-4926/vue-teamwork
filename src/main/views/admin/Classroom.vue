<template>
  <div>
    <label v-for="(t, index) in classrooms" :key="index">
      <td>
        <input
          type="radio"
          name="classroom"
          :value="t"
          :key="index"
          v-model="assigment.exam.classroom.name"
        />
        {{ t.name }}
      </td>
    </label>
  </div>
</template>

<script>
import { listClassrooms } from "@/main/api/Main";

import bus from "@/util/Bus";
export default {
  props: ["assigment"],
  data: () => ({
    classrooms: null
  }),
  created() {
    listClassrooms();
    bus.$on(bus.classrooms, data => {
      this.classrooms = data;
      console.log(this.classrooms);
    });
    console.log(this.classrooms);
  },
  beforeDestroy() {
    bus.$off(bus.classrooms);
  }
};
</script>

<style scoped>
div {
  height: 80vh;
  overflow: auto;
}
</style>
