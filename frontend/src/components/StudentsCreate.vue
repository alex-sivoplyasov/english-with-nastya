<template>
  <div>
    <form @submit.prevent="submitForm" >
      <input type="text" v-model="name" placeholder="Имя">
<!--      <div v-if="!$v.age.required">Введите имя</div>-->
      <input type="text" v-model="parentName" placeholder="Имя родителя">
      <input type="number" v-model="age" placeholder="Age">
      <input type="number" v-model="rate" placeholder="Rate">
      <input type="file" name="file" @change="previewFiles" ref="file">
      <button type="submit">Отправить</button>
    </form>
  </div>
</template>

<script>
  import { uploadsUrl} from "../../utils/constants"
  // import { reactive, toRefs } from "@vue/composition-api";
  // import { required, minValue } from 'vuelidate/lib/validators'

  export default {
    name: "StudentsCreate",
    data: () => ({
      name: null,
      parentName: null,
      rate: null,
      image: '',
      age: null,
      class: null,
      file: null,
    }),
    // validations: {
    //   name: {
    //     required,
    //   },
    //   rate: {
    //     required,
    //     minValue: minValue(0)
    //   }
    // },
    methods: {
      previewFiles() {
        this.file = this.$refs.file.files[0]
      },
      async submitForm() {
        // this.$v.$touch()
        // if (this.$v.$invalid) {
        //
        //   console.log('this.$v.name.$dirty', this.$v.age.$dirty)
        //   console.log('this.$v.name.required', this.$v.age.required)
        //   console.log('this.$v.name', this.$v.age)
        //   return ''
        // }
        //
        // // return ''


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