<template>
    <div class="container">
        <div class="favourite">*</div>
        <div class="picture">
            <img :src="viewedItemData.image" alt="Image">
        </div>
        <h5 class="title">{{ viewedItemData.name }}</h5>
        <a href="#">leve a review</a>
        <p :class="statusColor" v-if="viewedItemData.available">In stock</p>
        <p :class="statusColor" v-else>Out of stock</p>
        <div v-if="viewedItemData.oldPrice" class="old-price">{{ viewedItemData.oldPrice }}</div>
        <div class="priceTag" :class="{
            'red':viewedItemData.oldPrice
        }">{{ viewedItemData.price }}</div>
    </div>
</template>

<script>
    export default {
        name: 'ViewedItem',
        props: {
            viewedItemData: {
                type: Object,
                default: () => ({}),
            },
        },
        computed: {
            statusColor() {
                return this.viewedItemData.available ? 'green' : 'grey'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .green {
        color: green;
    }
    .grey {
        color: grey;
    }
    .container {
        max-width: 200px;
        padding: 10px;
        text-align: center;
        border: 1px solid black;
        margin: 10px 0;
    }
    .favourite {
        text-align: right;
    }
    .picture {
        width: 200px;
        height: 200px;
    }
    img {
        width: 100%;
        height: 100%;
    }
    .old-price {
        text-decoration: line-through;
        color: lightgray;
    }
    .red {
        color: red;
    }

</style>