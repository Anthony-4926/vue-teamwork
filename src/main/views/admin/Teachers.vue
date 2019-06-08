<template>
  <div>
    <table>
      <tr>
        <th>教师</th>
        <th>监考次数</th>
      </tr>
      <tr v-for="(t, index) in allTeachers" :key="index">
        <label>
          <input
            type="checkbox"
            v-model="assigment.teachers"
            :value="t"
            :key="index"
          />
          <td>{{ t.name }}</td>
          <td>{{ t.frequence }}</td>
        </label>
      </tr>
    </table>
  </div>
</template>

<script>
import { listTeachers } from "@/main/api/Main";

import bus from "@/util/Bus";
export default {
  props: ["assigment"],
  data: () => ({
    allTeachers: null
  }),
  created() {
    listTeachers();
    bus.$on(bus.allTeachers, data => {
      this.allTeachers = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.teachers);
  }
};
</script>
