<template>
    <div class="container">
        <h3>Result</h3>
        <div class="container">
            <!-- {{ getFilteredCars }} -->
            <single-auto-card v-show="getFilteredCars.length" v-for="auto in getFilteredCars" :key="auto.id" :auto-data="auto"/>
            <p v-show="!getFilteredCars.length">No Cars In The List</p>
        </div>
    </div>
</template>

<script>
import SingleAutoCard from "./SingleAutoCard.vue";
import { mapActions, mapGetters } from "vuex";
    export default {
        name: 'AutoDisplaySection',
        components: {
            SingleAutoCard,
        },
        computed: {
            ...mapGetters(['getAutoData', 'getFilteredCars'])
        },
        methods: {
            ...mapActions(['findFilteredCars'])
        },
    }
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    gap: 10px;
}
</style>