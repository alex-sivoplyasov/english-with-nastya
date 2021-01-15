<template>
  <div>
    <form @submit.prevent="submitForm" >
      <input type="text" v-model="name" placeholder="Имя" :class="{error: $v.name.required.$invalid}">
      <div class="error-text" v-if="$v.name.required.$invalid">Введите имя</div>
      <input type="text" v-model="parentName" placeholder="Имя родителя">
      <input type="number" v-model="age" placeholder="Возраст">
      <input type="number" v-model="rate" placeholder="Ставка в час" :class="{error: $v.rate.required.$invalid}">
      <div class="error-text" v-if="$v.rate.required.$invalid">Введите ставку</div>
      <input type="number" v-model="classNumber" placeholder="Класс">
      <input type="file" name="file" @change="previewFiles" ref="file" id="file">
      <label for="file" class="button">
        {{ file ? 'Файл выбран' : 'Выберите картинку'}}
      </label>
      <button type="submit" class="button">Отправить</button>
    </form>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { required } from '@vuelidate/validators'
  import store from "@/store";
  import router from "@/router";

  export default {
    name: "StudentsCreate",

    setup() {
      const name = ref('')
      const parentName = ref('')
      const rate = ref('')
      const image = ref('')
      const age = ref('')
      const classNumber = ref('')
      const file = ref('')

      const rules = {
        name: { required },
        rate: { required }
      }

      const $v = useVuelidate(rules, {name, rate})

      const previewFiles = () => {
        console.log('tttt', file)
        // this.file = this.$refs.file.files[0]
      }

      async function submitForm () {
        // if (this.file) {
        //   const formData = new FormData()
        //   formData.append('image', this.file)
        //   const res = await this.$store.dispatch('fileUpload', formData)
        //   this.image =  uploadsUrl + res.data.data.filename
        // }


        $v.value.$touch()
        if (!$v.value.$error) {
          try {
            const data = {
              name: name.value,
              parentName: parentName.value,
              rate: rate.value,
              image: image.value,
              age: age.value,
              classNumber: classNumber.value,
              active: true
            }

            const newStudent = await store.dispatch('createStudent', data)
            router.push({ path: `/students/${newStudent._id}`, query: { status: 'new' } })
          } catch (e) {
            console.log(e)
          }

        }
      }

      return {
        name,
        parentName,
        rate,
        age,
        image,
        classNumber,
        $v,
        previewFiles,
        submitForm,
        file
      }
    },
  }
</script>

<style scoped lang="scss">
  input {
    width: calc(100% - 24px);
    padding: 16px;
    border: none;
    border-radius: 8px;
    margin-bottom: 8px;
  }

  input:focus {
    outline: none;
    border: none;
  }

  #file {
    display: none;
  }

  label.button {
    background: #FBE9E7;
    color: #FF3D00;
  }

  label.button:hover {
    background: #FAF2F0;
  }

  .error-text {
    color: #E85C4A;
    margin-bottom: 8px;
    font-size: 12px;
  }

  input.error {
    background-color: #FED7D2;
    color: #E11900;
  }

  input.error::placeholder {
    color: #E11900;
  }
</style>