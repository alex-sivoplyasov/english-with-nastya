<template>
  <nav class="nav">
    <div class="nav__top">
      <div class="nav__logo"/>
      <div class="nav__logo-text">Nastya App</div>
      <div class="nav__burger">
        burger
      </div>
    </div>

    <div class="nav__list">
      <router-link class="nav__item" to="/">Главная</router-link>
      <router-link class="nav__item" to="/students">Студенты</router-link>
      <router-link class="nav__item" to="/lessons">Расписание</router-link>
      <router-link class="nav__item" to="/statistic">Статистика</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped lang="scss">
.nav {
  flex-shrink: 0;
  width: 280px;
  height: 100vh;
  background: #FBFBFB;
  &__top {
    height: 60px;
    display: flex;
    align-items: center;
    //justify-content: space-between;
    padding: 0 24px;
  }

  &__logo {
    width: 40px;
    height: 40px;
    margin-right: 8px;
    background-color: #6FC51E;
    border-radius: 50px;
  }

  &__logo-text {
    font-size: 20px;
    font-weight: bold;
  }

  &__burger {
    margin-left: auto;
  }

  &__list {
    display: flex;
    margin-top: 24px;
    flex-wrap: wrap;
  }

  &__item {
    width: 100%;
    padding: 24px;
    color: #6FC51E;
    cursor: pointer;
    text-decoration: none;
  }

  &__item:hover {
    background-color: #FFFFFF;
  }
}
</style>