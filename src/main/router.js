import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/myAssigment",
      component: () => import("./views/teacher/MyAssigment.vue")
    },
    {
      path: "/allAssigment",
      component: () => import("./views/teacher/AllAssigment.vue")
    },
    {
      path: "/fixMyInf",
      component: () => import("./views/teacher/FixMyInf.vue")
    },
    {
      path: "/invigilations",
      component: () => import("./views/admin/Invigilations.vue")
    }
  ]
});
