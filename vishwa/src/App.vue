<template >

  <!--Header and Navbar Content-->
  <Header @sendRoute='showItems' :mode="mode"  @changeMode="changeMode"  > </Header>

  <!--Main Content-->
  <div class="mainContent"> 
    <!--Project Feed-->
    
      <feeds v-if="index === 0" ></feeds>
      <About v-if="index === 1"></About>
      <Education v-if="index === 2"></Education>
      <Feedback :mode="mode" v-if="index === 3"></Feedback>
    
  </div>

  <!--Footer Content-->
  <Footer></Footer>

</template>

<script>
import Feeds from './components/Feeds.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Education from './components/Education.vue'
import Feedback from './components/Feedback.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Header,
    Feeds,
    About,
    Education,
    Feedback,
    Footer
  },
  data() {
    return {
      items:{
        feeds:true,
        about:false,
        education:false,
        feedbaacks:false
      },
      index:0,
      mode:{
        textColor:'#2c3e50',
        bgColor:'#F4F6F7',
        feedBoxColor:'#ECF0F1',
        iconColor:'',
        buttonColor:'palevioletred',
        buttonColorHover:'palevioletred'
      }
    }
  },
  methods:{
    showItems(index){
      this.index = index;
    },
    changeMode(){
      // this will chang colors of the buttons
      let color = {'palevioletred':'#51B0EE','#51B0EE':'palevioletred'}

      this.mode.buttonColor = color[this.mode.buttonColor]

      
    }
    
  }
}
</script>

<style>

body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  font-family: 'Courier New', Courier, monospace;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F4F6F7 ;
  overflow: hidden;
}


</style>
