<template>
    <div class="main-header">
      <h1>Открой для себя экстрим в нашей школе!</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainHead'
  }
  </script>
  
  <style scoped>
  @font-face {
    font-family: 'Impact';
    src: url('../assets/fonts/impact.ttf')
  }
  
  .main-header {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 600px;
    background-image: url('../assets/img/main.png');
    background-size: cover;
    background-position: center;
    padding-top: 348px;
    padding-left: 59px;
  }
  
  .main-header h1 {
    font-family: 'Impact', sans-serif;
    font-size: 48px;
    font-weight: 400;
    line-height: 59px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
  }
  </style>
  
  