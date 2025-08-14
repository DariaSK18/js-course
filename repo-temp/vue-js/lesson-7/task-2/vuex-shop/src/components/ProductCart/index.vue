<template>
    <div>
        <h3>Cart</h3>
        <div className="products">
            <cart-item v-for="item in getCartItems" :key="item.id" :product-item="item"/>
        </div>
        <div className="pay-block">
            <p>
                <span>Total price: </span>
                <span>{{ getTotalPrice }} {{ getCurrentCurrency.symbol }}</span>
            </p>
            <button>Pay Now!</button>
        </div>
       
    </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapGetters } from "vuex";

    export default {
        name: 'ProductCart',
        components: {
            CartItem,
        },
        computed: {
            ...mapGetters(['getCartItems', 'getTotalPrice', 'getCurrentCurrency'])
        },
    }
</script>

<style lang="scss" scoped>
.products {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}
.pay-block {
    border: 3px solid black;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    max-width: 300px;
    margin-top: 10px;
    button {
        padding: 10px;
        border-radius: 5px;
        border: 3px solid darkgreen;
        font-weight: 700;
    }
}
</style>