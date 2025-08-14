<template>
    <div>
        <label>Email : </label>
        <input type="text"  v-model.lazy="emailDomen" @keyup.enter="addText()"> <span>@inv.mn.edu</span>
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
        computed: {
            emailDomen: {
                get() {
                return this.modelValue
                },
                set(newValue) {
                    this.$emit('update:modelValue', newValue)
                }
            }
        },
        methods: {
            addText() {
                if (this.modelValue.trim()) this.$emit('addText', this.modelValue)
            }
        }
    }
</script>

<style scoped>
</style>