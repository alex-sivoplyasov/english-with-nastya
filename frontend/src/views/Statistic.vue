<template>
  <div v-if="info.completedLessons">
    Всего уроков: {{info.completedLessons.length}}
  </div>

  <div>
    Всего заработано: {{info.totalSum}}
  </div>

  <ul>
    <li></li>
  </ul>

  <div>

  </div>
</template>

<script>
export default {
  name: "Statistic",
  data: () => ({
    loading: true,
    // lessons: null,
    // completedLessons: null,
    // students: null,
    info: {}
  }),
  async mounted() {
    // const lessons
    const lessons= await this.$store.dispatch('getLessons')
    // const students = await this.$store.dispatch('getStudents')
    const completedLessons = lessons.filter( lesson => lesson.status === 'completed' )

    const totalSum = lessons.reduce( (sum, lesson) => {
      if (lesson.status === 'completed')
        sum += lesson.price
      return sum
    }, 0)

    this.loading = false

    this.info = {
      completedLessons,
      totalSum
    }
  }
}
</script>

<style scoped>

</style>