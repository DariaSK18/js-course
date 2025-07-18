<template>
    <div class="container">
        <div class="message" :message="text-message">
            <p>{{ textMessage.text }}</p>
            <div class="likes-block">
                <span>Likes: {{ textMessage.likes }}</span>
                <span>Dislikes: {{ textMessage.dislikes }}</span>
                <div class="likes-button">
                    <button @click="increaseLike">👍</button>
                    <button @click="decreaseLike">👎</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MessageItem',
        props: {
            textMessage: {
                type: Object,
                required: true,
                // default: () => ({})
            }
        },
        methods: {
            // like() {
            //     return this.textMessage.likes++
            // },
            increaseLike() {
                this.$emit('like')
            },
            decreaseLike() {
                this.$emit('dislike')
            }
        }
    }
</script>

<style lang="scss" scoped>
.container {
    border: 2px solid darkcyan;
    border-radius: 10px;
    padding: 5px;
    width: max-content;
    height: max-content;
}

.likes-block {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    span {
        font-size: 14px;
        color: grey;
    }
}
.likes-button {
    display: flex;
    gap: 10px;
    button {
        width: 50px;
        border-radius: 10px;
        border: 2px solid darkcyan;
    }
}
</style>