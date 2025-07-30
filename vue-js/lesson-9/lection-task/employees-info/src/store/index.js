import { createStore } from "vuex";
import { employees } from "@/constants/employeesData";

export default createStore({
  state: {
    employeesList: [],
  },
  getters: {
    getEmployeesList: (state) => state.employeesList,
    getEmployeeById: (state) => (employeeId) =>
      state.employeesList.find((e) => e.id == employeeId),
  },
  mutations: {
    setEmployeesData(state, employeesData) {
      state.employeesList = employeesData;
    },
    updateEmployeeInfo(state, employeeData) {
      const currentIndex = state.employeesList.findIndex(
        (e) => e.id === employeeData.id
      );
      state.employeesList[currentIndex] = { ...employeeData };
    },
    createNewEmployee(state, employeeData) {
      state.employeesList.push({
        id: crypto.randomUUID,
        ...employeeData
    });
    },
    deleteEmployee(state, employeeId) {
      const employeeIdToDelete = state.employeesList.findIndex(e => e.id == employeeId)
      state.employeesList.splice(employeeIdToDelete, 1)
      // state.employeesList = state.employeesList.filter(e => e.id !== employeeId)
    }
  },
  actions: {
    loadEmployeesData({ commit }) {
      commit("setEmployeesData", employees);
    },
    updateEmployeeInfo({ commit }, employeeData) {
      commit("updateEmployeeInfo", employeeData);
    },
    addNewEmployee({ commit }, employeeData) {
      commit("createNewEmployee", employeeData);
    },
    deleteEmployee({commit}, employeeId) {
      commit('deleteEmployee', employeeId)
    }
  },
});
