<template>
  <Navbar/>
  <div class="right">
    <Header/>
    <main class="content">
      <router-view/>
    </main>
  </div>

</template>

<script>
import Navbar from "./components/Navbar"
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Navbar, Header
  }
}
</script>

<style>
@import "assets/index.scss";
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
/*@import '~normalize.css';*/
/*@import 'normalize.css';*/

body {
  overflow: hidden;
}

#app {
  display: flex;
}

.content {
  height: calc(100vh - 108px);
  overflow-y: scroll;
  background: #F4F7F0;
  padding: 24px;
}

.right {
  width: 100%;
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
  border: none;
  cursor: pointer;
}

.button:hover {
  background: #85FFA5;
}

.button:focus {
  border: none;
  outline: none;
}

</style>
