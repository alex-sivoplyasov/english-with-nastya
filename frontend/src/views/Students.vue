<template>
  <div class="students" v-if="students.length">
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

    <div class="students__list" >
      <router-link tag="div" :to="`/students/${student._id}`" class="students__item" v-for="student in students" :key="student.id">
        <div class="students__top">
          <div class="students__photo">
            {{getFirst(student.name)}}
          </div>

          <div class="students__name-block">
            <div class="students__name">
              <div class="students__name-label">Имя: </div>
              <div class="students__name-value">{{student.name}}</div>
            </div>
            <div class="students__name parent-name" v-if="student.parentName">
              <div class="students__name-label">Имя родителя: </div>
              <div class="students__name-value">{{student.parentName}}</div>
            </div>
          </div>
        </div>


        <div class="students__property" v-if="student.age">
          <div class="students__property-label">Возраст: </div>
          <div class="students__property-value"> {{ student.age}}</div>
        </div>

        <div class="students__property" v-if="student.class">
          <div class="students__property-label">Класс: </div>
          <div class="students__property-value"> {{ student.class}}</div>
        </div>

        <div class="students__property">
          <div class="students__property-label">Ставка в час: </div>
          <div class="students__property-value"> {{ student.rate}}</div>
        </div>

        <div class="students__property">
          <div class="students__property-label">Статус: </div>
          <div class="students__property-value status" :class="{active: student.active}">
            {{ student.active ? 'Активный' : 'Старый'}}
          </div>
        </div>
      </router-link>
    </div>
  </div>

  <div v-else-if="loading">Загрузка...</div>
  <div v-else>
    Студентов пока что нет
  </div>

  <router-link class="button" to="/create-student">
    Добавить нового студента
  </router-link>
</template>

<script>
  export default {
    name: "Students",
    data: () => ({
      students: [],
      categories: [
        {name: 'Активные', active: true, getter: 'activeStudents'},
        {name: 'Старые', active: false, getter: 'oldStudents'},
        {name: 'Все', active: false, getter: 'allStudents'}
      ],
      loading: true
    }),
    async mounted() {
      await this.$store.dispatch('getStudents')
      this.students = this.$store.getters.activeStudents
      this.loading = false
      // console.log(this.students)
      // console.log(this.loading)
    },
    methods: {
      changeCategory(categoryName) {
        this.categories.find( cat => cat.active === true).active = false

        const currentCategory = this.categories.find( cat => cat.name === categoryName)
        currentCategory.active = true
        // this.categories.find( cat => cat.name === categoryName).active = true
        // const currentGetter = this.
        this.students = this.$store.getters[currentCategory.getter]
      },
      getFirst(name) {
        return name.split('')[0]
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
      text-decoration: none;
    }

    &__top {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }

    &__name {
      display: flex;
      align-items: flex-end;
      font-size: 16px;
    }

    &__name.parent-name {
      font-size: 14px;
      margin-top: 4px;
    }

    &__name-label, &__property-label {
      color: darkgray;
      margin-right: 4px;
    }

    &__name-value, &__property-value {
      color: black;
      //font-size: 16px;
    }

    &__property-value.status {
      color: red;
    }

    &__property-value.status.active {
      color: green;
    }

    &__property {
      display: flex;
      margin-bottom: 8px;
    }

    //&__property-label {
    //  color: darkgray;
    //  margin-right: 4px;
    //}

    &__photo {
      display: flex;
      width: 40px;
      height: 40px;
      background-color: aquamarine;
      border-radius: 50px;
      color: #000000;
      font-size: 24px;
      font-weight: bold;
      justify-content: center;
      align-items: center;
      margin-right: 8px;
    }

    &__name-block {
      display: flex;
      flex-direction: column;
    }
  }

  .button {
    display: block;
    width: fit-content;
    padding: 16px 32px;
    margin-top: 16px;
    background: #6FC51E;
    border-radius: 50px;
    text-decoration: none;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  .button:hover {
    background: #85FFA5;
  }
</style>