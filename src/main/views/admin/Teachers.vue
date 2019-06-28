<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>教师</th>
          <th>监考次数</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(t, index) in allTeachers" :key="index">
          <label>
            <td>
              <input
                type="checkbox"
                v-model="assigment.teachers"
                :value="t"
                :key="index"
              />
              {{ t.name }}
            </td>
          </label>
          <td>{{ t.frequency }}</td>
          <td>
            <teacherCourse v-bind:teacher="t" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { listTeachers } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  props: ["assigment"],
  components: {
    teacherCourse: () => import("./TeacherCourse.vue")
  },
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

<style scoped>
div {
  height: 80vh;
  overflow: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  text-align: center;
  padding: 8px;
}
/* tbody tr:nth-child(odd) {
  background-color: #0000000e;
} */
</style>
