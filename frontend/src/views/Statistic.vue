<template>
  <div v-if="info.completedLessons">
    Всего уроков: {{ info.completedLessons.length }}
  </div>

  <div>
    Всего заработано: {{ info.totalSum }}
  </div>

  <ul>
    <li v-for="student in students" :key="student._id">
      <div>Name: {{ student.name }}</div>
      <div>Count lessons: {{ student.countLessons }}</div>
      <div>totalSum: {{ student.totalSum }}</div>
    </li>
  </ul>

  <div>

  </div>
</template>

<script>
export default {
  name: "Statistic",
  data: () => ({
    loading: true,
    students: null,
    info: {}
  }),
  async mounted() {
    const lessons = await this.$store.dispatch('getLessons')
    const students = await this.$store.dispatch('getStudents')
    const completedLessons = lessons.filter(lesson => lesson.status === 'completed')

    const totalSum = lessons.reduce((sum, lesson) => {
      if (lesson.status === 'completed') {
        const studentIndex = students.findIndex(student => student._id === lesson.studentId)
        students[studentIndex].countLessons = students[studentIndex].countLessons ? students[studentIndex].countLessons + 1 : 1
        students[studentIndex].totalSum = students[studentIndex].totalSum ? students[studentIndex].totalSum + lesson.price : lesson.price
        sum = sum + lesson.price
      }
      return sum
    }, 0)

    this.info = {
      completedLessons,
      totalSum
    }
    this.students = students.filter(student => student.countLessons)
    this.loading = false
  }
}
</script>

<style scoped>

</style>