<template>
  <messenger-interface class="container" :messages-list="messagesList" @send="sendMessage"/>
</template>

<script>
import MessengerInterface from "./components/MessengerInterface/";

export default {
  name: 'App',
  components: {
    MessengerInterface,
  },
  data() {
    return {
      messagesList : [],
    }
  },
  methods: {
    sendMessage(textToSend) {
      if(textToSend) {
        this.messagesList.push({
          id: crypto.randomUUID(),
          text: textToSend,
          sender: 'Vlad',
          likes: 0,
          dislikes: 0,
        })
      }
    }
  }
  // mounted() {
  //   this.$refs.textToSend.focus()
  // },
  
}
</script>

<style>
  .container {
    height: 500px;
    border: 2px solid darkcyan;
    border-radius: 10px;
    padding: 10px;
  }
</style>
