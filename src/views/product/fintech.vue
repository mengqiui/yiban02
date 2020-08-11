<template>
  <b-jumbotron fluid class="text-center mb-0 main-bg pt-100 h-650">
    <h3 class="my-4">Fintech</h3>
    <!-- <p class="small">Release time：2017-11-27 09:15:05</p> -->
    <hr class="text-line" />
    <div class="inner">
      <p class="info">
        Ebang international holdings Inc. is also a financial technology company which focuses on automation, big data and people-oriented design to make your financial life easy and enjoyable.
        <br />
        <br />Ebang Fintech provides a method, which is a consulting engine based on massive data and software, and provides a financial planning platform to help users achieve a better return on investment.
        <br />
        <br />Through the platform, the information provided is for reference only, and you agree to our terms of use and privacy policy. Ebang Fintech consultants rely on information from a variety of reliable sources, including customers and third parties.
        <br />
        <br />Our corporate culture is based on transparency and trust. Whether communicating with clients or with our team, we believe in being honest and straightforward. We are building the business of financial technology, which can help you succeed in investment and financial management, design a better life for you, and make it a reality. 
      </p>
    </div>
  </b-jumbotron>
</template>

<script>
export default {
  name: "fintech",
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
  background: url(../../assets/img/hash.png) no-repeat center top;
  background-size: 100% 100%;
  height: 654px;
  padding-top: 160px;
  .info {
    text-align: left;
    font-size: 16px;
  }
}
</style>
