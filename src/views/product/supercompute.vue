<template>
  <b-jumbotron fluid class="text-center mb-0 main-bg pt-100 h-650">
    <h3 class="my-4">Hashrate Center</h3>
    <!-- <p class="small">Release time：2017-11-27 09:15:05</p> -->
    <hr class="text-line" />
    <div class="inner">
      <div class="left">
        <img v-lazy="require('../../assets/img/supercomputer1.jpg')" alt class="pic" />
      </div>
      <div class="right">
        <div class="rightinner">
          <p class="info">We believe that hashrate is the technical guarantee for the underlying architecture of the blockchain and the basis for ensuring the security of the blockchain.<br><br>Ebang is a leading company of Application Specific Integrated Circuit, ASIC, Chip design, and a leading manufacturer of High-performance Bitcoin mining machines. We will gradually establish a globalized blockchain full industry chain service.</p>
        </div>
      </div>
    </div>
    <div class="inner1">
      <div class="right">
        <div class="rightinner">
          <p class="info">Ebang super hashrate center can provide one-stop service for the blockchain customers from entry consultation to investment construction, to upgrade and so on. The solution will provide customers with a "turnkey" service of the hashrate center, which includes standardized design & evaluation, engineering management & consulting, and operation of the super hashrate center, etc.</p>
        </div>
      </div>
      <div class="left">
        <img v-lazy="require('../../assets/img/supercomputer2.png')" alt class="pic" />
      </div>
    </div>
  </b-jumbotron>
</template>

<script>
export default {
  name: "super",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.inner {
  overflow: hidden;
  padding: 0 8%;
  margin-top: 40px;
  margin-bottom: 97px;
  .left {
    width: 60%;
    float: left;
    overflow: hidden;
    .pic{
      display: block;
      width: 480px;
      height: 665px;
      overflow: hidden;
    }
  }
  .right {
    width: 40%;
    float: left;
    overflow: hidden;
    text-align: left;
    height: 665px;
    display: table;
    .rightinner{
      display: table-cell;
      vertical-align: middle;
      .info{
        font-size: 16px;
      }
    }
  }
}
.inner1 {
  overflow: hidden;
  padding: 0 8%;
  .left {
    width: 60%;
    float: left;
    overflow: hidden;
    .pic{
      display: block;
      width: 480px;
      height: 383px;
      overflow: hidden;
      float: right;
    }
  }
  .right {
    width: 40%;
    float: left;
    overflow: hidden;
    text-align: left;
    height: 383px;
    display: table;
    .rightinner{
      display: table-cell;
      vertical-align: middle;
      .info{
        font-size: 16px;
      }
    }
  }
}
</style>
