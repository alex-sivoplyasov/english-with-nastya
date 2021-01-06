<template>
  <div class="students" >
    <div class="students__list" v-if="students">
      <router-link tag="div" :to="`/students/${student._id}`" class="students__item" v-for="student in students" :key="student.id">
        <div class="students__name">
          <div class="students__name-label">Имя: </div>
          <div class="students__name-value">{{student.name}}</div>
        </div>
        <div class="students__name" v-if="student.parentName">
          <div class="students__name-label">Имя родителя: </div>
          <div class="students__name-value">{{student.parentName}}</div>
        </div>

        <div class="students__age" v-if="student.age">
          <div class="students__age-label">Возраст: </div>
          <div class="students__age-value"> {{ student.age}}</div>
        </div>

        <div class="students__rate">
          <div class="students__rate-label">Ставка в час: </div>
          <div class="students__rate-value"> {{ student.rate}}</div>
        </div>
      </router-link>
    </div>
    <div v-else>Загрузка...</div>

    <router-link class="button" to="/create-student">
      Добавить нового студента
    </router-link>
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

<style scoped lang="scss">
  .students {
    &__list {
      display: flex;
      flex-wrap: wrap;
    }

    &__item {
      width: 100%;
      margin-bottom: 16px;
      padding: 24px;
      border: 1px solid #B7F5F2;
      border-radius: 4px;
      cursor: pointer;
    }

    &__item:hover {
      border: 1px solid #B7F5F2;
      box-shadow: 0px 8px 10px rgba(0, 141, 238, 0.4);
    }

    &__name, &__age, &__rate {
      display: flex;
    }

    &__name-label, &__age-label, &__rate-label {
      margin-right: 8px;
    }

  }
</style>