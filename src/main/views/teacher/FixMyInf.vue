<template>
  <div>
    <table>
      <tr>
        <th>姓名</th>
        <td v-if="isChange">
          <input type="text" v-model="user.name" />
        </td>
        <td v-else>{{ user.name }}</td>
      </tr>
      <tr>
        <th>职称</th>
        <td v-if="isChange">
          <input type="text" v-model="user.title" />
        </td>
        <td v-else>{{ user.title }}</td>
      </tr>
      <tr>
        <th>手机号</th>
        <td v-if="isChange">
          <input type="text" v-model="user.phoneNumber" />
        </td>
        <td v-else>{{ user.phoneNumber }}</td>
      </tr>
      <tr>
        <th>简介</th>
        <td v-if="isChange">
          <textarea v-model="user.intro" />
        </td>
        <td v-else>{{ user.intro }}</td>
      </tr>
    </table>

    <div class="button">
      <button type="button" @click="change">修改</button>
      <button type="button" v-bind:disabled="confirmDisable" @click="confirm">
        确认
      </button>
    </div>
  </div>
</template>

<script>
import { getUserInfor } from "@/main/api/Main";
import { updateUserInfor } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  data() {
    return {
      user: {
        name: null,
        title: null,
        intro: null,
        phoneNumber: null
      },
      confirmDisable: true,
      isChange: false
    };
  },
  methods: {
    change() {
      this.confirmDisable = false;
      this.isChange = true;
    },
    confirm() {
      this.isChange = false;
      this.confirmDisable = true;
      updateUserInfor(this.user);
    }
  },
  created() {
    console.log("fixMyInf");
    getUserInfor();
    // 需要把teacher改为user
    bus.$on(bus.user, data => {
      this.user = data;
    });
  },
  destroyed() {
    bus.$off(bus.user);
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
  height: 40vh;
}
</style>
