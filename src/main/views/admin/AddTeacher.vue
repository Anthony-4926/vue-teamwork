<template>
  <div>
    <button
      type="button"
      class="btn btn-default btn-lg"
      style="padding:4px 6px; font-size: 16px;"
      @click="open"
    >
      添加教师
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
            <th>工号</th>
            <td>
              <input type="text" v-model="teacher.number" />
            </td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>
              <input type="text" v-model="teacher.name" />
            </td>
          </tr>

          <tr>
            <th>职称</th>
            <td>
              <input type="text" v-model="teacher.title" />
            </td>
          </tr>

          <tr>
            <th>电话</th>
            <td>
              <input type="text" v-model="teacher.phoneNumber" />
            </td>
          </tr>

          <tr>
            <th>简介</th>
            <td>
              <textarea v-model="teacher.intro"></textarea>
            </td>
          </tr>
        </table>

        <div class="button">
          <button type="button" @click="confirm">确认</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addTeacher } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  props: ["allTeachers"],
  data() {
    return {
      block: "none",
  
      teacher: {
        number: null,
        name: null,
        title: null,
        phoneNumber: null,
        intro: null,
        authority: 1
      }
    };
  },
  methods: {
    open() {
      this.block = "block";
    },
    close() {
      this.block = "none";
    },
    confirm() {
      // this.teacher =
      addTeacher(this.teacher);

      // console(this.teacher);
      this.block = "none";
    }
  },
  created() {
    bus.$on(bus.newTeacher, data => {
      console.log(data);
      this.$set(this.allTeachers, this.allTeachers.length, data);
    });
  },
  beforeDestroy() {
    bus.$off(bus.newTeacher);
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
</style>
