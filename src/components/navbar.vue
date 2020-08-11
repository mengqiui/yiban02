<template>
  <div class="w-100 bg-navbar navbarBox">
    <b-navbar fixed="top" toggleable="lg" class="mx-auto text-white w-1200">
      <b-navbar-brand href="#" tag="h1" class>
        <img
          src="../../static/img/logo.png"
          class="d-inline-block align-middle"
          alt="Ebang"
          style="max-width:200px;"
        />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- <b-nav-item to="/about" active-class="active">{{ $t('navbar.about') }}</b-nav-item> -->
          <b-nav-item to="/about" active-class="active">About us</b-nav-item>
          <b-nav-item-dropdown :text="$t('navbar.product')" right>
            <b-dropdown-item to="/product/super" active-class="active">{{$t('navbar.product01')}}</b-dropdown-item>
            <b-dropdown-item to="/product/hash" active-class="active">{{$t('navbar.product02')}}</b-dropdown-item>
            <b-dropdown-item to="/product/fintech" active-class="active">{{$t('navbar.product03')}}</b-dropdown-item>
            <b-dropdown-item to="/product/blockChain" active-class="active">{{$t('navbar.product04')}}</b-dropdown-item>
            <b-dropdown-item to="/product/digital" active-class="active">Digital currency exchange</b-dropdown-item>
          </b-nav-item-dropdown>
          <!-- <div class="dropLine"></div> -->
          <!-- <b-nav-item to="/service" active-class="active">{{ $t('navbar.server') }}</b-nav-item> -->
          <b-nav-item-dropdown text="Talents" right>
            <b-dropdown-item to="/talents/development" active-class="active">Talent development</b-dropdown-item>
            <b-dropdown-item to="/talents/working" active-class="active">working environment</b-dropdown-item>
            <b-dropdown-item to="/talents/employee" active-class="active">employee activity</b-dropdown-item>
            <b-dropdown-item to="/talents/Recruitment" active-class="active">Recruitment</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item @click="go('https://ir.ebang.com.cn')" active-class="active">Investors</b-nav-item>
          <b-nav-item to="/news" active-class="active">{{ $t('navbar.newsBox') }}</b-nav-item>
        </b-navbar-nav>
        <!-- 中英文切换 -->
        <!-- <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown class="lang" :text="$t('language.name')" right >
            <b-dropdown-item href="#" @click="changeLangEvent('zh')">{{ $t('navbar.langlist1') }}</b-dropdown-item>
            <b-dropdown-item href="#" @click="changeLangEvent('en')">{{ $t('navbar.langlist2') }}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>-->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      active: this.$route.path ? this.$route.path : "",
      username: sessionStorage.getItem("slpUser"),
      notice: sessionStorage.getItem("slpNotice")
    };
  },
  created() {
    var that = this;
    window.addEventListener("setItem", () => {
      that.notice = sessionStorage.getItem("slpNotice");
    });
  },
  methods: {
    changeLangEvent(name) {
      this.$i18n.locale = name;
    },
    changeNav() {
      this.active = this.$route.path;
    },
    go (e) {
      // window.location.href = e;
      window.open(e, '_blank');
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ {
  .fixed-top {
    top: 15px;
  }
  #nav-collapse .navbar-nav .nav-item {
    margin: 0 25px !important;
  }
  .navbar-nav .nav-link {
    color: #fff !important;
    position: relative;
    font-size: 18px;
    padding: 0;
    padding-bottom: 10px;
    letter-spacing: 1px;
    transition: color 1s;
    &::after {
      --scale: 0;
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 100%;
      height: 3px;
      background: $line-gradient;
      -webkit-transform: scaleX(var(--scale));
      transform: scaleX(var(--scale));
      -webkit-transform-origin: var(--x) 50%;
      transform-origin: var(--x) 50%;
      transition: -webkit-transform 0.3s cubic-bezier(0.535, 0.05, 0.355, 1);
      transition: transform 0.3s cubic-bezier(0.535, 0.05, 0.355, 1);
      transition: transform 0.3s cubic-bezier(0.535, 0.05, 0.355, 1),
        -webkit-transform 0.3s cubic-bezier(0.535, 0.05, 0.355, 1);
    }
  }

  .navbar-light .navbar-nav .nav-link:hover,
  .navbar-light .navbar-nav .nav-link:focus,
  .navbar-nav .nav-link.active {
    color: #00ff77 !important;
    &::after {
      --scale: 1;
    }
  }
  .navbar-light .navbar-nav .show > .nav-link {
    color: #00ff77;
  }

  .dropdown-menu-right {
    right: auto;
  }
  .dropdown-menu {
    background-color: $bg-navbar;
    color: #fff;
    top: 85%;
  }
  .dropdown-item {
    color: #fff;
    font-size: 18px;
    transition: color 1s;
  }
  .dropdown-item:hover,
  .dropdown-item:focus,
  .dropdown-item.active,
  .dropdown-item:active {
    color: #00ff77;
    background-color: transparent;
  }
  .dropdown-toggle::after {
    display: none;
  }
  .nav-item:focus {
    border: none;
    outline: none;
  }
  .nav-link:hover,
  .nav-link:focus {
    outline: none;
  }
}
.dropLine {
  --scale: 0;
  content: "";
  width: 97px;
  position: absolute;
  left: 362px;
  right: 0;
  top: 78%;
  height: 3px;
  background: $line-gradient;
  -webkit-transform: scaleX(var(--scale));
  transform: scaleX(var(--scale));
  -webkit-transform-origin: var(--x) 50%;
  transform-origin: var(--x) 50%;
  transition: -webkit-transform 0.3s cubic-bezier(0.535, 0.05, 0.355, 1);
  transition: transform 0.3s cubic-bezier(0.535, 0.05, 0.355, 1);
  transition: transform 0.3s cubic-bezier(0.535, 0.05, 0.355, 1),
    -webkit-transform 0.3s cubic-bezier(0.535, 0.05, 0.355, 1);
}
.bg-navbar {
  background-color: $bg-navbar;
}
.navbarBox {
  height: 100px;
  position: fixed;
  z-index: 99999;
}
</style>