<template>
  <div>
      <div class="block" v-for="employee in getEmployeesList" :key="employee.id">
        <router-link
          :to="{
            name: 'employee',
            params: {
              employeeId: employee.id,
            },
          }"
        >
          {{ employee.name }}
        </router-link>
        <button @click="editEmployeeInfo(employee.id)">Edit</button>
        <button @click="deleteEmployee(employee.id)">Delete</button>
      </div>
  </div>
  <button @click="onAddNewEmployee" class="add">Add new employee</button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "EmployeesList",
  computed: {
    ...mapGetters(["getEmployeesList"]),
  },
  methods: {
    ...mapActions(["loadEmployeesData", 'deleteEmployee']),
    editEmployeeInfo(employeeId) {
      this.$router.push({
        name: "edit",
        params: {
          userId: employeeId,
        },
      });
    },
    onAddNewEmployee() {
        this.$router.push({
            name: 'edit'
        })
    },
  },
  created() {
    this.loadEmployeesData();
  },
};
</script>

<style lang="scss" scoped>
.block {
  display: flex;
  max-width: 400px;
  justify-content: space-between;
  //   flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid black;
  text-decoration: none;
}
button {
  width: 70px;
  padding: 5px;
}
.add {
    width: 200px;
    padding: 10px;
}
</style>
