<template>
  <div class="portfolio">
    <div id="forPop" v-if="isPop"></div>
    <div class="title" v-hotkey="keymap">
      <h1>作品集 Portfolio</h1>
      <button id="me-nav-left" @click="start()">&laquo; pre page</button>
      <button id="me-nav-right" @click="start()">next page&raquo;</button>
    </div>
    <div class="pop" ref="pop">
      <span id="removePop" @click="removePop">
        <font-awesome-icon icon="times" />
      </span>
      <div
        v-for="item in works"
        :key="item.id"
        v-show="workId===item.id"
        class="popContent"
        ref="popContent"
      >
        <div class="popImg" :style="{ backgroundImage: 'url(' + item.img + ')' }"></div>
        <h2>作品名稱</h2>
        <h2>{{item.name}}</h2>
        <h4>{{item.desc}}</h4>
        <h3>主要使用技術:</h3>
        <h5>{{item.skills[0]}} / {{item.skills[1]}} / {{item.skills[2]}} /{{item.skills[3]}}</h5>
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
          name: "個人履歷網站",
          desc: "獨立架設企業網站 / 使用Node.js、express、MySQL打造的企業網站",
          img: "/img/resume.png",
          pop: "resume",
          skills: ["Vue.js", "Vue-Router", "CSS3", "SASS/SCSS"],
        },
        {
          id: 2,
          name: "船舶仲介網站",
          desc: "使用Node.js、express、MySQL打造的企業網站",
          img: "/img/broker.png",
          pop: "broker",
          skills: ["Node.js", "Express", "MySQL", "Bootstrap"],
        },
        {
          id: 3,
          name: "簡易Twitter社交平台",
          desc: "使用Node.js、express、MySQL打造的簡易Twitter社交平台",
          img: "/img/Simple_twitter.png",
          pop: "twitter",
          skills: ["Node.js", "MySQL", "Chai Unit test", "Socket.io"],
        },
        {
          id: 4,
          name: "我的記賬本",
          desc: "串接Facebook api 作為帳號連結",
          img: "/img/book.png",
          pop: "book",
          skills: ["Node.js", "Express", "MongoDB", "Connect FB API"],
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
  padding-top: 1rem;
}

.title {
  width: 1200px;
  margin: 0 auto;
  border-bottom: 3px solid;
}

#me-nav-left,
#me-nav-right {
  border: 1px solid;
  border-radius: 4px;
  font-size: 14px;
  color: #bbb;
  background: white;
  text-transform: uppercase;
  letter-spacing: 0.125em;
  margin: 0 10px 10px 0;
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
  padding: 35px 0 250px;
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
  font-family: "Noto Sans TC", sans-serif;
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
  font-family: "Noto Sans TC", sans-serif;
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
  width: 50%;
  height: 80%;
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
  width: 800px;
  height: 400px;
  background-size: cover;
  margin: 50px auto 25px;
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