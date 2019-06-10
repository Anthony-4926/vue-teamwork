<template>
  <div>
    <button
      type="button"
      class="btn btn-default btn-lg"
      style="padding:4px 6px; font-size: 16px;"
      @click="open"
    >
      添加监考
      <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
    </button>

    <div id="bg" v-bind:style="{ display: block }">
      <div id="content" v-bind:style="{ display: block }">
        <div style="text-align:right; padding-right:5px;">
          <span
            class="glyphicon glyphicon-remove"
            aria-hidden="true"
            @click="close"
          ></span>
          <!-- <i class="material-icons" @click="close">close</i> -->
        </div>

        <table>
          <tr>
            <th>课程名称</th>
            <td>
              <input type="text" v-model="invigilation.exam.name" />
            </td>
          </tr>
          <tr>
            <th>开始时间</th>
            <td>
              <input
                type="datetime-local"
                v-model="invigilation.exam.startTime"
              />
            </td>
          </tr>
          <tr>
            <th>结束时间</th>
            <td>
              <input
                type="datetime-local"
                v-model="invigilation.exam.overTime"
              />
            </td>
          </tr>
          <tr>
            <th>教室</th>
            <td>
              <input type="text" v-model="invigilation.exam.classroom" />
            </td>
          </tr>

          <tr>
            <th>老师</th>
            <td>
              <span v-for="(t, index) in invigilation.teachers" :key="index"
                >{{ t.name }}&nbsp;&nbsp;</span
              >
              <button type="button" @click="changeTeacher">
                {{ teacherButtonText }}
              </button>
            </td>
          </tr>
        </table>

        <div class="button">
          <button type="button" @click="confirm">确认</button>
        </div>
      </div>
      <div id="bar" v-if="addTeacher">
        <allteachers v-bind:assigment="invigilation" />
      </div>
    </div>
  </div>
</template>

<script>
import { addInvigilation } from "@/main/api/Main";
export default {
  components: {
    allteachers: () => import("./Teachers.vue")
  },
  data() {
    return {
      block: "none",
      invigilation: {
        exam: { name: null, startTime: null, overTime: null, classroom: null },
        teachers: []
      },
      addTeacher: false,
      teacherButtonText: null
    };
  },
  methods: {
    open() {
      this.block = "block";
      this.teacherButtonText = "修改教师";
    },
    close() {
      this.block = "none";
    },
    confirm() {
      this.invigilation.exam.startTime = this.invigilation.exam.startTime.replace(
        "T",
        " "
      );
      this.invigilation.exam.overTime = this.invigilation.exam.overTime.replace(
        "T",
        " "
      );
      addInvigilation(this.invigilation);
      console.log(this.invigilation);
      this.block = "none";
    },
    changeTeacher() {
      this.addTeacher = !this.addTeacher;
      if (this.teacherButtonText == "修改教师") {
        this.teacherButtonText = "确认";
      } else {
        this.teacherButtonText = "修改教师";
      }
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

.button {
  display: flex;
  justify-content: flex-end;
}
button {
  margin: 5px;
  padding: 4px 20px;
}
input {
  padding: 0;
  border: 1;
  border-radius: 0;
}
textarea {
  width: 100%;
  height: 30vh;
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
  display: inline;
  width: 40%;
  position: fixed;
  top: 20%;
  background: #fff;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
}

#bar {
  z-index: 3;
  background-color: #fff;
  margin-top: 10vh;
  width: 25%;
  transform: translateX(290%);
}
</style>
