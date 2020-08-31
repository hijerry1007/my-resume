<template>
  <div class="portfolio">
    <div id="forPop" v-if="isPop"></div>
    <div class="title" v-hotkey="keymap">
      <h1>作品集 Portfolio</h1>
    </div>
    <div class="pop" ref="pop">
      <span id="removePop" @click="removePop">
        <font-awesome-icon class="github" icon="times" />
      </span>
      <div
        v-for="item in works"
        :key="item.id"
        v-show="workId===item.id"
        class="popContent"
        ref="popContent"
      >
        <img class="popImg" :src="item.popImg" />

        <a v-if="item.github" :href="item.github">
          <div class="github">
            <font-awesome-icon icon="code-branch" />
          </div>GitHub
        </a>
        <a v-if="item.heroku" :href="item.heroku">
          <img class="heroku" src="https://img.icons8.com/ios/50/000000/heroku.png" />
          Heroku
        </a>
        <div class="popDesc">
          <h2>作品名稱: {{item.name}}</h2>
          <h2></h2>
          <h4>{{item.desc}}</h4>
          <h3>主要使用技術:</h3>
          <div class="skills">
            <div class="skill">{{item.skills[0]}}</div>
            <div class="skill">{{item.skills[1]}}</div>
            <div class="skill">{{item.skills[2]}}</div>
            <div class="skill">{{item.skills[3]}}</div>
            <div class="skill">{{item.skills[4]}}</div>
          </div>
        </div>
      </div>
    </div>
    <ul class="timeline">
      <li v-for="item in works" :key="item.id">
        <a href="#">
          <div class="timeline-img" :style="{ backgroundImage: 'url(' + item.img + ')' }"></div>
          <h2>{{item.name}}</h2>

          <button @click="getPop(item.id)" class="timeline-btn" :disabled="isDisabled">See More</button>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      isPop: false,
      workId: "",
      isDisabled: false,
      works: [
        {
          id: 1,
          name: "Vue-GoogleMap尋找鄰近餐廳",
          desc: "使用Vue前端框架搭配GoogleMapApi技術練習",
          img:
            "https://raw.githubusercontent.com/hijerry1007/my-resume/master/public/img/gmap.jpg",
          popImg:
            "https://raw.githubusercontent.com/hijerry1007/my-resume/master/public/img/gmapPop.jpg",
          skills: ["Vue.js", "Vuex", "Bootstrap", "GoogleMapAPI", "Axios"],
          github: "https://hijerry1007.github.io/googleMapApi_test/",
          heroku: null,
        },
        {
          id: 2,
          name: "Vue框架-個人履歷網站",
          desc: "純使用Vue.js前端框架所架設的靜態網站",
          img:
            "https://raw.githubusercontent.com/hijerry1007/my-resume/master/public/img/resume.jpg",
          popImg:
            "https://raw.githubusercontent.com/hijerry1007/my-resume/master/public/img/resumePop.jpg",
          skills: [
            "Vue.js",
            "Vue-Router-SPA",
            "CSS3&SCSS -切版及動畫",
            "串接GoogleMapAPI-標記居住地",
            "Formspree純前端郵件-發送郵件功能",
          ],
          github: "https://hijerry1007.github.io/my-resume/#/",
          heroku: null,
        },
        {
          id: 3,
          name: "MySQL-企業船舶資料庫網站",
          desc: "使用Node.js、express、MySQL打造的企業網站",
          img:
            "https://raw.githubusercontent.com/hijerry1007/my-resume/master/public/img/broker.jpg",
          popImg:
            "https://raw.githubusercontent.com/hijerry1007/my-resume/master/public/img/brokerPop.jpg",
          skills: [
            "Node.js&Express",
            "Restful API實作後台船舶資料Crud功能",
            "MySQL-後台資料庫",
            "Bootstrap",
            "VesselFinderAPI-實作瀏覽船舶位置功能",
          ],
          github: "https://github.com/hijerry1007/arkshipping",
          heroku: "https://arkshipping.herokuapp.com/",
        },
        {
          id: 4,
          name: "團體專案-Twitter社交平台",
          desc:
            "團隊協作社交平台專案/個人負責User部分所有路由邏輯及頁面、標記好友功能。版本控制:Github",
          img:
            "https://raw.githubusercontent.com/hijerry1007/my-resume/master/public/img/Simple_twitter.jpg",
          popImg:
            "https://raw.githubusercontent.com/hijerry1007/my-resume/master/public/img/Simple_twitterPop.jpg",
          skills: [
            "Node.js&Express",
            "MySQL-後台資料庫",
            "Socket.io&debounce&JS Dom操作-實作標記好友功能",
            "Restful API實作User部分路由及頁面",
            "Chai Unit test",
          ],
          github:
            "https://github.com/whynotwilson/simple-twitter-express-starter",
          heroku: "https://ac-simple-twitter-starter.herokuapp.com/signin",
        },
        {
          id: 5,
          name: "MongoDB-我的記賬本",
          desc: "用MongoDB作為資料庫架設的簡易記帳應用程式",
          img:
            "https://raw.githubusercontent.com/hijerry1007/my-resume/master/public/img/book.jpg",
          popImg:
            "https://raw.githubusercontent.com/hijerry1007/my-resume/master/public/img/bookPop.jpg",
          skills: [
            "Node.js",
            "Express",
            "MongoDB資料庫-可依時間及支出類別篩選資料庫",
            "Passport實作帳號註冊登入功能並串接FacebookAPI",
            "Chart.js-實作圓餅圖分析支出功能",
          ],
          github: "https://github.com/hijerry1007/myAccount",
          heroku: null,
        },
      ],
    };
  },
  methods: {
    left() {
      this.$router.push("/aboutme");
    },
    right() {
      this.$router.push("/contact");
    },
    getPop: function (index) {
      this.workId = index;
      this.isPop = true;
      this.$refs.pop.style.display = "block";
      this.isDisabled = true;
    },
    removePop: function () {
      this.isDisabled = false;
      this.$refs.popContent.innerHTML = "";
      this.isPop = false;
      this.$refs.pop.style.display = "none";
    },
  },
  computed: {
    keymap() {
      return {
        left: this.left,
        right: this.right,
        esc: () => {
          if (this.isDisabled) {
            this.removePop();
          } else {
            this.$router.push("/nav");
          }
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  list-style: none;
}

.portfolio {
  font-family: "Noto Sans TC";
  padding-top: 1rem;
}

.title {
  width: 1200px;
  margin: 0 auto;
  border-bottom: 3px solid;
  text-align: center;
  letter-spacing: 0.5em;
  padding-left: 40px;
  color: #ffffff;
}

.title h1 {
  margin: 20px 0;
  color: white;
}

.timeline::after {
  content: "";
  display: block;
  height: 0px;
  width: 100%;
  clear: both;
}

.timeline {
  width: 960px;
  margin: auto;
  padding: 35px 0 150px;
}

.timeline-img {
  width: 340px;
  height: 200px;
}

.timeline li {
  width: 50%;
  box-sizing: border-box;
  padding: 20px 0;
  position: relative;
}
.timeline li::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #aaa;
}
.timeline li:nth-child(odd)::before {
  right: -10px;
}
.timeline li:nth-child(even)::before {
  left: -10px;
}
.timeline li:nth-child(odd) {
  float: left;
  padding-right: 100px;
}
.timeline li:nth-child(even) {
  float: right;
  padding-left: 100px;
  transform: translateY(50%);
}
.timeline li:nth-child(odd)::after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  width: 1px;
  height: 100%;
  background-color: #ccc;
  right: 0;
}
.timeline li:last-child::after {
  height: 50%;
}
.timeline a {
  display: block;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #aaa;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px #888;
  transition: 0.3s;
}

.timeline h2 {
  color: #333;
  font-weight: 700;
}
.timeline h2::after {
  content: "";
  position: absolute;
  height: 1px;
  width: 100px;
  background-color: #aaa;
  top: 0;
  bottom: 0;
  margin: auto;
}
.timeline li:nth-child(odd) h2::after {
  right: 0;
}
.timeline li:nth-child(even) h2::after {
  left: 0;
}

.timeline p {
  color: #666;
  font-weight: 100;
}
.clearcheck {
  background-color: #fff;
  border: 1px solid #aaa;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px #888;
}

.timeline-btn {
  width: 150px;
  height: 30px;
  text-align: center;
  vertical-align: middle;
  padding: 3px;
  border: 0px solid #275498;
  border-radius: 4px;
  background: #4a9eff;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#4a9eff),
    to(#275498)
  );
  background: -moz-linear-gradient(top, #4a9eff, #275498);
  background: linear-gradient(to bottom, #4a9eff, #275498);
  -webkit-box-shadow: #59beff 0px 0px 0px 2px;
  -moz-box-shadow: #59beff 0px 0px 0px 2px;
  box-shadow: #59beff 0px 0px 0px 2px;
  text-shadow: #17325a 0px 0px 1px;
  font: normal normal 15px verdana;
  color: #ffffff;
  text-transform: uppercase;
  outline: none;
}

.timeline-btn:hover,
.timeline-btn:focus {
  border: 0px solid #0230b1;
  background: #0690ff;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#0690ff),
    to(#0234bf)
  );
  background: -moz-linear-gradient(top, #0690ff, #0234bf);
  background: linear-gradient(to bottom, #0690ff, #0234bf);
  color: #ffffff;
  text-decoration: none;
}

.pop {
  display: none;
  position: absolute;
  width: 45%;
  height: 780px;
  background: white;
  z-index: 3;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  box-sizing: border-box;
  border: 5px outset lightgray;
  border-radius: 10px;
  color: black;
}

#forPop {
  width: 100%;
  height: 1200px;
  top: 0px;
  left: 0px;
  position: absolute;
  filter: Alpha(opacity=60);
  opacity: 0.4;
  background: #000000;
  z-index: 2;
}

.popImg {
  display: block;
  width: 85%;
  height: auto;
  margin: 20px auto;
}

.popDesc {
  width: 100%;
  height: auto;
}

.skills {
  width: 70%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

.skill {
  background: burlywood;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pop a {
  display: inline-block;
  text-decoration: none;
  width: 100px;
  position: relative;
  font-size: 18px;
  padding: 0 3px;
  margin: 0 10px;
  color: #000000;
  background: rgb(199, 253, 253);
  border-radius: 10px;
}

.github {
  display: inline-block;
  margin-right: 3px;
}

.heroku {
  position: absolute;
  left: -2px;
  top: 3px;
  width: 21px;
  height: 21px;
}

.pop a:hover {
  font-size: 20px;
  .heroku {
    width: 22px;
    height: 22px;
  }
}

span {
  position: absolute;
  right: 15px;
  top: 10px;
  display: inline-block;
  font-size: 20px;
}
span:hover {
  color: red;
  opacity: 0.6;
}
</style>