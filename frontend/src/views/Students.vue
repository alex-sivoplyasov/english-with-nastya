<template>
  <div class="students" >
    <div class="students__categories">
      <div
          class="students__category"
          :class="category.active ? 'active' : ''"
          v-for="category in categories" :key="category.name"
          @click="changeCategory(category.name)"
      >
        {{category.name}}
      </div>
    </div>

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
      students: null,
      categories: [
        {name: 'Активные', active: true},
        {name: 'Старые', active: false},
        {name: 'Все', active: false}
      ]
    }),
    async mounted() {
      this.students = await this.$store.dispatch('getStudents')
      console.log(this.students)
    },
    methods: {
      changeCategory(categoryName) {
        this.categories.find( cat => cat.active === true).active = false
        this.categories.find( cat => cat.name === categoryName).active = true
      }
    }
  }
</script>

<style scoped lang="scss">
  .students {
    &__categories {
      display: flex;
      justify-content: space-between;
    }

    &__category {
      width: 27%;
      background: #FFFFFF;
      padding: 24px;
      margin-bottom: 32px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
    }

    &__category.active {
      background: #85FFA5;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
    }

    &__item {
      width: 100%;
      background: #FFFFFF;
      padding: 16px;
      margin-bottom: 8px;
      border-radius: 8px;
    }
  }
</style>