import { createStore } from "vuex";
import { products } from "@/constants/productsList";

export default createStore({
  state: {
    productDataList: [],
  },
  getters: {
    getProductsData: (state) => state.productDataList,
    getProductById: (state) => (productId) =>
      state.productDataList.find((p) => {
        // console.log(p);
        // console.log(p.id);
        // console.log(productId);
        // console.log(p.id == productId);
        return p.id == productId;
      }),
  },
  mutations: {
    setProductsData(state, laptops) {
      state.productDataList = laptops;
    },
    addNewProduct(state, productData) {
      state.productDataList.push({
        id: crypto.randomUUID,
        ...productData,
      });
    },
    updateProductData(state, productData) {
      const currentProduct = state.productDataList.findIndex(
        (p) => p.id == productData.id
      );
      state.productDataList[currentProduct] = {
        ...productData,
      };
    },
    deleteProduct(state, productId) {
      const currentIndex = state.productDataList.findIndex(
        (p) => p.id == productId
      );
      state.productDataList.splice(currentIndex, 1);
    },
  },
  actions: {
    loadData({ commit }) {
      commit("setProductsData", products);
    },
    addNewProduct({ commit }, productData) {
      commit("addNewProduct", productData);
    },
    updateProductData({ commit }, productData) {
      commit("updateProductData", productData);
    },
    deleteProduct({ commit }, productId) {
      commit("deleteProduct", productId);
    },
  },
});
