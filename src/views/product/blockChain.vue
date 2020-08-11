<template>
  <b-jumbotron fluid class="text-center mb-0 main-bg pt-100 h-650">
    <h3 class="my-4">Miner</h3>
    <!-- <p class="small">Release time：2017-11-27 09:15:05</p> -->
    <hr class="text-line">
    <div class="inner">
      <!-- <p class="tit">Minner</p> -->
      <div class="pro-list">
        <div class="pro-li">
          <img v-lazy="require('../../assets/img/pro1.png')" alt="" class="pic">
          <p class="tt">EBIT E12+ Series 50TH/s  57W/T </p>
        </div>
        <div class="pro-li">
          <img v-lazy="require('../../assets/img/pro2.png')" alt="" class="pic">
          <p class="tt">EBIT E12 Series 44TH/s  57W/T </p>
        </div>
      </div>
    </div>
    <div class="inner">
      <!-- <p class="tit">Integrated Circuit</p> -->
      <div class="pro-list">
        <div class="pro-li">
          <img v-lazy="require('../../assets/img/clip1.png')" alt="" class="pic">
          <p class="tt">Independent development of 7nm integrated circuits Design Advanced TSMC 7nm EUV Process technology</p>
        </div>
        <div class="pro-li">
          <img v-lazy="require('../../assets/img/clip2.png')" alt="" class="pic">
          <p class="tt">Independent development of 8nm integrated circuits Design Advanced SAMSUNG 8nm LPP Process technology</p>
        </div>
      </div>
    </div>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'blockChain',
  data() {
    return {
      
    };
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.inner {
  overflow: hidden;
  padding: 0 8%;
  margin-top: 40px;
  .tit{
    font-size: 34px;
    margin-bottom: 60px;
  }
  .pro-list{
    overflow: hidden;
    .pro-li{
      width: 50%;
      padding: 0 2%;
      float: left;
      overflow: hidden;
      .pic{
        display: block;
        width: 100%;
        margin-bottom: 20px;
      }
      .tt{
        line-height: 30px;
        font-size: 16px;
        text-align: left;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
