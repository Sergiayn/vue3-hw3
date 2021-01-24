<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
<!--    <router-view />-->
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'

export default {
  name: 'App',
  components: {
    TheNavbar
  }
}
</script>

<style>

</style>
