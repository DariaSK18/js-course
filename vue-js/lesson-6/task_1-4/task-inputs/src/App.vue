
<template>
  <age-verification-form v-model.check.setColor="userAge" @text-message="textLine = $event"/>
  <p>User Age : {{ textLine == '' ? userAge : textLine }}</p>
  <hr>
  <path-to-js-file v-model.checkPath="path" @text="text = $event"/>
  <p>URL : {{ text == '' ? path : text }}</p>
  <hr>
  <email-domen-edu v-model="email" @add-text="emailText = $event"/>
  <p>Email : <span :class="{'red':!email}">{{ email ? `${emailText}@inv.mn.edu` : emailText}}</span></p>
  <hr>
  <user-form v-model.trim="user" @wrong="errorMessage = $event"/>
  <p v-if="user.name && user.age">{{ user.name }} - {{ user.age }}</p>
  <p v-if="errorMessage">{{ errorMessage }}</p>
  
</template>

<script>
import AgeVerificationForm from "./components/AgeVerificationForm.vue";
import PathToJsFile from "./components/PathToJsFile.vue";
import EmailDomenEdu from './components/EmailDomenEdu.vue';
import UserForm from "./components/UserForm.vue";

export default {
  name: "App",
  components: {
    AgeVerificationForm,
    PathToJsFile,
    EmailDomenEdu,
    UserForm,
  },
  data() {
    return {
      userAge: null,
      textLine: '',
      path: '',
      text: '',
      email: '',
      emailText: 'Enter your email',
      errorMessage: '',
      user: {
        name: '',
        age: null
      }
    }
  },
  watch: {
    email(newValue) {
      if (newValue === '') this.emailText = 'Enter your email'
    },
    'user.age'(newValue) {
      if(newValue && this.user.age === newValue) this.errorMessage = ''
    }
  },
};
</script>

<style>
.red {
    color: red;
}
</style>
