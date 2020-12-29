<template>
  <div>
    <Test/>
<!--    <vc-calendar></vc-calendar>-->
    <form @submit.prevent="formSubmit">
      <select v-model="student" @change="studentSelect">
        <option v-for="student in students" :key="student.id" :value="student._id"> {{student.name}}</option>
      </select>
      <input type="text" v-model="price">
      <input type="text" v-model="date">
      <input type="text" v-model="time">
      <input type="text" v-model="duration">
      <button type="submit">Go</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "LessonsCreate",
    data: () => ({
      student: null,
      students: null,
      price: null,
      date: null,
      time: null,
      duration: null
    }),
    async mounted() {
      try {
        this.students = await this.$store.dispatch('getStudents')
        if (this.students) {
          this.student = this.students[0]._id
          console.log(this.students)
          this.price = this.students[0].rate
        }

      } catch (e) {
        console.log(e)
      }
    },
    methods: {
      async formSubmit() {
        try {
          await this.$store.dispatch('createLesson', {
            studentId: this.student,
            date: this.date,
            time: this.time,
            duration: this.duration,
            price: this.price,
            status: 'new'
          })
        } catch (e) {
          console.log(e)
        }

      },
      studentSelect() {
        // console.log(this.stu)
        this.price = this.students.find( student => student._id === this.student).rate || 0
        // console.log(currentStudent)
      }
    }
  }
</script>

<style scoped>

</style>