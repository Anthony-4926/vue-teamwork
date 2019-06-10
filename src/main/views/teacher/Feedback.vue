<template>
  <div>
    <!-- 老师本人的监考任务可以回复，也需要超时提醒 -->
    <template v-if="teacherSelf.teacherSelf == 'true'">
      <!-- 没有点击回复按钮时 -->
      <template v-if="this.feedbackButtonText == '回复'">
        <template v-if="assigment.overtime == 'true'">
          <span style="color:red;">{{ assigment.feedBackMessage }}</span>
        </template>
        <!-- 点了回复按钮 -->
        <template v-else>{{ assigment.feedBackMessage }}</template>
      </template>
      <template v-else>
        <input
          type="text"
          maxlength="10"
          placeholder="1-10字"
          v-model="assigment.feedbackMessage"
        />
      </template>
      <span v-if="(this.Iid = assigment.id)" hidden></span>
      <span
        v-if="(this.feedbackMessage = assigment.feedBackMessage)"
        hidden
      ></span>
      <button type="button" @click="confirm">{{ feedbackButtonText }}</button>
    </template>
    <!-- 不是老师本人的任务只可以看 -->
    <template v-else>{{ assigment.feedbackMessage }}</template>
  </div>
</template>

<script>
import { feedback } from "@/main/api/Main";
export default {
  props: ["assigment", "teacherSelf"],
  data: () => ({
    feedbackButtonText: "回复",
    // 监考ID
    Iid: null,
    feedbackMessage: null
  }),
  methods: {
    confirm() {
      if (this.feedbackButtonText == "确认") {
        feedback(this.aid, this.feedbackMessage);
      }

      this.feedbackButtonText =
        this.feedbackButtonText == "回复" ? "确认" : "回复";
    }
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
