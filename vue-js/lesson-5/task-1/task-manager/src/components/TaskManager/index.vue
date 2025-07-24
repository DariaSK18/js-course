<template>
    <div class="container">
        <task-allocator :tasks-list="tasksList" :employeesList="employeesList" @selected="taskSelected"/>
        <!-- <pre>{{ tasksList }}</pre>
        <pre>{{ employeesList }}</pre> -->
        <!-- <pre>{{ assignedTasksList }}</pre> -->
        <assigned-tasks :tasks-list="assignedTasksList"/>
    </div>
</template>

<script>
import TaskAllocator from "./TaskAllocator";
import AssignedTasks from "./AssignedTasks";
    export default {
        name: 'TaskManager',
        components: {
            TaskAllocator,
            AssignedTasks,
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
        },
        data() {
            return {
                assignedTasksList: [
                    // {
                    //     personName: null,
                    //     tasks: [],
                    //     id: null,
                    // },
                ],
            }
        },
        methods: {
            taskSelected({taskId, employeeId}) {
                const assignedTaskObj = this.assignedTasksList.find(ob => ob.id === employeeId)
                const employee = this.employeesList.find((el) => el.id === employeeId)
                const task = this.tasksList.find(el => el.id === taskId)
                if(assignedTaskObj) {
                    assignedTaskObj.tasks.push(taskId)
                }
                else {
                    this.assignedTasksList.push({
                        personName: employee.name,
                        tasks: [task.title],
                        id: employeeId.id,
                })
                    // console.log("Task assigned:", taskId, employeeId)
                    console.log(this.assignedTasksList)
                }
                
            },
        }

    }
</script>

<style lang="scss" scoped>

</style>