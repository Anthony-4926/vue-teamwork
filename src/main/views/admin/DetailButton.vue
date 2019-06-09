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
              <input type="text" v-model="assigment.course" />
            </td>
            <td v-else>{{ assigment.course }}</td>
          </tr>
          <tr>
            <th>开始时间</th>
            <td v-if="isChange">
              <input type="datetime-local" v-model="assigment.begintime" />
            </td>
            <td v-else>{{ formatDate(assigment.begintime) }}</td>
          </tr>
          <tr>
            <th>结束时间</th>
            <td v-if="isChange">
              <input type="datetime-local" v-model="assigment.endtime" />
            </td>
            <td v-else>{{ formatDate(assigment.endtime) }}</td>
          </tr>
          <tr>
            <th>地点</th>
            <td v-if="isChange">
              <input type="text" v-model="assigment.place" />
            </td>
            <td v-else>{{ assigment.place }}</td>
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
            <td>{{ assigment.statement }}</td>
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
      teacher: null,
      classroom: null,
      teacherButtonText: null,
      changeable: true
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
    this.changeable = this.assigment.statement == "已完成";
  },
  computed: {
    formatDate() {
      return date => date.replace("T", " ");
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
