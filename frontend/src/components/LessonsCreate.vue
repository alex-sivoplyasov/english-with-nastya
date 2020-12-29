<template>
  <div>
    <Test/>
<!--    <vc-calendar></vc-calendar>-->
    <form @submit.prevent="formSubmit">
      <select v-model="student" @change="studentSelect">
        <option v-for="student in students" :key="student.id" :value="student._id"> {{student.name}}</option>
      </select>
      <input type="text">
      <input type="text" v-model="price">
      <input type="text" v-model="date">
      <input type="text" v-model="time">
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
      time: null
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
      formSubmit() {
        // console.log(this.student)
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