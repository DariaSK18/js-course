<template>
  <div>
    <h1>Employee Info</h1>
    <h4>Name - {{ currentEmployee.name }}</h4>
    <p>Experience - {{ currentEmployee.experience }}</p>
    <p>Position - {{ currentEmployee.position }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "EmployeeProfile",
  computed: {
    ...mapGetters(["getEmployeeById"]),
    employeeId() {
      return this.$route.params.employeeId;
    },
    currentEmployee() {
      return this.getEmployeeById(this.employeeId);
    },
  },
};
</script>

<style lang="scss" scoped></style>
