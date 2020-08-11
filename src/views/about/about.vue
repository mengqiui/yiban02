<template>
  <div class="box">
    <!-- 轮播 -->
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li
          v-for="(item, num) in imgSrc"
          :key="num"
          data-target="#carouselExampleIndicators"
          :data-slide-to="num"
          :class="num == 0 ? 'active': ''"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="num == 0 ? 'active': ''"
          v-for="(item, num) in imgSrc"
          :key="num"
        >
          <img v-lazy="item" class="d-block w-100 pic" alt="..." style="height:937px;" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="about-inner" style="max-width:1200px; margin:0 auto">
      <div id="about">
        <img src="../../assets/img/OVER.png" alt class="about-tit" />
        <img src="../../assets/img/smpic.png" alt class="about-small" />
        <p style="margin-top:6px;margin-bottom:6px;line-height:150%">
          <span
            style="font-family: 仿宋_GB2312;line-height: 180%;font-size: 16px"
          >We are a pioneer in researching and developing ASIC chip technology used in blockchain applications in China. We are also one of the earliest contract manufacturers of Bitcoin miner in China to own self-developed proprietary ASIC chips.</span>
        </p>
        <!-- <p style="color: #666666;"></p>
        <p style="margin-top:6px;margin-bottom:6px;line-height:150%">
          <span
            style="font-family: 仿宋_GB2312;line-height: 180%;font-size: 16px"
          >We are a pioneer in researching and developing ASIC chip technology used in blockchain applications in China. We are also one of the earliest contract manufacturers of Bitcoin mining machines in China to own self-developed proprietary ASIC chips, according to the F&S report. Our Ebit E10 model, launched in December 2017, was the first commercially available mining machine to use 10 nm ASIC chips among major mining machine producers, according to the F&S report. Our latest commercialized Ebit E12 series mining machines, which incorporate the most recent iteration of our proprietary 10 nm ASIC chips, are capable of a hash rate of up to 50 TH/s and achieves a computing power efficiency of 57W/TH. We have completed the design of our 8 nm ASIC chips and 7 nm ASIC chips and are ready to mass-produce our proprietary 8 nm ASIC chips when the market conditions become suitable. We currently focus on developing our proprietary 5 nm ASIC chips and mining machines for non-Bitcoin cryptocurrencies such as Litecoin and Monero. We will continue to devote significant resources to new technological innovations in blockchain technology.</span>
        </p>
        <p></p>
        <p style="margin-top:6px;margin-bottom:6px;line-height:150%">
          <span
            style="font-family: 仿宋_GB2312;line-height: 180%;font-size: 16px"
          >Leveraging our deep understanding of the cryptocurrency industry and strong blockchain technology as applied to ASIC chip design, we strive to expand into the upstream and downstream markets of the blockchain and cryptocurrency industry value chain to diversify our offerings and achieve a more stable financial performance. We intend to start with the cryptocurrency mining and farming business and explore applying blockchain technology into non-cryptocurrency industries, such as the financial services and healthcare industries. We believe our extensive experience in the blockchain and cryptocurrency industry positions us well in our future endeavors. Our mission is to apply technological innovation to become a globally prominent blockchain company.</span>
        </p>
        <p></p>-->
      </div>
      <div id="mission">
        <!-- 愿景使命 -->
        <div class="mission">
          <img class="miss" src="../../assets/img/our.png" alt />
          <div
            class="text"
          >Become a world-renowned blockchain company through technological innovation.</div>
        </div>
      </div>
      <div id="Milestones">
        <div class="development">
          <div class="point-area">
            <div class="point-li">
              <p class="point"></p>
            </div>
            <div class="point-li">
              <p class="point"></p>
            </div>
            <div class="point-li">
              <p class="point"></p>
            </div>
            <div class="point-li">
              <p class="point"></p>
            </div>
            <div class="point-li">
              <p class="point"></p>
            </div>
            <div class="point-li">
              <p class="point"></p>
            </div>
            <div class="point-li">
              <p class="point"></p>
            </div>
          </div>
          <p class="line"></p>
          <div class="step-content">
            <div class="step-content-li li0">
              <div class="inner">
                <div
                  class="in-ver"
                >Mr. Dong Hu founded Ebang for development & sales of communications network access devices</div>
              </div>
              <p class="tt">2010</p>
            </div>
            <div class="step-content-li li1">
              <p class="tt">2014</p>
              <div class="inner">
                <div class="in-ver">Conducted R&D into blockchain computing equipment</div>
              </div>
            </div>
            <div class="step-content-li li2">
              <div class="inner">
                <div class="in-ver">Listed on National Equities Exchange and Quotations (NEEQ)</div>
              </div>
              <p class="tt">2015</p>
            </div>
            <div class="step-content-li li3">
              <p class="tt">2016</p>
              <div class="inner">
                <div class="in-ver">Launched BPU product E9 series</div>
              </div>
            </div>
            <div class="step-content-li li4">
              <div class="inner">
                <div class="in-ver">
                  Launched Ebit E10, the first commercially available mining machine to use 10 nm ASIC chips
                  <br />
                  <br />Began to provide mining machine hosting services
                </div>
              </div>
              <p class="tt">2017</p>
            </div>
            <div class="step-content-li li5">
              <p class="tt">2018</p>
              <div class="inner">
                <div class="in-ver">
                  Delisted from NEEQ
                  <br />
                  <br />Launched Ebit 9.2 and Ebit 9.3
                </div>
              </div>
            </div>
            <div class="step-content-li li6">
              <div class="inner">
                <div class="in-ver">
                  Launched Ebit E12
                  <br />
                  <br />Completed the design of 8 nm and 7 nm ASIC chips
                </div>
              </div>
              <p class="tt">2019</p>
            </div>
          </div>
        </div>
      </div>
      <div id="Team">
        <img src="../../assets/img/team.png" alt class="about-team" />
        <div class="people">
          <div
            class="people-li"
            v-for="(item,key) in peopleList"
            :key="key"
            @click="showdialog(key)"
          >
            <div class="people-inner">
              <div class="view-more">View more</div>
              <img :src="item.pic" alt class="people-pic" />
              <div class="name">{{item.name}}</div>
            </div>
          </div>
          <div class="dialog" v-show="ifshow">
            <div class="showarea">
              <div class="close" @click="close">×</div>
              <div class="show-left">
                <img :src="peopleList[showNum].pic" alt class="show-people" />
              </div>
              <div class="show-right">
                <div class="show-name">{{peopleList[showNum].name}}</div>
                <div class="show-post">{{peopleList[showNum].post}}</div>
                <div
                  class="show-info"
                  style="height:150px; overflow-y: auto;"
                  v-html="peopleList[showNum].info"
                ></div>
                <div class="show-exp" v-show="peopleList[showNum].exp" v-for="(i,k) in peopleList[showNum].exp" :key="k">{{i.expli}}</div>
                <img v-show="peopleList[showNum].un" :src="peopleList[showNum].un" alt class="show-un" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Culture">
        <img src="../../assets/img/Company Culture.png" alt class="about-cul" />
        <div class="img-box">
          <img src="../../assets/img/cal.png" alt class="about-cul-main" />
          <div class="text-list">
            <div style="width:23%;display:inline-block;">INNOVATION</div>
            <div style="width:19%;display:inline-block;">MARKET</div>
            <div style="width:22%;display:inline-block;">QUALITY</div>
            <div style="width:15%;display:inline-block;">UNITY</div>
          </div>
        </div>
      </div>
      <div id="factory">
        <img src="../../assets/img/Factory.png" alt class="about-factory" />
        <img src="../../assets/img/factorymain.png" alt class="about-factory-main" />
      </div>
      <div id="offices">
        <img src="../../assets/img/Office location.png" alt class="about-location" />
        <div class="location-left">
          <img src="../../assets/img/map.jpg" alt class="about-office" />
        </div>
        <div class="location-right">
          <div class="location-inner">
            Address：
            <br />
            <br />26-27/F, 3/B, Xinbei Qianjiang International Building,
            <br />Yuhang Economic and Technological Development Zone,
            <br />Yuhang District, Hangzhou, Zhejiang.
            <br />
            <br />
            <br />Zip code：311100
          </div>
        </div>
      </div>
      <!-- 新闻中心区域 -->
      <div class="w-100 newsBox P-5010">
        <!-- head -->
        <div class="headerBox">
          <img src="../../assets/img/index2.png" alt class="headertit" />
        </div>
        <div class="w-1200 mx-auto">
          <div class="overflow-hidden">
            <div class="newImg">
              <img :src="imgList[4]" alt="Image" />
              <!-- <div class="marsk">
                <p class="mb-1 text-light text-truncate">{{ $t('newsList.newstitle02') }}</p>
                <p class="text-muted small">2019-10-29</p>
              </div>-->
            </div>
            <div class="newsList">
              <div class="newsItem">
                <div class="ml-20 mb-20 mr-20 dateBox">
                  <p class="day text-gradient">26</p>
                  <hr class="dateLine" />
                  <p class="year text-gradient">2020/06</p>
                </div>
                <div class="newTitle">
                  <p class="mb-1 newsTitle text-truncate" @click="goArticle('08')">
                    <b-icon icon="dot"></b-icon>Ebang Lands on Nasdaq Global Select Market
                  </p>
                  <hr class="line" />
                  <p
                    class="newsSub"
                  >On June 26, 2020 (Beijing, China), on June 26, Eastern Time, Ebang was officially listed on the Nasdaq...</p>
                  <div class="more" @click="goNews()">more+</div>
                </div>
              </div>
              <div class="newsItem">
                <div class="ml-20 mb-20 mr-20 dateBox">
                  <p class="day font-color">29</p>
                  <hr class="dateLine" />
                  <p class="year font-color">2019/05</p>
                </div>
                <div class="newTitle">
                  <p class="mb-1 newsTitle text-truncate" @click="goArticle('07')">
                    <b-icon icon="dot"></b-icon>INTRODUCING ZHEJIANG EBANG COMMUNICATION CO., LTD.
                  </p>
                  <hr class="line" />
                  <p
                    class="newsSub"
                  >ZHEJIANG EBANG COMMUNICATION CO., LTD (hereinafter referred to as "EBANG ") is a national high-tech enterprise...</p>
                  <div class="more" @click="goNews()">more+</div>
                </div>
              </div>
              <div class="newsItem">
                <div class="ml-20 mb-20 mr-20 dateBox">
                  <p class="day font-color">14</p>
                  <hr class="dateLine" />
                  <p class="year font-color">2018/12</p>
                </div>
                <div class="newTitle">
                  <p class="mb-1 newsTitle text-truncate" @click="goArticle('05')">
                    <b-icon icon="dot"></b-icon>The Year-End Promotion of EBIT
                  </p>
                  <hr class="line" />
                  <p
                    class="newsSub"
                  >Dear All:To present our appreciation for your support and ever trust, we EBIT launches the year-end promotion...</p>
                  <div class="more" @click="goNews()">more+</div>
                </div>
              </div>
              <div class="newsItem">
                <div class="ml-20 mb-20 mr-20 dateBox">
                  <p class="day font-color">19</p>
                  <hr class="dateLine" />
                  <p class="year font-color">2018/03</p>
                </div>
                <div class="newTitle">
                  <p class="mb-1 newsTitle text-truncate" @click="goArticle('04')">
                    <b-icon icon="dot"></b-icon>EBIT Gratitude and Feedback
                  </p>
                  <hr class="line" />
                  <p
                    class="newsSub"
                  >To present the appreciation for your support and trust in EBIT, the company will give feedback to all customers ...</p>
                  <div class="more" @click="goNews()">more+</div>
                </div>
              </div>
              <div class="newsItem">
                <div class="ml-20 mb-20 mr-20 dateBox">
                  <p class="day font-color">26</p>
                  <hr class="dateLine" />
                  <p class="year font-color">2017/06</p>
                </div>
                <div class="newTitle">
                  <p class="mb-1 newsTitle text-truncate" @click="goArticle('01')">
                    <b-icon icon="dot"></b-icon>Marching ahead of time：Ebang communication
                  </p>
                  <hr class="line" />
                  <p
                    class="newsSub"
                  >On June 26, 2017, Mo Chongming（member of the Standing Committee of the Haixi Prefecture Committee of Qinghai...</p>
                  <div class="more" @click="goNews()">more+</div>
                </div>
              </div>
              <!-- <div class="newsItem">
                <div class="ml-20 mb-20 mr-20 dateBox">
                  <p class="day font-color">25</p>
                  <hr class="dateLine">
                  <p class="year font-color">2017/05</p>
                </div>
                <div class="newTitle">
                  <p class="mb-1 newsTitle text-truncate" @click="goArticle('06')"><b-icon icon="dot"></b-icon>Blockchain Love Hangzhou-Deputy District Governor Mr.  Xue Hongxiang Successfully Investigate Ebang</p>
                  <hr class="line">
                  <p class="newsSub">On May 25, 2017, in the hot atmosphere of the Hangzhou blockchain, Mr. Xue Hongxiang (deputy head...</p>
                  <div class="more" @click="goNews()">more+</div>
                </div>
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: require("../../assets/img/banner.png"),
      ifshow: false,
      showNum: "0",      
      imgList:['/static/img/product-b1.jpg','/static/img/product-b2.jpg','/static/img/product-left.jpg','/static/img/bn1.png','/static/img/news.jpg'],
      imgSrc:[require('../../assets/img/banner.png'),require('../../assets/img/banner1.jpg'),require('../../assets/img/banner3.jpg'),require('../../assets/img/banner4.jpg'),require('../../assets/img/banner5.jpg')],
      peopleList: [
        {
          name: "Hu Dong",
          pic: require("../../assets/img/people1.png"),
          post: "Chairman of the Board and Chief Executive Officer",
          info:
            "Mr. Hu is our founder and has served as chairman of the board of directors and our chief executive officer since May 2018. He has also served as chairman of the board of directors and chief executive officer of Zhejiang Ebang since January 2010. Mr. Hu has over 20 years of experience in the network communication and computing industry. Between August 1998 and August 2009, he was a teacher of the College of Information Engineering at Zhejiang University of Technology. From August 2009, he worked as a teacher of the College of Computer Science and Technology at the same university until October 2017. He is also an executive director of each of Ebang IT, Hangzhou Dewang, Ebang Hongfa, Ebang Jusheng and Ebang Hongling, and a director of HK Bite, HK Ebang Technology and HK Ebang Information. Mr. Hu is primarily responsible for overseeing the sales and marketing, research and development, business strategy and overall management of our Company. Mr. Hu graduated from Zhejiang University of Technology with an undergraduate degree in industrial automation in July 1998. In September 2008, Mr. Hu obtained a master of business administration (MBA) degree from Zhejiang University.",
          exp:[{
            expli:"Chair of the Compensation Committee."
          }],
          un: require("../../assets/img/un1.png")
        },
        {
          name: "Chen Lei",
          pic: require("../../assets/img/people2.jpg"),
          post: "Founder,Chairman and CEO",
          info:
            "● Around 17 years of experience in the financial and accounting field.<br>● A Chinese CPA designation holder.<br>● Former CFO of Hailiang Education Group (NASDAQ: HLG).<br>● Former Auditing Manager at KPMG and Senior Auditor at PwC.<br>● Obtained a bachelor’s degree in International Business and Accounting from Guangdong University of Foreign Studies.",
          un: require("../../assets/img/un2.png")
        },
        {
          name: "Peng Chunjuan",
          pic: require("../../assets/img/people3.jpg"),
          post: "Director and Deputy General Manager",
          info:
            "Ms. Peng is our deputy general manager and has served as a director since May 2018. She has also served as a deputy general manager and as a director of Zhejiang Ebang since January 2010. Ms. Peng has over 15 years of experience in the areas of business operation and production and supply chain management. From September 2003 to January 2010, Ms. Peng was a deputy general manager at Hangzhou Ebang Communication Technology Co., Ltd., where she was responsible for assisting in managing the daily operation of the company. Ms. Peng is mainly responsible for our production and supply chain management, which includes overseeing the procurement of raw materials and production and quality control. Ms. Peng graduated from Jiangxi Normal University with a self-taught associate degree in tourism management in June 1997.",
            exp:[{
              expli:"Chair of the Nominating and Corporate Governance Committee."
            }]
        },
        {
          name: "Lyu Tingjie",
          pic: require("../../assets/img/people3.jpg"),
          post: "Independent Director Appointee",
          info:
            "Mr. Lyu will serve as our director starting from the SEC’s declaration of effectiveness of our registration statement on Form F-1 of which this prospectus is a part. He has served as an independent director of China United Telecommunications Co. Ltd., Shenzhen Aisidi Co., Ltd., China Communications Services Corporation Limited and Beijing Digital Telecom Co., Ltd. since May 2016, June 2014, June 2015 and May 2013, respectively. Mr. Lyu has over 35 years of experience in the telecommunications industry. Since June 1985, Mr. Lyu successively served as a teacher, an associate professor and a professor at Beijing University of Posts and Telecommunications, College of Economic Management. Mr. Lyu is also an executive director and an executive vice president of International Telecommunication Association and China Information Economy Society, respectively. Mr. Lyu is the director of each Modern Management Committee of China Communications Society and Communication Technology and Economics Committee of China Association of Technology and Economics and the deputy director of E-commerce Teaching Steering Committee of the Ministry of Education. Mr. Lyu holds a bachelor’s degree in radio engineering and a master’s degree in management engineering from Beijing University of Posts and Telecommunications and a doctor’s degree in engineering from Kyoto University.",
            exp:[{
              expli:"Member of the Audit Committee."
            },{
              expli:"Member of the Compensation Committee."
            },{
              expli:"Member of the Nominating and Corporate Governance Committee."
            }],
            un: require("../../assets/img/un3.png")
        },
        {
          name: "Wang Sunfeng",
          pic: require("../../assets/img/people3.jpg"),
          post: "Director and Deputy General Manager",
          info:
            "Ms. Wang is our deputy general manager and has served as a director since May 2018. She has also served as deputy general manager and as a director of Zhejiang Ebang since July 2013. Ms. Wang has over 19 years of management-related experience and has ample knowledge of corporate governance. Between October 2001 and April 2003, Ms. Wang was an assistant to the general manager at Shenzhen East Sunshine Chemical Foil Co., Ltd. From May 2003 to December 2011, she was the secretary to the board of directors of Zhejiang Tianyuan Bio-pharmaceutical Co., Ltd. From December 2011 to March 2013, Ms. Wang was an assistant to the general manager at Hangzhou Hexing Electrical Co., Ltd. Ms. Wang is mainly responsible for providing advice on our corporate governance, connected transactions, compliance and risk management matters. Ms. Wang obtained a self-taught undergraduate degree in management and engineering from the School of Economics of People’s Liberation Army in June 2008. Ms. Wang was granted the qualification for secretary of board of directors issued by the Shenzhen Stock Exchange and the National Equities Exchange and Quotations on June 18, 2016 and April 21, 2017 respectively. Ms. Wang completed a Growth Industry Leading Enterprise Executive Training course conducted by Tsinghua University School of Continuing Education in May 2018.",
            exp:[{
              expli:"Member of the Audit Committee."
            }]
        },
        {
          name: "Ken He",
          pic: require("../../assets/img/people3.jpg"),
          post: "Independent Director Appointee",
          info:
            "Mr. He will serve as our director starting from the SEC’s declaration of effectiveness of our registration statement on Form F-1 of which this prospectus is a part. He has served as an independent director of Hailiang Education Group Inc. since 2015. Mr. He has over 15 years of experience in accounting and finance. Between 2003 and 2009, Mr. He successively served in the audit and assurance department at PricewaterhouseCoopers China and Australia. From 2009 and 2011, he was the investment director of Wealthcharm Investments Limited. From 2011 and 2015, Mr. He was the chief financial officer of China Shengda Packaging Group Inc. Since 2015, Mr. He served as a director, the vice president and the responsible officer of Racing Capital Management (HK) Limited. Mr. He holds a bachelor’s degree in accounting from Sun Yat-sen University and a master’s degree in applied finance from Macquarie University. Mr. He is a U.S. Certified Public Accountant, and he also holds a Certified Public Accountant designation from the Chinese Institute of CPA, a Certified Public Accountant designation from the Hong Kong Institute of CPA, a Certified Practicing Accountant designation from the CPA Australia and a Chartered Financial Analyst designation from the CFA Institute.",
            exp:[{
              expli:"Chair of the Audit Committee."
            },{
              expli:"Member of the Compensation Committee."
            },{
              expli:"Member of the Nominating and Corporate Governance Committee."
            }],
            un: require("../../assets/img/un4.png")
        }
      ]
    };
  },
  methods: {
    goNews() {
      this.$router.push({
        path: "/news"
      });
    },
    // goA(url){
    //   this.$router.push({
    //     path:url
    //   })
    // },
    go(){
      this.$router.push({
        path:'/index'
      })
    },
    goArticle(num){
      this.$router.push({
        path: '/new'+num,
      })
    },
    showdialog(ind) {
      this.ifshow = true;
      this.showNum = ind;
    },
    close() {
      this.ifshow = false;
    },
    scrollIntoView(evt) {
      evt.preventDefault();
      const href = evt.target.getAttribute("href");
      const el = href ? document.querySelector(href) : null;
      if (el) {
        this.$refs.content.scrollTop = el.offsetTop;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ {
  .carousel-indicators li {
    height: 6px;
    background-color: #dbdbdb;
    opacity: 1;
  }
  .carousel-indicators .active {
    background-color: #eedd22;
    opacity: 1;
    outline: none;
  }
  :focus {
    outline: none;
  }
}
#carouselExampleIndicators {
  .carousel-inner {
    .carousel-item {
      .pic[lazy="loading"] {
        opacity: 0.9;
      }
    }
  }
  .card {
    background-color: transparent;
    color: #fff;
  }
  .list-group {
    width: 200px;
    position: fixed;
    left: 10px;
    top: 300px;
  }
  .list-group-item {
    background-color: $bg-navbar;
    z-index: 999;
    width: 200px;
    color: #287efa;
    left: 0;
    border-color: $bg-navbar;
    &.active {
      color: #fff;
    }
  }
}
.img-box {
  position: relative;
  .text-list {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 13%;
  }
}
.banner {
  cursor: pointer;
}
.about-tit {
  display: block;
  height: 45px;
  margin: 40px auto;
}
.about-small {
  display: block;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 40px;
}
.mission {
  font-size: 0;
  text-align: center;
  padding: 40px 10%;
  background: rgba(255, 255, 255, 0.4);
  margin: 60px 0;
  .miss {
    width: 30%;
    display: inline-block;
    height: 50px;
    vertical-align: top;
  }
  .text {
    width: 70%;
    display: inline-block;
    text-align: center;
    font-size: 20px;
    line-height: 25px;
    vertical-align: top;
  }
}
.development {
  height: 500px;
  position: relative;
  .line {
    position: absolute;
    top: 50%;
    height: 2px;
    width: 100%;
    background: rgba($color: #fff, $alpha: 0.6);
    z-index: 2;
  }
  .point-area {
    position: absolute;
    z-index: 3;
    top: 50%;
    margin-top: -3px;
    height: 9px;
    width: 100%;
    padding: 0 6.5%;
    .point-li {
      width: 14.2%;
      float: left;
      overflow: hidden;
      height: 9px;
      text-align: center;
      font-size: 0;
      .point {
        display: inline-block;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: #fff;
        overflow: hidden;
      }
    }
  }
  .step-content {
    z-index: 1;
    height: 500px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    .step-content-li {
      position: absolute;
      width: 25%;
      height: 230px;
      overflow: hidden;
      padding: 6px 6px;
      .tt {
        margin: 8px 0;
        height: 28px;
        line-height: 28px;
        font-size: 24px;
        color: #fff;
        text-align: center;
        overflow: hidden;
      }
      .inner {
        border: 1px #fff solid;
        overflow: hidden;
        height: 180px;
        display: table;
        width: 100%;
        padding: 10px 10px;
        background: rgba($color: #fff, $alpha: 0.2);
        .in-ver {
          display: table-cell;
          vertical-align: middle;
          overflow: hidden;
        }
      }
    }
    .li0 {
      left: 0;
      top: 0;
    }
    .li1 {
      left: 12.5%;
      bottom: 0;
    }
    .li2 {
      left: 25%;
      top: 0;
    }
    .li3 {
      left: 37.5%;
      bottom: 0;
    }
    .li4 {
      left: 50%;
      top: 0;
    }
    .li5 {
      left: 62.5%;
      bottom: 0;
    }
    .li6 {
      left: 75%;
      top: 0;
    }
  }
}
.about-team {
  display: block;
  height: 50px;
  margin: 60px auto;
}
.people {
  overflow: hidden;
  .people-li {
    width: 25%;
    float: left;
    overflow: hidden;
    padding: 0 10px;
    margin-bottom: 20px;
    cursor: pointer;
    .people-inner {
      position: relative;
      background: #eee;
      .people-pic {
        display: block;
        width: 100%;
        height: 340px;
      }
      .name {
        position: absolute;
        padding-left: 10px;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40px;
        transition: 0.3s all;
        background: rgba($color: #000, $alpha: 0.6);
        font-size: 20px;
        color: #fff;
        line-height: 40px;
      }
      .view-more {
        position: absolute;
        right: 10px;
        top: 0;
        line-height: 20px;
        font-size: 14px;
        color: #fff;
        opacity: 0;
        transition: 0.3s all;
      }
      &:hover {
        .view-more {
          opacity: 1;
        }
      }
    }
  }
  .dialog {
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba($color: #000, $alpha: 0.6);
    .showarea {
      position: absolute;
      width: 800px;
      background: #fff;
      padding: 30px 30px;
      left: 50%;
      top: 25%;
      margin-left: -400px;
      .close {
        position: absolute;
        right: 0;
        top: 0;
        background: #00c1de;
        cursor: pointer;
        color: #fff;
        height: 40px;
        width: 40px;
        font-size: 40px;
        text-align: center;
        line-height: 30px;
        overflow: hidden;
      }
      .show-left {
        width: 30%;
        float: left;
        overflow: hidden;
        .show-people {
          display: block;
          width: 100%;
        }
      }
      .show-right {
        width: 70%;
        float: left;
        overflow: hidden;
        padding-left: 30px;
        .show-name {
          line-height: 30px;
          color: #000;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .show-post {
          line-height: 30px;
          color: #000;
          font-size: 24px;
          margin-bottom: 20px;
        }
        .show-info {
          line-height: 30px;
          color: #000;
          font-size: 20px;
          margin-bottom: 20px;
        }
        .show-exp{
          background: url('../../assets/img/member.png') no-repeat left top;
          background-size: 30px 30px;
          padding-left: 36px;
          line-height: 30px;
          color: #000;
          font-size: 18px;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .show-un {
          display: block;
          height: 60px;
          overflow: hidden;
        }
      }
    }
  }
}
.about-cul {
  display: block;
  height: 50px;
  margin: 60px auto;
}
.about-cul-main {
  display: block;
  width: 100%;
  overflow: hidden;
}
.about-factory {
  display: block;
  height: 50px;
  margin: 60px auto;
}
.about-factory-main {
  display: block;
  width: 100%;
  overflow: hidden;
}
.about-location {
  display: block;
  height: 50px;
  margin: 60px auto;
}
.location-left {
  width: 50%;
  float: left;
  overflow: hidden;
  .about-office {
    display: block;
    height: 400px;
    margin: 0 auto;
    overflow: hidden;
  }
}
#offices {
  overflow: hidden;
  margin-bottom: 60px;
}
.location-right {
  width: 50%;
  float: left;
  overflow: hidden;
  height: 400px;
  display: table;
  .location-inner {
    display: table-cell;
    vertical-align: middle;
    line-height: 30px;
    font-size: 20px;
    color: #fff;
  }
}
.bg-news {
  background-color: #000022;
}
.headerBox {
  height: 85px;
  margin: auto;
  margin-bottom: 50px;
  text-align: center;
}
.headertit {
  display: inline-block;
  height: 85px;
}
.P-5010 {
  padding: 50px 0 100px 0;
}
.text-header {
  font-size: 36px;
  margin: 0;
  letter-spacing: 1px;
  line-height: 43px;
  font-weight: 500;
}
.stillBox {
  background-image: url("/static/img/bg-still.png");
  .imgBlock {
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background-color: $placeImg;
    // background-repeat: no-repeat; background-position: center; background-image: url("/static/img/loder.gif");
    .imgText {
      position: absolute;
      z-index: 66;
      bottom: 50px;
      left: 50px;
      font-size: 18px;
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
      padding: 10px;
      cursor: pointer;
      transition: all 1s;
      &:hover,
      &:active {
        border: 2px solid #fff;
      }
    }
    img {
      transition: all 1s;
    }
    &:hover {
      img {
        transform: scale(1.2);
      }
    }
  }
}
.title {
  font-size: 32px;
  color: #32374a;
  text-align: center;
  font-weight: 700;
}
.newImg {
  width: 540px;
  height: 680px;
  display: inline-block;
  vertical-align: top;
  background-color: $placeImg;
  // background-repeat: no-repeat; background-position: center; background-image: url("/static/img/loder.gif");background-color: rgba(255, 255, 255, 0.7) !important;
  img {
    width: 100%;
    height: 100%;
  }
}
.more {
  position: absolute;
  color: #eedd22;
  z-index: 50;
  right: 5px;
  bottom: 20px;
  font-size: 16px;
}
.newsList {
  width: 650px;
  display: inline-block;
  color: #fff;
  transition: all 1s;
  .newsItem {
    cursor: pointer;
    position: relative;
    &:hover {
      .newTitle {
        .newsTitle {
          color: #00ff77;
        }
        .more {
          color: #00ff77;
        }
      }
    }
    .dateBox {
      width: 120px;
      height: 120px;
      background-color: #39395a;
      display: inline-block;
      vertical-align: top;
      text-align: center;
      font-family: "黑体";
      p {
        margin: 0;
        font-weight: bold;
      }
      .day {
        font-size: 48px;
      }
      .year {
        font-size: 22px;
        line-height: 45px;
      }
      .font-color {
        color: greenyellow;
      }
      .dateLine {
        border-color: #000022;
        margin: 0;
      }
    }
    .newTitle {
      display: inline-block;
      width: 480px;
      .line {
        border-color: #171834;
        margin-top: 0;
        margin-bottom: 5px;
      }
      .newsTitle {
        font-size: 24px;
        line-height: 60px;
        font-weight: 400;
      }
      .newsSub {
        font-size: 16px;
        color: #dbdbdb;
        max-height: 50px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
}
</style>
