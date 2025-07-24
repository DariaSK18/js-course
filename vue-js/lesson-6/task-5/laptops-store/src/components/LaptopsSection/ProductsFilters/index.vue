<template>
    <div>
        <sellers-search 
        :sellersList="sellersList"
        v-model="internalSelectedSellers"/>
        <brands-search 
        :brandsList="brandsList"
        v-model="internalSelectedBrands"/>
        <!-- {{ sellersList }}
        {{ brandsList }} -->
         <!-- {{ selectedSellers }} -->
    </div>
</template>

<script>
import BrandsSearch from "./BrandsSearch";
import SellersSearch from "./SellersSearch";

    export default {
        name: 'ProductsFilters',
        components: {
            BrandsSearch,
            SellersSearch,
        },
        props: {
            sellersList: {
            type: Array,
            default: () => []
            },
            brandsList: {
                type: Array,
                default: () => []
            },
            selectedSellers: {
                type: Array,
                default: () => []
            },
            selectedBrands: {
                type: Array,
                default: () => []
            }
            // modelValue: {
            //     type: Array,
            //     default: () => []
            // }
        },
        computed: {
            internalSelectedSellers: {
                get() {
                    return this.selectedSellers
                },
                set(newVal) {
                    this.$emit('update:selectedSellers', newVal)
                }
            },
            internalSelectedBrands: {
                get() {
                    return this.selectedBrands
                },
                set(newVal) {
                    this.$emit('update:selectedBrands', newVal)
                }
            },

        },
        
    }
</script>

<style lang="scss" scoped>

</style>