import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StoreView from "../views/StoreView.vue";
import PaymentInfoView from "../views/PaymentInfoView.vue";
import ContactsView from "../views/ContactsView.vue";
import LaptopsView from "../views/LaptopsView.vue";
import AddProduct from "../views/AddProduct.vue";
import EditProduct from "../views/EditProduct.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/store",
    name: "store",
    component: StoreView,
  },
  {
    path: "/store-laptops/:linkId?",
    name: "laptops",
    component: LaptopsView,
  },
  {
    path: "/store-add",
    name: "add",
    component: AddProduct,
  },
  {
    path: "/store-edit/:productId?",
    name: "edit",
    component: EditProduct,
  },
  {
    path: "/payment",
    name: "payment",
    component: PaymentInfoView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
