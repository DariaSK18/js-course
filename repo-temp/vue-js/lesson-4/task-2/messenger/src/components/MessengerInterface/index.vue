<template>
    <div class="container">
        <message-item v-for="text in messagesList" :key="text.id" :text-message="text" @like="increaseLike(text.id)" @dislike="decreaseLike(text.id)"/>
        <div class="message-input">
            <input ref="textToSend" v-model.lazy="textToSend" type="text" placeholder="Type a new message">
            <button @click="sendMessage">Send</button>
        </div>
    </div>
</template>

<script>
import MessageItem from './MessageItem.vue';
    export default {
        name: 'MessengerInterface',
        components: {
            MessageItem,
        },
        props: {
            messagesList: {
                type: Array,
                default: () => [],
            }
        },
        data() {
            return {
                textToSend: '',
            }
        },
        mounted() {
            this.$refs.textToSend.focus()
        },
        methods: {
            increaseLike(messageId) {
                let message = this.messagesList.find(el => el.id === messageId)
                message.likes++
            },
            decreaseLike(messageId) {
                let message = this.messagesList.find(el => el.id === messageId)
                message.dislikes++
            },
            sendMessage() {
                this.$emit('send', this.textToSend)
                this.textToSend = ''
            }
          }
    }
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 400px;
    margin: 0 auto;
    justify-content: end;
}
.message-input {
    display: flex;
    gap: 10px;
    input {
        padding: 10px;
        width: 100%;
        border-radius: 10px;
        border: 2px solid darkcyan;
    }
    button {
        padding: 10px;
        border-radius: 10px;
        border: 2px solid darkcyan;
    }
}
</style>