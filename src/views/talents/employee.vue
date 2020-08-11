<template>
  <b-jumbotron fluid class="text-center mb-0 main-bg pt-100 h-650">
    <h3 class="my-4">employee activity</h3>
    <!-- <p class="small">Release timeÃ¯Â¼Å¡2017-11-27 09:15:05</p> -->
    <hr class="text-line" />
    <div style="width:1200px;margin:0 auto;">
      <img src="/static/img/active01.png" alt="work01" class="w-100">
      <img src="/static/img/active02.png" alt="work01" class="w-100">
      <img src="/static/img/active03.png" alt="work01" class="w-100">
      <img src="/static/img/active04.png" alt="work01" class="w-100">
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
