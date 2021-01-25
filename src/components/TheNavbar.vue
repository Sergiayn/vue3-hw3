<template>
  <header class="navbar">
    <h3>GMail</h3>
    <ul class="navbar-menu">
      <li><router-link :to="{name:'home'}">Все задачи</router-link></li>
      <li><router-link :to="{name:'task-new'}">Создать</router-link></li>
    </ul>
  </header>
</template>
