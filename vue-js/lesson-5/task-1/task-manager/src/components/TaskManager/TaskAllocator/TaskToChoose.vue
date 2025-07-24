<template>
    <div class="container">
        <div class="task">{{ taskData.title }}   </div>
        <select v-model="assignedPerson">
            <option :value="null" disabled>employee</option>
            <option v-for="employee in employeesData" :value="employee.id" :key="employee.id">{{ employee.name }}</option>
        </select>
    </div>
    <!-- <pre>{{ tasksData }}</pre>
        <pre>{{ employeesData }}</pre> -->
</template>

<script>
    export default {
        name: 'TaskToChoose',
        props: {
            taskData: {
                type: Object,
                default: () => ({})
            },
            employeesData: {
                type: Array,
                default: () => [],
            },
        },
        data() {
            return {
                assignedPerson: null,
            }
        },
        watch: {
            assignedPerson(selectedPerson) {
                this.$emit('selected',selectedPerson)
                console.log(this.assignedPerson)
            }
        },
    }
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 10px;
    border: 2px solid yellowgreen;
    border-radius: 20px;
}
select {
    padding: 5px;
    width: 100px;
    border-radius: 20px;
    color: green;
    border: 2px solid green;
}
</style>