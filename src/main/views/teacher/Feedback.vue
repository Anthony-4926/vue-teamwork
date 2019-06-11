<template>
  <div>
    <!-- 老师本人的监考任务可以回复，也需要超时提醒 -->
    <template v-if="teacherSelf == true">
      <!-- 没有点击回复按钮时 -->
      <template v-if="this.feedbackButtonText == '回复'">
        <template v-if="assigment.overtime == true">
          <span style="color:red;">{{ assigment.feedBackMessage }}</span>
        </template>
        <template v-else>{{ assigment.feedBackMessage }}</template>
      </template>
      <!-- 点了回复按钮 -->
      <template v-else>
        <input
          type="text"
          maxlength="10"
          placeholder="1-10字"
          v-model="assigment.feedBackMessage"
        />
      </template>

      <button type="button" @click="confirm" v-bind:disabled="isAccomplish">
        {{ feedbackButtonText }}
      </button>
    </template>
    <!-- 不是老师本人的任务只可以看 -->
    <template v-else>{{ assigment.feedBackMessage }}</template>
  </div>
</template>

<script>
import { feedback } from "@/main/api/Main";
export default {
  props: ["assigment", "teacherSelf"],
  data: () => ({
    feedbackButtonText: "回复",
    isAccomplish: false
  }),
  methods: {
    confirm() {
      if (this.feedbackButtonText == "确认") {
        feedback(this.assigment);
      }
      this.feedbackButtonText =
        this.feedbackButtonText == "回复" ? "确认" : "回复";
    }
  },

  beforeMount() {
    this.isAccomplish = this.assigment.state == "已完成";
    console.log(this.isAccomplish);
  }
};
</script>

<style scoped>
div {
  display: flex;
}
button {
  margin-left: auto;
}
</style>
