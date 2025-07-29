/* eslint-disable */
<template>
    <h3>Products List</h3>
    <div className="products">
        <product-item v-for="product in getProductsArray" :key="product.id" :product-data="product"/>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductItem from './ProductItem.vue';

    export default {
        name: 'ProductsList',
        components: {
            ProductItem,
        },
        computed: {
            ...mapGetters(['getProductsArray', 'getFilteredList'])
        },
        methods: {
            ...mapActions(['filtration', 'getProductsConverted']),
        },
        created() {
            // console.log('Products:', this.getProductsArray);
            // this.filtration(this.getProductsArray)
        },
    }
</script>

<style lang="scss" scoped>
.products {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}
</style>