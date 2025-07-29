import { createStore } from "vuex";
import { cars } from "@/constants/cars";

export default createStore({
  state: {
    autoData: cars,
    uniqueValues: {
      style: [],
      make: [],
      model: [],
      year: [],
      usage: [],
    },
    filteredCars: cars
  },
  getters: {
    getAutoData: (state) => state.autoData,
    getUniqueValues: (state) => state.uniqueValues,
    getFilteredCars: (state) => state.filteredCars
  },
  mutations: {
    getUniqueOptions(state, {array, keyField}) {
      // console.log(keyField);
      // console.log(array);
      
      const uniqueSet = new Set(array.map(el => el[keyField]))
      state.uniqueValues = {
        ...state.uniqueValues,
        [keyField]: Array.from(uniqueSet)

        // предложение AI для очистки пустых полей в массиве
        // .filter(Boolean)
      }
    // console.log(uniqueSet)
    // console.log(state.uniqueStyleValues)
    },
    filterCarsByStyles(state, {keyField, selected}) {

      // console.log(keyField)
      if (!selected.length) {
        state.filteredCars = state.autoData;
      } else {
        state.filteredCars = state.autoData.filter(car =>
          selected.includes(car[keyField])
        );
      }
    },
    filterCarsByPrice(state, val) {
      if(!val) state.filteredCars = state.autoData;
      else {
        return state.filteredCars = state.autoData.filter(el => {
          // console.log(el.price)
          // console.log(val)
          // console.log(state.filteredCars);
          return el.price <= val
      })
      }
    },
    filterCarsByYear(state, val) {
      if(!val || typeof val !== 'number' || val > new Date().getFullYear()) state.filteredCars = state.autoData;
      else {
        state.filteredCars = state.autoData.filter(el => {
          console.log(el.year)
          console.log(val)
          // console.log(state.filteredCars);
          return el.year === val
        })
      }
    },
  },
  actions: {
    findUniqueValues({commit, state}, keyField) {
      commit('getUniqueOptions', {array: state.autoData, keyField})
    },
    filterCars({commit}, {keyField, selected}) {
      commit('filterCarsByStyles', {keyField, selected})
    },
    filterCarsUsePrice({commit}, price) {
      commit('filterCarsByPrice', price)
    },
    filterCarsUseYear({commit}, year) {
      commit('filterCarsByYear', year)
    }
  },
});
