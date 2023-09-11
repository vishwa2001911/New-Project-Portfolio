<template>

  <!--Header and Navbar Content-->
  <Header></Header>

  <!--Main Content-->
  <div class="mainContent">
    <!--Project Feed-->
    <!--
      <feeds></feeds>
      <About></About>

    <feeds></feeds>
    -->
    <Education></Education>
    

  </div>

  <!--Footer Content-->
  <Footer></Footer>

</template>

<script>
import Feeds from './components/Feeds.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Education from './components/Education.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Header,
    Feeds,
    About,
    Education,
    Footer
  }
}
</script>

<style>

body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #F4F6F7 ;
  font-family: 'Courier New', Courier, monospace;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
