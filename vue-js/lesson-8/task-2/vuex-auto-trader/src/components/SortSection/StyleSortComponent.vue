<template>
    <div class="container">
        <div class="option"
        v-for="style in getUniqueOptions" :key="style">
            <input :id="style" type="checkbox"
            :value="style"
            v-model="selectedStyle"
            >
            <label :for=style>{{ style }}</label>
        </div>

        <!-- @change="getSelectedStyle(style)" -->

        <!-- {{ selectedStyle }} -->
        <!-- {{ modelValue }} -->
        <!-- {{ getUniqueOptions }} -->
        <!-- {{ getAutoData }} -->
          <!-- {{ findUniqueValues(getAutoData) }}
            {{ $store.state.uniqueStyleValues }} -->
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
    export default {
        name: 'StyleSort',
        // data() {
        //     return {
        //         selectedStyle: []
        //     }
        // },
        props: {
            modelValue: {
                type: Array,
                default: () => []
            },
            keyField: {
                type: String,
                required: true
            }
        },
        // watch: {
        //         selectedStyle: {
        //             handler(newVal) {
        //                 // console.log("watch", newVal)
        //                 this.filterCars(newVal)
        //             },
        //             deep: true
        //         }
                
        //     },
        computed: {
            ...mapGetters(['getAutoData', 'getUniqueValues']),
            getUniqueOptions() {
                return this.getUniqueValues[this.keyField] || []
            },
            selectedStyle: {
                get(){
                    // console.log(this.modelValue);
                    
                    return this.modelValue
                },
                set(newVal) {
                    // console.log(this.modelValue);
                    this.$emit('update:modelValue', newVal)
                    // console.log(this.modelValue);
                    this.filterCars({keyField: this.keyField, selected: newVal});
                }
            }
        },
        methods: {
            ...mapActions(['findUniqueValues', 'filterCars']),
            // getSelectedStyle(val){
            //     if(!this.selectedStyle.includes(val)) this.selectedStyle.push(val)
            //     else {
            // let indVal = this.selectedStyle.findIndex(el => val === el)
            // this.selectedStyle.splice(indVal, 1)
            //     }
            // }

        },
        mounted() {
            this.findUniqueValues(this.keyField)
            // this.filterCars(this.modelValue);
        },
    }
</script>

<style lang="scss" scoped>
// .container {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
// }
.option {
    display: flex;
    gap: 10px;
}
</style>