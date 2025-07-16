<template>
        <div class="container">
            <a href="#">
                <img :src="productData.image" alt="Image">
            </a>
        </div>
</template>

<script>
    export default {
        name: 'SinglePhone',
        props: {
            productData: {
                type: Object,
                default: () => ({}),
            },
        },
    }
</script>

<style lang="scss" scoped>
    .container {
        width: 200px;
        height: 200px;
        border: 1px solid black;
        padding: 10px;
        text-align: center;
    }
    img {
        width: 100%;
        height: 100%;
    }
</style>