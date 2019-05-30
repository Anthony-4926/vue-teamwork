<template>
  <div>
    <table>
      <tr>
        <th>姓名</th>
        <td v-if="isChange">
          <input type="text" v-model="teacher.name" />
        </td>
        <td v-else>{{ teacher.name }}</td>
      </tr>
      <tr>
        <th>职称</th>
        <td v-if="isChange">
          <input type="text" v-model="teacher.title" />
        </td>
        <td v-else>{{ teacher.title }}</td>
      </tr>
      <tr>
        <th>手机号</th>
        <td v-if="isChange">
          <input type="text" v-model="teacher.phoneNumber" />
        </td>
        <td v-else>{{ teacher.phoneNumber }}</td>
      </tr>
      <tr>
        <th>简介</th>
        <td v-if="isChange">
          <textarea v-model="teacher.intro" />
        </td>
        <td v-else>{{ teacher.intro }}</td>
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
// import { threadId } from 'worker_threads';
export default {
  data() {
    return {
      teacher: {
        name: "赵鑫",
        title: "教授",
        intro:
          "hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha hhhah haha ",
        phoneNumber: "15765735124"
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
