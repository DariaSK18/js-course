<template>
    <div>
        <task-to-do v-for="task in tasksList" :key="task.id" :task="task"
        />
        <!-- <div>{{ personName }}</div> -->
        <!-- <pre>{{ tasksList }}</pre> -->
    </div>
</template>

<script>
import TaskToDo from './TaskToDo.vue';

    export default {
        name: 'AssignedTasks',
        components: {
            TaskToDo,
        },
        props: {
            tasksList: {
                type: Array,
                default: () => []
            },
        },
        computed: {
            // personName(){
            //     const name = this.tasksList.find(el => el[0])
            //     // console.log(name.personName)
            //     return name
            // }
        },
    }
</script>

<style lang="scss" scoped>

</style>