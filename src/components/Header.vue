<template>
    <header>
      <img src="../assets/img/frog.png" alt="logo">
      <nav>
        <a href="#">Главная</a>
        <a href="#">О нас</a>
        <a href="#">Контакты</a>
      </nav>
      <button>Записаться на занятие</button>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    height: 80px;
    margin: 0 auto;
  }
  
  header img {
    width: 45px;
    height: 45px;
  }
  
  header nav {
    display: flex;
    justify-content: space-between;
    width: 339px;
  }
  
  header nav a {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #858585;
    text-decoration: none;
  }
  
  header nav a:hover {
    color: #000000;
  }
  
  header button {
    width: 250px;
    height: 49px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    background: #FFF96C;
    border-radius: 30px;
    border: none;
    cursor: pointer;
  }
  
  header button:hover {
    background: rgba(255, 249, 108, 0.57);
    width: 240px;
    height: 40px;
    margin-right: 5px;
    margin-left: 5px;
    transition: 0.1s;
  }
  </style>
  