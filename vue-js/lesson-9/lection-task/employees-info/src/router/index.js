import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import EmployeesList from "../views/EmployeesList.vue";
import EmployeeProfile from "../views/EmployeeProfile.vue";
import EditEmployeeInfo from "../views/EditEmployeeInfo.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/employees",
    name: "employees",
    component: EmployeesList,
  },
  {
    path: "/employee/:employeeId",
    name: "employee",
    component: EmployeeProfile,
  },
  {
    path: "/employee-edit/:userId?",
    name: "edit",
    component: EditEmployeeInfo,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
