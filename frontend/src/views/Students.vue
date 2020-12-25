<template>
  <div class="students">
    <ul v-if="students">
      <li v-for="student in students" :key="student.id">
        {{ student.name}}
      </li>
    </ul>
    <div v-else>Загрузка...</div>
  </div>
</template>

<script>
  export default {
    name: "Students",
    data: () => ({
      students: null
    }),
    async mounted() {
      this.students = await this.$store.dispatch('getStudents')
      console.log(this.students)
    }
  }
</script>

<style scoped>

</style>