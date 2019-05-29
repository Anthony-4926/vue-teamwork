<template>
  <div>
    <!-- <h1>所有监考信息</h1> -->
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>开始时间</th>
          <th>地点</th>
          <th>完成情况</th>
          <th>回复截止时间</th>
          <th>回复</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a, index) in myAssigments" :key="index">
          <td>{{ index + 1 }}</td>
          <!-- 开始时间 -->
          <td>{{ a.begintime }}</td>
          <!-- 地点 -->
          <td>{{ a.place }}</td>
          <!-- 完成情况 -->
          <td>{{ a.statement }}</td>
          <!-- 结束时间 -->
          <td>{{ a.feedbackDeadline }}</td>
          <!-- 回复 -->
          <td>{{ a.feedback }}</td>
          <td>
            <button @click="removeItem(index)">详细</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myAssigments: [
        {
          begintime: "2019年5月29日13:56:49",
          feedbackDeadline: "2019年5月29日13:57:12",
          place: "丹青909",
          statement: "未完成",
          feedback: "收到"
        },
        {
          begintime: "2019年5月29日13:56:49",
          feedbackDeadline: "2019年5月29日13:57:12",
          place: "丹青909",
          statement: "未完成",
          feedback: "收到"
        },
        {
          begintime: "2019年5月29日13:56:49",
          feedbackDeadline: "2019年5月29日13:57:12",
          place: "丹青909",
          statement: "未完成",
          feedback: "收到"
        },
        {
          begintime: "2019年5月29日13:56:49",
          feedbackDeadline: "2019年5月29日13:57:12",
          place: "丹青909",
          statement: "未完成",
          feedback: "收到"
        }
      ]
    };
  },
  created() {}
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
