<template>
    <div>
        <label>Enter the path : </label>
        <input type="text" :class="{'red':!isCorrect}" v-model.lazy="path">
    </div>
</template>

<script>
    export default {
        name: 'PathToJsFile',
        props: {
            modelValue: {
                type: String,
                required: true,
            },
            modelModifiers: {
                default: () => ({})
            }
        },
        data() {
            return {
                isCorrect: true,
            }
        },
        computed: {
            path: {
                get() {
                    return this.modelValue
                },
                set(newValue) {
                    if (this.modelModifiers.checkPath) newValue = this.checkPath(newValue)
                    this.$emit('update:modelValue', newValue)
                }
            },
        },
        methods: {
            checkPath(value) {
                const regExp = /^\/+([\w-]+\/)*[\w-]+\.js$/
                this.isCorrect = regExp.test(value) 
                if (!this.isCorrect) {
                    this.$emit('text', 'Not valid url')
                    return null
                }
                else {
                    this.$emit('text', '')
                    return value
                }
            }
        }
    }
</script>

<style scoped>
.red {
    background: red;
}
</style>