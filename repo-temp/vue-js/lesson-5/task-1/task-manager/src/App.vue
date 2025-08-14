<template>
<task-manager :tasks-list="tasksList" :employees-list="employeesList"/>
<!-- <pre>{{ tasksList }}</pre>
<pre>{{ employeesList }}</pre> -->

</template>

<script>
import TaskManager from "./components/TaskManager"
import { tasksList, employeesList } from "@/constants/task_devider";

export default {
  name: 'App',
  components: {
    TaskManager,
  },
  data() {
    return {
      employeesList,
      tasksList,
    }
  },
}
</script>

<style>

</style>
