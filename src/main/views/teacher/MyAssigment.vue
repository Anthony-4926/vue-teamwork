<template>
  <div>
    <!-- <h1>所有监考信息</h1> -->
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>开始时间</th>
          <th>结束时间</th>
          <th>地点</th>
          <th>完成情况</th>
          <th>回复</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a, index) in myAssigments" :key="index">
          <td>{{ index + 1 }}</td>
          <!-- 开始时间 -->
          <td>{{ a.begintime }}</td>
          <!-- 结束时间 -->
          <td>{{ a.endtime }}</td>
          <!-- 地点 -->
          <td>{{ a.place }}</td>
          <!-- 完成情况 -->
          <td>{{ a.statement }}</td>
          <!-- 结束时间 -->
          <!-- 回复 -->
          <td v-if="a.overtime == 'true'" style="color:red;">
            {{ a.feedback }}
          </td>
          <td v-else>{{ a.feedback }}</td>
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
    detailButton: () => import("./DetailButton")
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
      ]
    };
  },
  created() {
    window.console.log("created myassigment");
    listAllAssigments();
    bus.$on(bus.assigments, data => {
      this.myAssigments = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.assigments);
  },
  methods: {
    detail(index) {
      window.console.log(index);
      this.$router.push(`/assiment/${index}`);
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
