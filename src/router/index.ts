import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/steps",
      name: "steps",
      component: () => import("@/views/QuestionnaireView.vue"),
    },
    {
      path: "/results",
      name: "results",
      component: () => import("@/views/ResultsView.vue"),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: HomeView,
    },
    {
      path: "/terms",
      name: "terms",
      component: HomeView,
    },
  ],
});

/*router.beforeEach(() => {
  window.googletag = window.googletag || { cmd: [] };

  googletag.cmd.push(() => {
    googletag.destroySlots(googletag.pubads().getSlots());
  });
});*/

export default router;
