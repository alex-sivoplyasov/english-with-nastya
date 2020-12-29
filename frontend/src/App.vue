<template>
  <div id="nav">
    <div class="logo">
      <div class="logo-title"> App</div>
    </div>
    <router-link to="/">Home</router-link> |
    <router-link to="/students">Students</router-link>
    <router-link to="/lessons">Schedule</router-link>
  </div>
  <router-view/>
</template>

<style>
  @import "assets/index.scss";
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  /*@import '~normalize.css';*/
  /*@import 'normalize.css';*/
  #nav {
    display: flex;
    /*justify-content: center;*/
    align-items: center;
    height: 64px;
  }

  .logo {
    flex: 1;
  }

  .button {
    display: flex;
    width: fit-content;
    margin-top: 24px;
    padding: 16px 32px;
    text-decoration: none;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 40px;
    background: #EBF5F7;
    color: #008DEE;
  }

  .button:hover {
    background: #008DEE;
    color: #0D61AA;
  }

</style>
