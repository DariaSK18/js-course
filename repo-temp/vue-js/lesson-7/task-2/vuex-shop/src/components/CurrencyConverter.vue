<template>
    <div>
        <label for="currency">Select currency </label>
        <select v-model="selected" id="currency">
            <option disabled value="">currency</option>
            <option v-for="currency in getCurrencies" :key="currency.id" :value="currency.code">{{ currency.code }}</option>
        </select>
        <!-- {{ getCurrencies }}   -->
        <!-- {{ selected }} -->
        <!-- {{ findCurrencySymbol(selected) }} -->
        <!-- {{ getCurrentCurrency }} -->
        
    </div>
</template>

<script>
import { mapGetters,
    //  mapActions
     } from "vuex";

    export default {
        name: 'CurrencyConverter',
        // data() {
        //     return {
        //         selected: null,
        //     }
        // },
        props: {
            modelValue: {
                type: Object,
                // required: true,
            },
        },
       
        computed: {
            ...mapGetters(['getCurrencies', 
            // 'getCurrentCurrency'
        ]),
            selected: {
                get(){
                    return this.modelValue
                },
                set(newVal) {
                    this.$emit('update:modelValue', newVal)
                }
            }
        },
        // methods: {
        //     ...mapActions(['findCurrencySymbol'])
        // },
    }
</script>

<style lang="scss" scoped>

</style>