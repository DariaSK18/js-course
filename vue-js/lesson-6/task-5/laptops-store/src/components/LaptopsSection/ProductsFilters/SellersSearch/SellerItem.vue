<template>
    <div>
        <input 
        type="checkbox"
        :value="sellerItem"
        v-model="selectedSellers">
        <label>{{ sellerItem.name }}</label>
        <!-- {{ selectedSellersList }} -->
        <!-- {{ modelValue }} -->
    </div>
</template>

<script>
    export default {
        name: 'SellerItem',
        props: {
            sellerItem: {
                type: Object,
                default: () => ({})
            },
            modelValue: {
                type: Array,
                required: true
            },
        },
        computed: {
            selectedSellers: {
                get() {
                    return this.modelValue
                },
                set(newVal) {
                    this.$emit('update:modelValue', newVal)   
                }
            }    
        }
    }
</script>

<style scoped>

</style>