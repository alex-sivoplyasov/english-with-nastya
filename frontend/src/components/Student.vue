<template>

  <div class="status-query" v-if="status">
    Новый ученик успешно добавлен
  </div>

  <div v-if="loading">
    Load...
  </div>

  <div v-else-if="student" class="student">
    <div class="student__property">
      <div class="student__property-label">Имя: </div>
      <div class="student__property-value">{{student.name}}</div>
    </div>

    <div class="student__property" v-if="student.parentName">
      <div class="student__property-label">Имя родителя: </div>
      <div class="student__property-value">{{student.parentName}}</div>
    </div>

    <div class="student__property" v-if="student.age">
      <div class="student__property-label">Возраст: </div>
      <div class="student__property-value">{{student.age}}</div>
    </div>

    <div class="student__property" v-if="student.class">
      <div class="student__property-label">Возраст: </div>
      <div class="student__property-value">{{student.class}}</div>
    </div>

    <div class="student__property" v-if="student.rate">
      <div class="student__property-label">Ставка: </div>
      <div class="student__property-value">{{student.rate}}</div>
    </div>

    <div class="student__property" >
      <div class="student__property-label">Статус: </div>
      <div class="student__property-value status" :class="{active: student.active}">
        {{student.active ? 'Активный' : 'Старый'}}
      </div>
    </div>
  </div>

  <div v-else>
    Такого студента нет
  </div>

  <div class="buttons">
    <router-link to="/edit-student" class="button edit">Изменить студента</router-link>
    <router-link to="/students" class="button">Список студентов</router-link>
  </div>


</template>

<script>
export default {
  name: "Student",
  data: () => ({
    loading: true,
    student: null,
    status: null
  }),
  async mounted() {
    this.student = await this.$store.dispatch('getStudent',this.$route.params.id)
    this.loading = false
    this.status = this.$route.query.status
  }
}
</script>

<style scoped lang="scss">
  .student {
    background: #FFFFFF;
    padding: 16px;
    border-radius: 8px;

    &__property {
      display: flex;
      margin-bottom: 8px;
    }

    &__name-label, &__property-label {
      color: darkgray;
      margin-right: 4px;
    }

    &__name-value, &__property-value {
      color: black;
    }

    &__property-value.status {
      color: red;
    }

    &__property-value.status.active {
      color: green;
    }
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 32px;
    text-decoration: none;
    text-transform: uppercase;
    color: #1672EC;
    background: #E0E0E0;
    border-radius: 50px;
    margin-top: 16px;
    width: fit-content;
  }

  .status-query {
    padding: 16px;
    background-color: #3bbf3b;
    border-radius: 8px;
    margin-bottom: 16px;
    color: white;
  }

  .buttons {
    display: flex;
  }

  .edit {
    background: #FBE9E7;
    color: #FF3D00;
    margin-right: 8px;
  }

  .edit:hover {
    background: #FAF2F0;
  }

</style>