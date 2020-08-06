<template>
  <div class="portfolio">
    <div class="title" v-hotkey="keymap">
      <h1>作品集 Portfolio</h1>
      <button id="me-nav-left" @click="start()">&laquo; pre page</button>
      <button id="me-nav-right" @click="start()">next page&raquo;</button>
    </div>
    <ul class="timeline">
      <li class="resume">
        <a href="#">
          <div class="timeline-img"></div>
          <h2>個人履歷網站</h2>
          <p>以Vue打造</p>
        </a>
      </li>
      <li class="broker">
        <a href="#">
          <div class="timeline-img"></div>
          <h2>企業網站</h2>
          <p>使用Node.js、express、MySQL打造的企業網站</p>
        </a>
      </li>
      <li class="twitter">
        <a href="#">
          <div class="timeline-img"></div>
          <h2>簡易Twitter社交平台</h2>
          <p>使用Node.js、express、MySQL打造的簡易Twitter社交平台</p>
        </a>
      </li>
      <li class="book">
        <a href="#">
          <div class="timeline-img"></div>
          <h2>我的記賬本</h2>
          <p>串接Facebook api 作為帳號連結</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  methods: {
    left() {
      this.$router.push("/aboutme");
    },
    right() {
      this.$router.push("/contact");
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
  margin-top: 3rem;
  height: 100%;
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
  padding: 100px 0 200px;
}

.resume .timeline-img {
  width: 340px;
  height: 200px;
  background: url(../../public/img/resume.png);
}

.broker .timeline-img {
  width: 340px;
  height: 200px;
  background: url(../../public/img/broker.png);
}
.twitter .timeline-img {
  width: 340px;
  height: 200px;
  background: url(../../public/img/Simple_twitter.png);
}
.book .timeline-img {
  width: 340px;
  height: 200px;
  background: url(../../public/img/book.png);
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
  z-index: 2;
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
.timeline a:hover {
  background-color: #6fa5f6;
}
.timeline a:hover h2,
.timeline a:hover p {
  color: #fff;
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
</style>