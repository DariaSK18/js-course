<template>
    <div class="container">
        <h4>Brands <span class="grey">({{ brandsList.length }})</span></h4>
        <div><input type="text" placeholder="Search" v-model="searchFilter"></div>
        <div>
            <div class="sort">
                <label>Sort by </label>
                <select name="brand">
                    <option selected disabled>Select</option>
                    <option value="alphabet">Alphabet</option>
                    <option value="popularity">Popular</option>
                </select>
            </div>
        <brand-item 
        v-for="brand in filteredBrands" 
        :key="brand.id" 
        :brandItem="brand"
        v-model="internalSelected"/>
        </div>
    </div>
</template>

<script>
import BrandItem from "./BrandItem.vue";

    export default {
        name: 'BrandsSearch',
        components: {
            BrandItem,
        },
        props: {
            brandsList: {
                type: Array,
                default: () => ([])
            },
            modelValue: {
                type: Array,
                required: true,
            },
        },
        data() {
            return {
                searchFilter: ''
            }
        },
        computed: {
            internalSelected: {
                get(){
                    return this.modelValue
                },
                set(newVal){
                    return this.$emit('update:modelValue', newVal)
                }
            },
            filteredBrands() {
                if(!this.searchFilter.trim()) return this.brandsList

                const filter = this.searchFilter.trim().toLocaleLowerCase()
                return this.brandsList.filter(brand => brand.name.toLocaleLowerCase().startsWith(filter))
            }
        },
    }
</script>

<style  scoped>
.grey {
    color: grey;
}
.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.sort {
    margin-bottom: 10px;
}
</style>