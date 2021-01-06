<template>
  <form @submit.prevent="submitForm">
    <input type="text" v-model="name" placeholder="Имя">
    <!--      <div v-if="!$v.age.required">Введите имя</div>-->
    <input type="text" v-model="parentName" placeholder="Имя родителя">
    <input type="number" v-model="age" placeholder="Age">
    <input type="number" v-model="rate" placeholder="Rate">
    <input type="file" name="file" @change="previewFiles" ref="file">
    <button type="submit">Отправить</button>
  </form>
</template>

<script>
export default {
  name: "StudentsEdit",
  data: () => ({
    student: null,
    name: null,
    parentName: null,
    rate: null,
    image: '',
    age: null,
    class: null,
    file: null,
  }),
  mounted() {
    console.log(this.$route)
    // this.student = this.$store.dispatch('getStudent')
  },
  methods: {
    submitForm() {
      console.log('fff')
    }
  }
}
</script>

<style scoped>

</style>