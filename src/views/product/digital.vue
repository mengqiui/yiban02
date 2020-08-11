<template>
  <b-jumbotron fluid class="text-center mb-0 main-bg pt-100 h-650">
    <h3 class="my-4">Digital currency exchange</h3>
    <!-- <p class="small">Release timeï¼š2017-11-27 09:15:05</p> -->
    <hr class="text-line" />
    <div>The page you visit is in building</div>
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
