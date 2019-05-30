<template>
  <div>
    <ul>
      <li @click="teacher_noFirst">
        <router-link to="/myAssigment">个人监考信息</router-link>
      </li>
      <li @click="teacher_noFirst">
        <router-link to="/allAssigment">所有监考信息</router-link>
      </li>
      <li @click="teacher_noFirst">
        <router-link to="/fixMyInf">修改信息</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import bus from "@/util/Bus";
export default {
  methods: {
    teacher_noFirst() {
      bus.$emit(bus.teacher_isFirst, false);
    }
  }
};
</script>

<style scoped>
div {
  width: 20%;
  display: flex;
  justify-content: center;
  margin-top: 20vh;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 60%;
}
a {
  display: block;
  text-align: center;
  padding: 20px 0;
  background-color: aliceblue;
  color: black;
}
a:hover {
  background-color: antiquewhite;
}
</style>
