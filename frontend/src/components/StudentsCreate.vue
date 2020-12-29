<template>
  <div>
    <form @submit.prevent="submitForm" >
      <input type="text" v-model="name">
      <input type="text" v-model="parentName">
      <input type="number" v-model="age">
      <input type="file" name="file" @change="previewFiles" ref="file">
      <button type="submit">Отправить</button>
    </form>
  </div>
</template>

<script>
  import { uploadsUrl} from "../../utils/constants"
  // import { required, minValue } from 'vuelidate/lib/validators'

  export default {
    name: "StudentsCreate",
    data: () => ({
      name: null,
      parentName: null,
      image: '',
      age: null,
      class: null,
      file: null,
    }),
    methods: {
      previewFiles() {
        this.file = this.$refs.file.files[0]
      },
      async submitForm() {
        const formData = new FormData()
        formData.append('image', this.file)
        const res = await this.$store.dispatch('fileUpload', formData)
        this.image =  uploadsUrl + res.data.data.filename

        try {
          this.$store.dispatch('createStudent', {
            name: this.name,
            parentName: this.parentName,
            age: this.age,
            image: this.image
          })
        } catch (e) {
          console.log(e)
        }
      },
    }
  }
</script>

<style scoped>

</style>