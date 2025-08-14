<template>
    <div>
        <h2>Filters</h2>
        <h3>Car Style : </h3>
        <style-sort-component v-model="selectedStyle" keyField="style"/>
        <h3>Make : </h3>
        <make-sort-component v-model="selectedMake" keyField="make"/>
        <h3>Price less than : </h3>
        <price-sort-component v-model="priceData"/>
        <h3>Year : </h3>
        <year-sort-component v-model="yearData"/>
        <!-- {{ $store.state.uniqueValues }} -->
        <!-- {{ selectedStyle }} -->
    </div>
</template>

<script>
import StyleSortComponent from "./StyleSortComponent";
import MakeSortComponent from "./MakeSortComponent";
import PriceSortComponent from "./PriceSortComponent.vue";
// import MileageSortComponent from "./MileageSortComponent";
// import ModelSortComponent from "./ModelSortComponent";
// import UsageSortComponent from "./UsageSortComponent";
import YearSortComponent from "./YearSortComponent";

    export default {
        name: 'SortSection',
        components: {
            StyleSortComponent,
            MakeSortComponent,
            // MileageSortComponent,
            // ModelSortComponent,
            PriceSortComponent,
            // UsageSortComponent,
            YearSortComponent,
        },
        data() {
            return {
                selectedStyle: [],
                selectedMake: '',
                priceData: 0,
                yearData: 0,
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>