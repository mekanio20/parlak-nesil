import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/test",
      name: "Test",
      component: () => import("@/views/TestView.vue"),
    },
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/hardware",
      name: "Hardware",
      component: () => import("@/views/HardwareView.vue"),
    },
    {
      path: "/software",
      name: "Software",
      component: () => import("@/views/SoftwareView.vue"),
    },
    {
      path: "/projects",
      name: "Project",
      component: () => import("@/views/ProjectView.vue"),
    },
    {
      path: "/project/:id",
      name: "ProjectDetail",
      component: () => import("@/views/ProjectDetailView.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("@/views/ContactView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;