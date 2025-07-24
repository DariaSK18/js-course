<template>
    <div class="container">
        <list-element v-for="laptop in laptopsList" :key="laptop.id" :laptop="laptop"/>
    </div>
</template>

<script>
import ListElement from "./ListElement.vue";
    export default {
        name: 'ProductList',
        components: {
            ListElement,
        },
        props: {
            laptopsList: {
                type: Array,
                default: () => []
            },
        },
    }
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-items: center;
    margin: 0 auto;
}
</style>