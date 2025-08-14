<template>
    <div class="task-box">
        <h3>Tasks</h3>
        <task-to-choose v-for="task in tasksList" :key="task.id" :task-data="task" :employees-data="employeesList" @selected="$emit('selected', {taskId: task.id, employeeId: $event})"
       
        />
        <!-- <pre>{{ tasksList }}</pre>
        <pre>{{ employeesList }}</pre> -->

        <!-- <pre>{{ $event }}</pre> -->
    </div>
</template>

<script>
import TaskToChoose from "./TaskToChoose.vue";
    export default {
        name: 'TaskAllocator',
        components: {
            TaskToChoose,
        },
        props: {
            tasksList: {
                type: Array,
                default: () => []
            },
            employeesList: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>
h3 {
    text-align: center;
}
.task-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>