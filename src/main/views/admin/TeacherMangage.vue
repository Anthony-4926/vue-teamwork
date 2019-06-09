<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>姓名</th>
          <th>职称</th>
          <th>手机号</th>
          <th>简介</th>
          <th>
            <addTeacher />
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(t, index) in allTeachers" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ t.name }}</td>
          <td>{{ t.title }}</td>
          <td>{{ t.phoneNumber }}</td>
          <td style="width:30%">{{ t.intro }}</td>

          <td>
            <button @click="removeTeacher(index, t.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { listTeachers } from "@/main/api/Main";
// import { deleteTeacher } from "@/main/api/Main";
export default {
  components: {
    addTeacher: () => import("./AddTeacher.vue")
    // detailButton: () => import("./DetailButton.vue")
  },
  data() {
    return {
      allTeachers: null
    };
  },
  created() {
    listTeachers();
    bus.$on(bus.allTeachers, data => {
      this.allTeachers = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.teachers);
  },
  methods: {
    removeTeacher(index, tid) {
      this.$delete(this.allTeachers, index);
      console.log(tid);
      //   deleteTeacher(tid);
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  text-align: center;
  padding: 8px;
}

tbody tr:nth-child(odd) {
  background-color: #0000000e;
}
</style>
