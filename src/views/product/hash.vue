<template>
  <b-jumbotron fluid class="text-center mb-0 main-bg pt-100 h-650">
    <h3 class="my-4">Hash Pie</h3>
    <!-- <p class="small">Release time：2017-11-27 09:15:05</p> -->
    <hr class="text-line" />
    <div class="inner">
      <div class="left">
        <img src="../../assets/img/hash1.jpg" alt class="pic" />
      </div>
      <div class="right">
        <div class="rightinner">
          <p class="info">
            Cloud mining is usually provided rental services by large computing center, which can make platform and users win-win in theory. Users could buy hashrate "T" by signing contracts to earn the corresponding computing power dig digital virtual currency.
            <br />
            <br />Hash Pie is the cloud mining platform of Ebang. What benefits can Hash Pie bring us? Firstly, minimize the mining threshold. The low threshold of quick entry into the bureau is the reason why ordinary investors choose Hash Pie. Secondly, the biggest feature of the Hash Pie is its "ease of use ", aimed at small white users who know less about the block chain. Another feature of Hash Pie is the "separability" of computing power, which is aimed at ordinary investors with small capital.
          </p>
        </div>
      </div>
    </div>
    <div class="inner1">
      <div class="right">
        <div class="rightinner">
          <p class="info">Above all, Hash Pie for users is means free from their own mining mine, mining machine setup, mining noise and other cumbersome steps. And compared to home mining, users may pay less electricity, maintenance costs. Let you know the block chain easily and enjoy the dividends of cloud mining.</p>
        </div>
      </div>
      <div class="left">
        <img src="../../assets/img/hash2.png" alt class="pic" />
      </div>
    </div>
  </b-jumbotron>
</template>

<script>
export default {
  name: "hash",
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
      .tit{
        font-size: 32px;
        color: #fff;
      }
      .info{
        font-size: 16px;
      }
    }
  }
}
</style>
