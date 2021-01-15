<template>
  <div>
    <form action="" @submit.prevent="onSubmit">
      <input type="text" v-model="emailUser" placeholder="email">
      <div v-if="$v.emailUser.required.$invalid">Enter email</div>
      <div v-if="$v.emailUser.email.$invalid">Need correct email</div>
      <input type="text" v-model="name" placeholder="f">
      <div v-if="$v.name.required.$invalid">Enter name</div>
      <input type="text" v-model="password" placeholder="1">
      <div v-if="$v.password.required.$invalid">Enter password</div>
      <button type="submit">Go</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  name: "Lessons",
  setup() {
    const name = ref('')
    const emailUser = ref('')
    const password = ref('')
    const rules = {
      emailUser: {required, email},
      name: {required},
      password: {required}
    }

    const $v = useVuelidate(rules, {emailUser, name, password})

    const onSubmit = () => {
      $v.value.$touch()
      if (!$v.value.$error) {
        const formData = {
          emailUser: emailUser.value,
          name: name.value,
          password: password.value
        }
        console.log(formData)
      }
    }

    return {
      emailUser,
      name,
      password,
      $v,
      onSubmit
    }
  }

}
</script>
