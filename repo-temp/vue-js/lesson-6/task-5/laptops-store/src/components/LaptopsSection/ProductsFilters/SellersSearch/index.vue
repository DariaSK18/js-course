<template>
    <div>
        <h4>Seller <span class="grey">({{ sellersList.length }})</span></h4>
        <seller-item 
        v-for="seller in sellersList" 
        :key="seller.id" 
        :sellerItem="seller" 
        v-model="internalSelected"/>
        <!-- {{ internalSelected }} -->
    </div>
</template>

<script>
import SellerItem from "./SellerItem.vue";

    export default {
        name: 'SellersSearch',
        components: {
            SellerItem,
        },
        props: {
            sellersList: {
                type: Array,
                default: () => ([])
            },
            modelValue: {
                type: Array,
                default: () => [],
            }
        },
        // data() {
        //     return {
        //         selectedSellers: []
        //     }
        // },
        computed: {
            internalSelected:{
                get() {
                    return this.modelValue
                },
                set(newVal) {
                    this.$emit('update:modelValue', newVal)
                }
            }
        },
    }
</script>

<style scoped>
.grey {
    color: grey;
}
</style>