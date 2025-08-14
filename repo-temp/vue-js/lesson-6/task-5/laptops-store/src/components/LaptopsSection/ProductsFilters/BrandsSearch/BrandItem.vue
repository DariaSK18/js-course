<template>
    <div>
        <input type="checkbox"
        :value="brandItem"
        v-model="selectedBrands">
        <label>{{ brandItem.name }}</label>
    </div>
</template>

<script>
    export default {
        name: 'BrandItem',
        props: {
            brandItem: {
                type: Object,
                default: () => ({})
            },
            modelValue: {
                type: Array,
                required: true
            }
        },
        computed: {
            selectedBrands: {
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

</style>