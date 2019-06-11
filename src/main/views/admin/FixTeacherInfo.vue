<template>
  <div>
    <button type="button">
      <i class="material-icons" @click="open">编辑</i>
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
        <form>
          <table>
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
              <th>手机号</th>
              <td>
                <input type="text" v-model="teacher.phoneNumber" />
              </td>
            </tr>
            <tr>
              <th>简介</th>
              <td>
                <textarea v-model="teacher.intro" />
              </td>
            </tr>
          </table>

          <div class="button">
            <button type="button" @click="confirm">确认</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { updateUserInforByAdmin } from "@/main/api/Main";
export default {
  props: ["teacher"],
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
    },
    confirm() {
      updateUserInforByAdmin(this.teacher);
    }
  }
};
</script>
<style scoped>
.material-icons {
  font-size: 14px;
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
table {
  width: 100%;
  border: 1;
  border-collapse: collapse;
}
th {
  width: 20%;
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
}
input {
  padding: 0;
  border: 1;
  border-radius: 0;
}
textarea {
  width: 100%;
  height: 40vh;
}
</style>
