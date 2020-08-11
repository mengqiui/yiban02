<template>
<div class="bg-news text-white pb-5">
  <div class="mb-5 bg-footer w-100" style="height:10px;">
    <!-- <img src="../../static/img/bar.png" alt=""> -->
    </div>
  <div class="d-flex justify-content-between mx-auto w-1200">
    <div>
      <p class="small">{{ $t('footer.company') }}</p>
      <!-- <p class="small">{{ $t('footer.scales') }}</p> -->
      <!-- <p class="small">{{ $t('footer.emaill') }}</p> -->
    </div>
    <div style="width:600px;">
      <p class="small">{{ $t('footer.address') }}</p>
      <!-- <p><a href="http://www.beian.miit.gov.cn/" target="_blank">{{ $t('footer.beian') }}</a></p> -->
      <p>{{ $t('footer.copyright') }}</p>
    </div>
    <div>
      <p><img src="../../static/img/weixin.jpg" alt="亿邦国际官方微信" style="width:150px;"></p>
      <p class="small text-center">{{ $t('footer.wechat') }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'footerBottom',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
div{color: #fff!important;h3{color:#fff;} p{font-size:0.9rem;;a{color: #fff!important;text-decoration: none;}};}
.bg-news{ background-color: #000022; }
.bg-footer{ background-image:url('/static/img/bar.png') ; }
</style>
