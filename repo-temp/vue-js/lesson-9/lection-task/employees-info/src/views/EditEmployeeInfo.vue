<template>
  <div>
    <div>
      <label for="name">Name</label>
      <input autocomplete="off" id="name" type="text" v-model="employeeData.name" />
    </div>
    <div>
      <label for="experience">Experience</label>
      <input
      autocomplete="off"
        id="experience"
        min="0"
        type="number"
        v-model="employeeData.experience"
      />
    </div>
    <div>
      <label for="position">Position</label>
      <input
      autocomplete="off" id="position" type="text" v-model="employeeData.position" />
    </div>
  </div>
  <button @click="onSave()">{{ buttonText }}</button>
  <button @click="onCancel()">Cancel</button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditEmployeeInfo",
  data() {
    return {
      employeeData: {
        name: null,
        experience: null,
        position: null,
      },
    };
  },
  computed: {
    ...mapGetters(["getEmployeeById"]),
    employeeId() {
      return this.$route.params.userId;
    },
    buttonText(){
      return this.employeeId? 'Save' : 'Add'
    }
  },
  methods: {
    ...mapActions(["updateEmployeeInfo", 'addNewEmployee']),
    onSave() {
      if(this.employeeId) this.updateEmployeeInfo(this.employeeData);
      else this.addNewEmployee(this.employeeData)
      this.$router.push({
        name: 'employees'
      })
    },
    onCancel(){
      this.$router.push({
        name: 'employees'
      })
    }
  },
  created() {
    if (this.employeeId)
      this.employeeData = { ...this.getEmployeeById(this.employeeId) };
  },
};
</script>

<style lang="scss" scoped></style>
