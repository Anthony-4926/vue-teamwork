<template>
  <div>
    <button type="submit">
      <i class="material-icons" @click="open">详细</i>
    </button>
    <div id="bg" v-bind:style="{ display: block }">
      <div id="content" v-bind:style="{ display: block }">
        <div style="text-align:right; padding-right:5px;">
          <i class="material-icons" @click="close">close</i>
        </div>
        <table>
          <tr>
            <th>监考课程</th>
            <td>{{ assigment.exam.name }}</td>
          </tr>
          <tr>
            <th>开始时间</th>
            <td>{{ assigment.exam.startTime }}</td>
          </tr>
          <tr>
            <th>结束时间</th>
            <td>{{ assigment.exam.endTime }}</td>
          </tr>
          <tr>
            <th>地点</th>
            <td>{{ assigment.invigilation.classroom }}</td>
          </tr>
          <tr>
            <th>完成情况</th>
            <td>{{ assigment.invigilation.state }}</td>
          </tr>
          <tr>
            <th>回复</th>
            <td>
              <feedback
                v-bind:assigment="assigment"
                v-bind:teacherSelf="teacherSelf"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["assigment", "teacherSelf"],
  components: {
    feedback: () => import("./Feedback")
  },
  data() {
    return {
      block: "none"
    };
  },
  methods: {
    open() {
      this.block = "block";
    },
    close() {
      this.block = "none";
    }
  }
};
</script>
<style scoped>
table {
  width: 100%;
  border: 1;
  border-collapse: collapse;
}
th {
  width: 20%;
  text-align: center;
}
th,
td {
  padding: 8px 16px;
  border: 1px solid black;
}

.material-icons {
  font-size: 16px;
}

#bg {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.493);
  z-index: 2;
  top: 0;
  left: 0;
}
#content {
  padding: 5px;
  text-align: left;
  display: none;
  width: 40%;
  position: fixed;
  top: 20%;
  background: #fff;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
}
</style>
