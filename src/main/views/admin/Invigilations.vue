<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>课程名称</th>
          <th>开始时间</th>
          <th>结束时间</th>
          <th>地点</th>
          <th>完成情况</th>
          <th>
            <addInvigilation />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a, index) in invigilations" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ a.exam.name }}</td>
          <!-- 开始时间 -->
          <td>{{ formatDate(a.exam.begintime) }}</td>
          <!-- 结束时间 -->
          <td>{{ formatDate(a.exam.overtime) }}</td>
          <!-- 地点 -->
          <td>{{ a.exam.place }}</td>
          <!-- 完成情况 -->
          <td>{{ a.statement }}</td>
          <td>
            <detailButton v-bind:assigment="a" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import bus from "@/util/Bus";
import { listAllAssigments } from "@/main/api/Main";

export default {
  components: {
    detailButton: () => import("./DetailButton.vue"),
    addInvigilation: () => import("./AddInvigilation.vue")
  },
  data() {
    return {
      invigilations: [
        {
          exam: {
            name: null,
            startTime: null,
            overTime: null,
            classroom: null
          },
          teachers: []
        }
      ]
    };
  },
  created() {
    console.log("invigilations.vue");
    listAllAssigments();
    bus.$on(bus.allAssigments, data => {
      this.invigilations = data;
      console.log("invigilations.vue created");
    });
  },
  beforeDestroy() {
    console.log("invigilations.vue beforeDestroy");
    bus.$off(bus.allAssigments);
  },
  computed: {
    formatDate() {
      return date => (date == null ? null : date.replace("T", " "));
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
