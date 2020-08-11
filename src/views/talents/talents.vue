<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
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
          vuescroll: {},
          scrollPanel: {},
          rail: {background: 'transparent',},
          bar: {background: '#000',opacity: .4,}
        }
      }
    },
    watch:{
      '$route':function(to,from){
        this.$parent.$el.scrollTop = 0
      }
    }
  }
</script>

<style lang="scss">

</style>

