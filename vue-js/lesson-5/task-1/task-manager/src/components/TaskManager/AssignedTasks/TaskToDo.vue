<template>
    <div>
        <p class="selected-person">{{ task.personName }}</p>
        <ul>
            <li>{{ task.tasks[0] }}</li>
        </ul>
        <!-- <pre>{{ tasksList }}</pre> -->
    </div>
</template>

<script>
    export default {
        name: 'TaskToDo',
        props: {
            task: {
                type: Object,
                default: () => ({})
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>