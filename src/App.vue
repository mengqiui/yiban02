<template>
  <div id="app">
    <myScroll ref="vs" :ops="ops">
      <headerbox></headerbox>
      <transition name="fade-transform" mode="out-in">
        <router-view></router-view>  
      </transition>
      <footerBottom></footerBottom>
    </myScroll>
  </div>
</template>

<script>
  import headerbox from '@/components/navbar'
  import footerBottom from '@/components/footer'
  export default {
    name: 'App',   
    components: { headerbox,footerBottom }, 
    data() {
      return {
        ops: {
          vuescroll: {
          },
          scrollPanel: {
          },
          rail: {background: 'transparent',},
          bar: {background: '#000',opacity: .4,}
        }
      }
    },
    updated(){
      this.$refs["vs"].scrollTo({y: "0"},0);
    },
    // mounted(){
    //   window.addEventListener('scroll',this.myScroll,true)
    // },
    // methods:{
    //   myScroll(){
    //     this.$scrollVal.$emit('scrollVal', this.$refs["vs"].getPosition());
    //   }
    // }
  }
</script>

<style lang="scss">
html,body,#app{
  height: 100%; background-color: #191935;min-width: 1440px;
}
@media (min-width: 1200px) {
  html,body,#app{
    overflow-x: hidden;min-width: 1200px;
  }
}
@keyframes main {
  0% {
    opacity:0;
    transform:translateY(50px)
  }
  100% {
    opacity:1;
    transform:translateY(0)
  }
}
#app{
    animation: main 1s;
    padding: 0;
    background-color: #191935;
}
</style>

