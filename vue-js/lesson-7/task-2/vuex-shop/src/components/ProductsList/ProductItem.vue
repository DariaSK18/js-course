<template>
    <div className="container product">
        <div class="product_info">
            <div class="product_title">{{ productData.title }}</div>
            <div class="product_price">{{ productData.price }} {{ getCurrentCurrency.symbol }}</div>
        </div>
        <button class="product_button" @click="addItemToCart(productData.id)">Buy</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
    export default {
        name: 'ProductItem',
        props: {
            productData: {
                type: Object,
                default: () => ({})
            },
        },
        computed: {
            ...mapGetters(['getCurrentCurrency'])
        },
        methods: {
            ...mapActions(['addItemToCart']),
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