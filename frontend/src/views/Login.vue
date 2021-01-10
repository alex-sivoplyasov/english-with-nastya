<template>
  <form @submit.prevent="login">
    <input type="text" v-model="userEmail" @blur="handleBlur('userEmail')">
<!--    <ErrorMessage :validationStatus="$v.userEmail" />-->
    <input type="password" v-model="userPassword" @blur="handleBlur('userPassword')">
<!--    <ErrorMessage :validationStatus="$v.userPassword" />-->

    <button :disabled="$v.$invalid" type="submit">Login</button>
  </form>
</template>

<script>
import { ref } from "@vue/composition-api";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
  name: "Login",
  data: () => ({
    email: null,
    password: null
  }),
  setup(){
    const userEmail = ref("");
    const userPassword = ref("");
    const rules = {
      userEmail: { required, email },
      userPassword: { required, minLength: minLength(8) }
    };
    const $v = useVuelidate(
        rules,
        { userEmail, userPassword }
    );
    const handleBlur = (key) =>{
      $v[key].$dirty = true;
    };
    const login = () => {
      $v.$dirty = true;
      if (!$v.$error) {
        // DO SOMETHING
      }
    };
    return {
      userEmail,
      userPassword,
      $v,
      handleBlur,
      login
    };
  }
}
</script>

<style scoped>

</style>