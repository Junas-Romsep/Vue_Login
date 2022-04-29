<template>
  <div class="login">
      <h1>Register</h1>
      <form @submit.prevent="register">
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <input type="submit" value="Register">
        <p>Have an account? <router-link to = "/login">Login here!</router-link></p>
      </form>
  </div>
</template>

<script>
 import{ ref } from "vue";
 import firebase from 'firebase';

export default {
setup(){
      const email = ref("");
      const password = ref("");
       const Register = () =>{
        firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(user => {
              alert(user);

        })
        .catch(err => alert (err.message));
      }
            return{
        Register,
        email,
        password
      }
}
}
</script>

<style>

</style>