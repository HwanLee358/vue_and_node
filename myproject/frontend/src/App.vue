<template>
  <div class="container">
  <nav>
    <router-link to="/vuetify">vuetify</router-link> |
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/customer">고객관리</router-link> |
    <router-link to="/boardList">게시판</router-link> | 
    <router-link to="/loginForm">로그인</router-link>
  </nav>
  <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
