<template>
  <header class="header">
    <div class="header__title" v-if="title">{{title}}</div>
  </header>
</template>

<script>
import { computed} from 'vue'
import store from "@/store";
export default {

  name: "Header",
  setup() {
    const title = computed( () => store.state.info.title)
    return {
      title
    }
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