<template>
    <div>
        <input type="number" v-model.number.lazy="priceData" min="0" step="100">
    </div>
</template>

<script>
import { mapActions } from "vuex";
    export default {
        name: 'PriceSort',
        props: {
            modelValue: {
                type: Number,
            },
        },
        computed: {
            priceData: {
                get() {
                    return this.modelValue
                },
                set(newVal) {
                    this.$emit('update:modelValue', newVal)
                    this.filterCarsUsePrice(newVal)
                }
            }
        },
        methods: {
            ...mapActions(['filterCarsUsePrice'])
        },
    }
</script>

<style lang="scss" scoped>

</style>