<template>
    <div>
        <!-- <h4>Make</h4> -->
        <select v-model="selectedMake">
            <option selected value="">Select</option>
            <option v-for="make in getUniqueOptions" :key="make" :value="make">
                {{ make }}
                <!-- {{ $store.state.uniqueValues }} -->
            </option>
        </select>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
    export default {
        name: 'MakeSort',
        props: {
            modelValue: {
                type: String,
                default: ''
            },
            keyField: {
                type: String,
                required: true
            }
        },
        computed: {
            ...mapGetters(['getUniqueValues']),
            getUniqueOptions() {
                // console.log(this.getUniqueValues);
                // console.log(this.keyField)
                return this.getUniqueValues[this.keyField] || []
            },
            selectedMake: {
                get() {
                    return this.modelValue
                },
                set(newVal) {
                    this.$emit('update:modelValue', newVal)
                    this.filterCars({keyField: this.keyField, selected: newVal})
                }
            }
        },
        methods: {
            ...mapActions(['findUniqueValues', 'filterCars'])
        },
        mounted() {
            this.findUniqueValues(this.keyField)
        }
        
    }
</script>

<style lang="scss" scoped>

</style>