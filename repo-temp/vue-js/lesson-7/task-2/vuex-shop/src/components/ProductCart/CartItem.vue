<template>
    <div className="container product">
        <div class="product_info">
            <div class="product_title">{{ productItem.title }}</div>
            <div class="product_price">{{ productItem.price }} {{ getCurrentCurrency.symbol }}</div>
        </div>
        <button class="product_button" @click="deleteItemInCart(productItem.id)">Delete</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
    export default {
        name: 'CartItem',
        props: {
            productItem: {
                type: Object,
                default: () => ({})
            },
        },
        computed: {
            ...mapGetters(['getCurrentCurrency'])
        },
        methods: {
            ...mapActions(['deleteItemInCart'])
        },
    }
</script>

<style lang="scss" scoped>
.product {
    padding: 10px;
    width: 400px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    border: 3px solid darkolivegreen;
    border-radius: 10px;
    align-items: center;
		// .product_info

		&_info {
            flex: 1;
            display: flex;
            justify-content: space-between;
            gap: 10px;
		}
		// .product_button

		&_button {
            border: 3px solid darkolivegreen;
            border-radius: 5px;
            padding: 5px;
            width: 70px;
		}
}
</style>