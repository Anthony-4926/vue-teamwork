<template>
  <div>
    <button type="button">
      <i class="material-icons" @click="open">详细</i>
    </button>
    <div id="bg" v-bind:style="{ display: block }">
      <div id="content" v-bind:style="{ display: block }">
        <div style="text-align:right; padding-right:5px;">
          <span
            class="glyphicon glyphicon-remove"
            aria-hidden="true"
            @click="close"
          ></span>
        </div>
        <table>
          <tr>
            <th>监考课程</th>
            <td v-if="isChange">
              <input type="text" v-model="assigment.exam.name" />
            </td>
            <td v-else>{{ assigment.exam.name }}</td>
          </tr>
          <tr>
            <th>开始时间</th>
            <td v-if="isChange">
              <input type="datetime-local" v-model="assigment.exam.startTime" />
            </td>
            <td v-else>{{ formatDate(assigment.exam.startTime) }}</td>
          </tr>
          <tr>
            <th>结束时间</th>
            <td v-if="isChange">
              <input type="datetime-local" v-model="assigment.exam.overTime" />
            </td>
            <td v-else>{{ formatDate(assigment.exam.overTime) }}</td>
          </tr>
          <tr>
            <th>地点</th>
            <td v-if="isChange">
              <input type="text" v-model="assigment.exam.classroom" />
            </td>
            <td v-else>{{ assigment.exam.classroom }}</td>
          </tr>

          <tr>
            <th>监考教师</th>
            <td v-if="isChange">
              <span v-for="(t, index) in assigment.teachers" :key="index"
                >{{ t.name }}&nbsp;&nbsp;</span
              >
              <button type="button" @click="changeTeacher">
                {{ teacherButtonText }}
              </button>
            </td>
            <td v-else>
              <span v-for="(t, index) in assigment.teachers" :key="index"
                >{{ t.name }}&nbsp;&nbsp;</span
              >
            </td>
          </tr>

          <tr>
            <th>完成情况</th>
            <td>{{ assigment.invigilation.state }}</td>
          </tr>
        </table>

        <div class="button">
          <button type="button" @click="change" v-bind:disabled="changeable">
            修改
          </button>
          <button
            type="button"
            v-bind:disabled="confirmDisable"
            @click="confirm"
          >
            确认
          </button>
        </div>
      </div>

      <div id="bar" v-if="addTeacher">
        <allteachers v-bind:assigment="assigment" />
      </div>
    </div>
  </div>
</template>

<script>
import { updateInvigilation } from "@/main/api/Main";
export default {
  props: ["assigment"],
  components: {
    allteachers: () => import("./Teachers.vue")
  },
  data() {
    return {
      block: "none",
      confirmDisable: true,
      isChange: false,
      addTeacher: false,
      teacherButtonText: null,
      changeable: false
    };
  },
  methods: {
    open() {
      this.block = "block";
    },
    close() {
      this.block = "none";
      this.addTeacher = false;
      this.teacherButtonText = "修改教师";
    },
    change() {
      this.confirmDisable = false;
      this.isChange = true;
    },
    confirm() {
      this.isChange = false;
      this.confirmDisable = true;
      this.addTeacher = false;
      this.teacherButtonText = "修改教师";
      this.assigment.exam.startTime = this.assigment.exam.startTime.replace(
        "T",
        " "
      );
      this.assigment.exam.overTime = this.assigment.exam.overTime.replace(
        "T",
        " "
      );
      updateInvigilation(this.assigment);
    },
    changeTeacher() {
      this.addTeacher = !this.addTeacher;
      if (this.teacherButtonText == "修改教师") {
        this.teacherButtonText = "确认";
      } else {
        this.teacherButtonText = "修改教师";
      }
    }
  },
  created() {
    this.teacherButtonText = "修改教师";
    this.changeable = this.assigment.invigilation.state == "已完成";

    // 如果任务已完成，将不能再修改信息
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

.button {
  display: flex;
  justify-content: flex-end;
}
.button button {
  margin: 5px;
  padding: 3px 15px;
}
</style>
