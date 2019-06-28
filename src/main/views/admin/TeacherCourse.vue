<template>
  <div>
    <button
      type="button"
      class="btn btn-default btn-lg"
      style="padding:4px 6px; font-size: 16px;"
      @click="open"
    >
      课表
      <!-- <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> -->
    </button>

    <div id="bg" v-bind:style="{ display: block }">
      <div id="content" v-bind:style="{ display: block }">
        <div style="text-align:right; padding-right:5px;">
          <span
            class="glyphicon glyphicon-remove"
            aria-hidden="true"
            @click="close"
          ></span>
          <table>
            <thead>
              <th>时间</th>
              <th>课程</th>
            </thead>
            <tbody>
              <tr v-for="(c, index) in courses" :key="index">
                <td>{{ c.classTime }}</td>
                <td>{{ c.name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCourses } from "@/main/api/Main";
import bus from "@/util/Bus";
export default {
  props: ["teacher"],
  data() {
    return {
      block: "none",
      courses: [{ course: { name: null, classTime: null } }]
    };
  },
  methods: {
    open() {
      this.block = "block";
      bus.$on(bus.courses, data => {
        this.courses = data;
        console.log("teacherCourse");
        console.log(this.courses);
      });
      getCourses(this.teacher);
    },
    close() {
      this.block = "none";
    }
  },
  created() {
    // console.log(this.teacher.id);
  },
  beforeDestroy() {
    bus.$off(bus.courses);
  }
};
</script>
<style scoped>
div {
  height: 100%;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  text-align: center;
  padding: 8px;
}

tbody tr:nth-child(odd) {
  background-color: #0000000e;
}

#bg {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.493);
  z-index: 5;
  top: 0;
  left: 0;
}
#content {
  padding: 5px;
  text-align: left;
  display: inline;
  width: 100%;
  position: fixed;
  /* top: 20%; */
  background: #fff;
  z-index: 6;
  left: 50%;
  transform: translateX(-50%);
}
</style>
