<template>
  <div>
    <form @submit.prevent="submitForm" v-if="student">
      <input type="text" v-model="student.name" placeholder="Имя">
      <!--      <div v-if="!$v.age.required">Введите имя</div>-->
      <input type="text" v-model="student.parentName" placeholder="Имя родителя">
      <input type="number" v-model="student.age" placeholder="Возраст">
      <input type="number" v-model="student.rate" placeholder="Ставка в час">
      <input type="number" v-model="student.class" placeholder="Класс">
      <input type="file" name="file" @change="previewFiles" ref="file" id="file">
      <label for="file" class="button">
        {{ file ? 'Файл выбран' : 'Выберите картинку'}}
      </label>
      <button type="submit" class="button">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "StudentsEdit",
  data: () => ({
    student: null,
    // name: null,
    // parentName: null,
    // rate: null,
    // image: '',
    // age: null,
    // class: null,
    file: null,
  }),
  async mounted() {
    this.student = await this.$store.dispatch('getStudent', this.$route.params.id)
  },
  methods: {
    async submitForm() {
      // console.log('fff')

      try {
        await this.$store.dispatch('updateStudent', {
          _id: this.student._id,
          name: this.student.name,
          parentName: this.student.parentName,
          age: this.student.age,
          rate: this.student.rate,
          class: this.student.class
        })
        this.$router.push({ path: `/students/${this.student._id}`, query: { status: 'update' } })
      } catch (e) {
        console.log(e)
      }
    }
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