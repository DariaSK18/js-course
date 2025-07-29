<template>
    <div>
        <input type="number" min="0" 
        :max="currentYear"
         v-model.number.lazy="yearData">
        
    </div>
</template>

<script>
import { mapActions } from 'vuex'

    export default {
        name: 'YearSortComponent',
        data() {
            return {
                currentYear: new Date().getFullYear()
            }
        },
        props: {
            modelValue: {
                type: Number,
            },
        },
        computed: {
            yearData: {
                get() {
                    return this.modelValue
                },
                set(newVal) {
                    this.$emit('update:modelValue', newVal)
                    this.filterCarsUseYear(newVal)
                }
            }
        },
        methods: {
            ...mapActions(['filterCarsUseYear']),
        },
    }
</script>

<style lang="scss" scoped>

</style>