// eslint-disable-next-line
<template>
    <product-store className="container"/>
    <!-- {{ $store.state.productsArrayData }}
    <hr />
    {{ $store.state.filteredList }} -->
</template>

<script>
import ProductStore from './components/ProductStore.vue'

export default {
    name: 'App',
    components: {
        ProductStore,
    },
}
</script>

<style lang="scss">
.container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
}
</style>
