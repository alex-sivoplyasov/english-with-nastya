<template>
  <div>
    <form @submit.prevent="submitForm" v-if="!file">
      <input type="text" v-model="name">
      <input type="text" v-model="parentName">
      <input type="file" name="file" @change="previewFiles" ref="file">
      <button type="submit">Отправить</button>
    </form>

    <div v-else>
      <img :src="image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "StudentsCreate",
    data: () => ({
      name: null,
      parentName: null,
      image: '',
      age: null,
      class: null,
      file: null,
    }),
    methods: {
      previewFiles() {
        this.file = this.$refs.file.files[0]
        console.log(this.file)
        this.createImage()
      },
      submitForm() {
        const formData = new FormData()
        formData.append('file', this.file)
      },
      createImage() {
        // this.image = new Image();
        const reader = new FileReader();

        // reader.onload = (e) => {
        //   console.log(e.target.result)
        //   // this.image.source
        //   console.log('res',e.target.result)
        // }
        //
        // console.log(reader.readAsDataURL(this.file))
        // // console.log(reader)
        reader.readAsDataURL(this.file);
      }
    }
  }
</script>

<style scoped>

</style>