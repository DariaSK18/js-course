<template>
    <div class="container">
        <viewed-item v-for="item in viewedItemsList" :viewed-item-data="item" :key="item.id"/>
    </div>
</template>

<script>
import ViewedItem from "./ViewedItem.vue";
    export default {
        name: 'RecentlyViewed',
        components: {
            ViewedItem,
        },
        props: {
            viewedItemsList: {
                type: Array,
                default: () => [],
            }
        },
    }
</script>

<style lang="scss" scoped>
   
</style>