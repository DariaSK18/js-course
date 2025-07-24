<template>
    <div class="container">
        <products-list
        :laptopsList="filteredLaptops"/>
        <products-filters
        :sellersList="sellersList"
        :brandsList="brandsList"
        v-model:selectedSellers="selectedSellers"
        v-model:selectedBrands="selectedBrands"/>
        <!-- {{ sellersList }}
        {{ brandsList }} -->
         <!-- {{ selectedSellers }} -->
    </div>
</template>

<script>
import ProductsList from "./ProductsList";
import ProductsFilters from "./ProductsFilters";

    export default {
        name: 'LaptopsSection',
        components: {
            ProductsList,
            ProductsFilters,
        },
        props: {
            laptopsList: {
                type: Array,
                default: () => ([])
            },
            sellersList: {
                type: Array,
                default: () => ([])
            },
            brandsList: {
                type: Array,
                default: () => ([])
            }
        },
        data() {
            return {
                selectedSellers: [],
                selectedBrands: [],
            }
        },
        computed: {
            filteredLaptops() {
                if(this.selectedSellers.length === 0 && this.selectedBrands.length === 0) return this.laptopsList

                const selectedNamesSellers = this.selectedSellers.map(seller => seller.name)
                const selectedNamesBrands = this.selectedBrands.map(brand => brand.name)
                return this.laptopsList.filter(laptop => selectedNamesSellers.includes(laptop.seller) || selectedNamesBrands.includes(laptop.brand))  
            }
               
        }
    }
</script>

<style scoped>
.container {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    width: 100%;
}
</style>