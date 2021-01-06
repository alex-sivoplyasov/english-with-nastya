<template>

  <div v-if="loading">
    Load...
  </div>

  <div v-else-if="student">
    <div>
      Имя: {{student.name}}
    </div>
    <div v-if="student.parentName">
      Имя родителя: {{student.parentName}}
    </div>
    <div v-if="student.rate">
      Ставка: {{student.rate}}
    </div>
    <div v-if="student.age">
      Возраст: {{student.age}}
    </div>
  </div>

  <div v-else>
    Такого студента нет
  </div>

  <router-link to="/students">Go back to students list</router-link>

</template>

<script>
export default {
  name: "Student",
  data: () => ({
    loading: true,
    student: null
  }),
  async mounted() {
    this.student = await this.$store.dispatch('getStudent',this.$route.params.id)
    console.log(this.student)
    this.loading = false
  }
}
</script>

<style scoped>

</style>