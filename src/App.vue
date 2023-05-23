<template>
  <div id="app" style="width: 1440px; margin: auto;">
    <Header />
    <Main />
    <!-- остальные компоненты -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    // остальные компоненты
  }
}
</script>

<style>
/* Стили для App.vue */

/* Сброс стилей */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
</style>



