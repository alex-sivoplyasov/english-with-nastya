<template>
  <div>
    <form @submit.prevent="submitForm" >
      <input type="text" v-model="name" placeholder="Имя">
<!--      <div v-if="!$v.age.required">Введите имя</div>-->
      <input type="text" v-model="parentName" placeholder="Имя родителя">
      <input type="number" v-model="age" placeholder="Возраст">
      <input type="number" v-model="rate" placeholder="Ставка в час">
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
      classNumber: null,
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


        if (this.file) {
          const formData = new FormData()
          formData.append('image', this.file)
          const res = await this.$store.dispatch('fileUpload', formData)
          this.image =  uploadsUrl + res.data.data.filename
        }

        try {
          const newStudent = await this.$store.dispatch('createStudent', {
            name: this.name,
            parentName: this.parentName,
            rate: this.rate,
            age: this.age,
            image: this.image,
            class: this.classNumber,
            active: true
          })

          this.$router.push({ path: `/students/${newStudent._id}`, query: { status: 'new' } })
          // this.$router.push(`/students/${newStudent._id}/&status=new`)
        } catch (e) {
          console.log(e)
        }
      },
    }
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
</style>