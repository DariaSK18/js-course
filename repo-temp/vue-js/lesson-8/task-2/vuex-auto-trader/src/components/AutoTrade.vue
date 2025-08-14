<template>
    <div class="container">
        <sort-section/>
        <auto-display-section/>
    </div>
</template>

<script>
import AutoDisplaySection from "./AutoDisplaySection";
import SortSection from "./SortSection";
    export default {
        name: 'AutoTrade',
        components: {
            AutoDisplaySection,
            SortSection,
        },
    }
</script>

<style lang="scss" scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 10px;
}
</style>