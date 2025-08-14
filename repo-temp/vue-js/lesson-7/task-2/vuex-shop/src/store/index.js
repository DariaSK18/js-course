/* eslint-disable */
import { createStore } from "vuex";
import { products, currencies, convertCurrency } from "@/constants/productsArray";

export default createStore({
  state() {
    return {
      productsArrayData: products,
      // convertedPricesProducts: [],
      filteredList: [],
      cartItems: [],
      totalPrice: 0,
      currencies: currencies,
      currentCurrency: null
    }
  },
  getters: {
    getProductsArray: ({productsArrayData, currentCurrency}) => {
      if(!currentCurrency) return productsArrayData
      else {
        return productsArrayData = convertCurrency(productsArrayData, currentCurrency.rate)
      }
    },
    // getFilteredList: (state) => 
    // },
  //     state.filteredList.map(el => {
  //     if(state.currentCurrency) {
  //       if(state.currentCurrency.code === 'UAH') el.price * 41.5
  //       if(state.currentCurrency.code === 'GBP') el.price * 56.81
  //     }
  // }),
    getCartItems: ({cartItems, currentCurrency}) => !currentCurrency ? cartItems : convertCurrency(cartItems, currentCurrency.rate),
    getTotalPrice: (state, getters) => state.totalPrice = getters.getCartItems.reduce((accum, item) => {
      return accum += parseFloat(item.price)
    }, 0).toFixed(2),
    getCurrencies: (state) => state.currencies,
    getCurrentCurrency: (state) => state.currentCurrency === null ? state.currencies[0] : state.currentCurrency
  },
  mutations: {
    // filterProducts(state, array) {
    //   state.filteredList = array.filter(product => product.price > 500)
    //   // console.log('Filtered:', state.filteredList);
    // },
    addToCart(state, itemId) {
      state.productsArrayData.forEach(item => {
          if(item.id === itemId) state.cartItems.push(item)
      })
    },
    deleteProduct(state, itemId) {
      state.cartItems.forEach((item, ind) => {
        if(item.id === itemId) state.cartItems.splice(ind, 1)
      })
    },
    getCurrencySymbol(state, selectedValue) {
      if (!selectedValue) return state.currentCurrency
    //   else{
        state.currentCurrency = currencies.find(c => c.code === selectedValue)
    //   }
      
    },
  },
  actions: {
    filtration({commit}, array) {
      commit('filterProducts', array)
    },
    addItemToCart({commit}, itemId) {
      commit('addToCart', itemId)
    },
    deleteItemInCart({commit}, itemId) {
      commit('deleteProduct', itemId)
    },
    findCurrencySymbol({commit}, selectedValue) {
      commit('getCurrencySymbol', selectedValue)
    }
  },
});
