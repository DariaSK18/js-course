<template>
    <div>
        <h2>Compared List</h2>
            <h4>Phones</h4>
            <h6>Amount of products: {{ phoneItems.length }}</h6>
            <div class="container">
                <single-phone v-for="item in phoneItems" :key="item.id" :product-data="item"/>
            </div>
    </div>
</template>

<script>
import SinglePhone from './SinglePhone.vue';

    export default {
        name: 'PhonesCompare',
        components: {
            SinglePhone,
        },
        props: {
            phoneItems: {
                type: Array,
                default: () => [],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        gap: 10px;
    }
</style>