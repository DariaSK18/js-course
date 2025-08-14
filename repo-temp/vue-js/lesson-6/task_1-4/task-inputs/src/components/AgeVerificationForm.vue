
<template>
    <div>
        <label>Your age : </label>
        <input type="text" :class="colorClass" v-model.number.lazy="inputValue" >
    </div>
</template>

<script>
    export default {
        name: 'AgeVerificationForm',
        props: {
            modelValue: {
                type: Number,
                required: true,
            },
            modelModifiers: {
                default: () => ({})
            },
        },
        computed: {
            inputValue: {
                get() {
                    return this.modelValue
                },
                set(newValue) {
                    if(this.modelModifiers.check) newValue = this.check(newValue)
                    this.$emit('update:modelValue', newValue)
                }
            },
            colorClass() {
                let value = this.modelValue
                if(value) {
                    if(!this.modelModifiers.setColor) return ''
                    if (value < 10) return 'green'
                    if (value >= 10 && value < 21) return 'orange'
                    if (value >= 21) return 'blue'
                    else return ''
                }
                else return ''
            }
        },
        methods: {
                check(value) {
                    if(value <= 0 || value > 150 || isNaN(value)) {
                        this.$emit('text-message', 'not valid age' )
                        return ''
                    }
                    this.$emit('text-message', '');
                    return value
                },
        },
    }
    

</script>

<style scoped>
.green {
    background-color: green;
}
.orange {
    background-color: orange;
}
.blue {
    background-color: blue;
}
</style>