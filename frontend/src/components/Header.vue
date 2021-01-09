<template>
  <header class="header">
    <div class="header__title">Список студентов</div>
  </header>
</template>

<script>
export default {
  name: "Header",
  mounted() {
    console.log('info', this.$store.getters.info)
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 24px;
  background-color: #F7F4F4;

  &__title {
    font-size: 22px;
    font-weight: bold;
  }
}

</style>