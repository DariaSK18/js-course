// eslint-disable-next-line
/* eslint-disable */
<template>
    <div>
        <h2>Welcome to our store!</h2>
        <!-- {{ $store.state.productsArrayData }}
        <hr />
        {{ $store.state.filteredList }} -->
        <currency-converter v-model="selectedCurrency"/>
        <!-- {{ selectedCurrency }} -->
        <products-list />
        <product-cart/>
    </div>
</template>

<script>
import ProductsList from './ProductsList'
import ProductCart from "./ProductCart";
import CurrencyConverter from "./CurrencyConverter.vue";
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ProductStore',
    components: {
        ProductsList,
        ProductCart,
        CurrencyConverter,
    },
    // props: {
    //         moduleValue: {
    //             type: Object,
    //             required: true,
    //         },
    //     },
    // data() {
    //     return {
    //         getCurrentCurrency: null,
    //     }
    // },
    computed: {
        ...mapGetters(['getCurrentCurrency']),
        selectedCurrency: {
            get(){
                return this.getCurrentCurrency
            },
            set(val){
                this.findCurrencySymbol( val)
            }
        }
    },
    methods: {
        ...mapActions(['findCurrencySymbol']),
        // findCurrencySymbol(val) {
        //     this.getCurrencySymbol(val)
        // }
    },
}
</script>

<style lang="scss" scoped></style>
