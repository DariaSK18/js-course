<template>
    <div>
        <label>Email : </label>
        <input type="text" v-model.lazy="emailDomen" @keyup.enter="addText"> <span>@inv.mn.edu</span>
    </div>
</template>

<script>
    export default {
        name: 'EmailDomenEdu',
        props: {
            modelValue: {
                type: String,
                required: true,
            },
        },
        // computed: {
        //     emailDomen: {
        //         get() {
        //         return this.modelValue
        //         },
        //         set(newValue) {
        //             this.$emit('update:modelValue', newValue)
        //         }
        //     }
        // },
        watch: {
            modelValue(newValue) {
                this.emailDomen = newValue.replace('@inv.mn.edu', '')
            }
        },
        data() {
            return {
                emailDomen: '',
            }
        },
        methods: {
            addText() {
                const fullEmail = `${this.emailDomen}@inv.mn.edu`
                this.$emit('update:modelValue', fullEmail)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>