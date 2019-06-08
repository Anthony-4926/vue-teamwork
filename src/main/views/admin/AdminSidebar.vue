<template>
  <div>
    <ul>
      <li>
        <router-link to="/invigilations">监考信息管理</router-link>
      </li>
      <li>
        <router-link to="/all">教师管理</router-link>
      </li>
    </ul>
  </div>
</template>

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
