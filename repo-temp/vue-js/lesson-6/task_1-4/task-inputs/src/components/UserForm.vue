<template>
    <div>
        <div class="name">
            <label>Your name : </label>
            <input :class="{'red':!userName}" type="text" v-model="userName">
        </div>
         <br>
        <div class="age">
            <label>Your age : </label>
            <input :class="colorSet" type="number" v-model.number="userAge">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserForm',
        props: {
            modelValue: {
                type: Object,
                required: true,
            },
            modelModifiers: {
                default: () =>({})
            }
        },
        computed: {
            userName: {
                get() {
                    return this.modelValue.name
                },
                set(newValue) {
                    const name = this.modelModifiers.trim ? newValue.trim() : newValue
                    this.$emit('update:modelValue', {
                        ...this.modelValue,
                        name
                    })
                    // if(this.modelModifiers.trim) {
                    //     newValue = newValue.trim()
                    //     this.$emit('update:modelValue', {
                    //         ...this.modelValue,
                    //         name: newValue
                    //     }) 
                    // }
                }
            },
            userAge: {
                get() {
                    return this.modelValue.age
                },
                set(newValue) {
                    if(newValue <= 0 || newValue > 150) {
                        this.$emit('wrong', 'Age is not valid')
                        return
                    }
                    this.$emit('update:modelValue', {
                        ...this.modelValue,
                        age: newValue
                    })
                }
            },
            colorSet() {
                if(this.modelValue.age < 18) return 'red'
                else return 'green'
            }
        },
    }
</script>

<style scoped>
.red {
    background-color: red;
    color: black;
}
.green {
    background-color: green;
}
</style>