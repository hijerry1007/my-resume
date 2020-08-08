<template>
  <div class="aboutme">
    <div class="title" v-hotkey="keymap">
      <h1>關於我 About Me</h1>
    </div>
    <div class="me-card">
      <div id="me-picture">
        <div id="me-picture-banner">
          <div id="me-picture-img"></div>
        </div>
        <div id="me-intro">
          <span>
            <h1>Jerry</h1>
          </span>
          <h1>賴志承</h1>
          <div class="me-intro-icon">
            <font-awesome-icon icon="info-circle" />
            <h3>Basic Info</h3>
          </div>
          <div v-for="(item) in me" :key="item.id" class="me-info">
            <div class="me-info-icon">
              <font-awesome-icon :icon="item.icon" />
            </div>
            <div class="me-info-item">
              <div class="me-info-title">
                <h4>{{item.title}}</h4>
              </div>
              <div class="me-info-content">
                <h5>{{item.content}}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="me-desc">
        <h3>一年web前後端開發及資料庫架構經驗，熟悉使用Node.js開發軟體，喜愛網頁開發。</h3>
        <h3>先前工作主要負責市場資料蒐集及分析，了解市場資料蒐集不易，想要提升工作效率進而接觸程式開發。</h3>
        <h3>之後自行報名參與ALPHACAMP的全端線上課程，更加深自己對程式開發的興趣，並期許自己能開發出能解決問題的應用程式！</h3>
        <div id="me-skill">
          <h2>Skills</h2>
          <hr />
          <div class="me-skill-box">
            <div id="me-skill-frontend">
              <h4>Front End</h4>
              <ul>
                <li class="skill-percentage">HTML5/CSS3</li>
                <li class="skill-percentage">JAVASCRIPT (ES6)</li>
                <li class="skill-percentage">Vue.js</li>
                <li class="skill-percentage">AJAX (axios)</li>
              </ul>
            </div>
            <div id="me-skill-backend">
              <h4>Back End</h4>
              <ul>
                <li class="skill-percentage">Node.js / Express.js</li>
                <li class="skill-percentage">Restful API</li>
                <li class="skill-percentage">Unit Test</li>
              </ul>
            </div>
            <div id="me-skill-other">
              <h4>Other</h4>
              <ul>
                <li class="skill-percentage">MongoDB</li>
                <li class="skill-percentage">MySQL</li>
                <li class="skill-percentage">GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aboutme",
  data() {
    return {
      me: [
        {
          id: "1",
          title: "Email",
          icon: "envelope-square",
          content: "jerrydavid123@hotmail.com",
        },
        {
          id: "2",
          title: "Birth Date",
          icon: "birthday-cake",
          content: "1990/10/07",
        },
        {
          id: "3",
          title: "Habitation",
          icon: "map-marker-alt",
          content: "Taipei, Taiwan",
        },
      ],
    };
  },
  methods: {
    left() {
      this.$router.push("/nav");
    },
    right() {
      this.$router.push("/portfolio");
    },
  },
  computed: {
    keymap() {
      return {
        left: this.left,
        right: this.right,
        esc: () => {
          this.$router.push("/nav");
        },
      };
    },
  },
};
</script>


<style lang="scss" scoped>
$time: 1.2s;

.aboutme {
  font-family: "Noto Sans TC";
  display: flex;
  flex-flow: column;
  padding-top: 1rem;
  color: #ffffff;
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

.me-card {
  display: flex;
  flex-flow: row;
  margin-top: 3rem;
}

#me-picture {
  margin-left: auto;
}

#me-picture #me-picture-banner {
  background-color: #ebebeb;
  background: linear-gradient(145deg, #a39d9d 45%, transparent 60%);
  border-radius: 50%;
  width: 230px;
  height: 230px;
  position: relative;
}

#me-picture-img {
  width: 200px;
  height: 200px;
  border: 1px solid white;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  left: 15px;
  top: 15px;
  background-image: url(../../public/img/avatar.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

#me-picture-img:hover {
  animation: rotate 2s ease 1;
}

#me-intro {
  span h1 {
    margin-right: 10px;
  }
  h1 {
    display: inline;
  }
}

.me-intro-icon {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 10px;
  padding: 0;
  h3 {
    margin: 0 0 20px 20px;
    padding: 0;
    line-height: 18px;
  }
  border-bottom: 1px solid;
}

.me-info {
  display: flex;
  flex-flow: row;
  margin: 0;
  padding: 0;
  .me-info-item {
    margin: 0 0 20px 20px;
    .me-info-title h4,
    .me-info-content h5 {
      margin: 0;
      padding: 0;
    }
  }
}

#me-desc {
  width: 800px;
  margin-left: 100px;
  margin-right: auto;
}

#me-desc h3 {
  font-size: 20px;
  line-height: 40px;
  text-align: start;
}

#me-intro {
  margin-top: 1rem;
  line-height: 30px;
  text-align: left;
}

#me-intro p {
  display: inline-block;
  margin-right: 15px;
  font-size: 30px;
}

#me-intro i {
  font-size: 22px;
  text-align: start;
}

#me-skill {
  margin-top: 4rem;
  text-align: left;
}

.me-skill-box {
  display: flex;
  flex-flow: row;
}

#me-skill-frontend,
#me-skill-backend,
#me-skill-other {
  width: 20%;
  margin-right: 100px;
}

ul {
  list-style-type: none;
  margin: 10px 0 0 0;
  padding: 0;
}

.skill-percentage {
  margin-bottom: 30px;
  position: relative;
}

.skill-percentage::after {
  content: "";
  width: 100%;
  height: 6px;
  background: rgb(71, 71, 71);
  display: block;
  margin-top: 3px;
  border-radius: 3px;
  border: 1px solid;
}
.skill-percentage::before {
  content: "";
  height: 6px;
  background: #1fb801;
  position: absolute;
  margin-top: 3px;
  left: 0;
  bottom: 0;
  border-radius: 3px;
  border: 1px solid;
}

#me-skill-frontend .skill-percentage:nth-child(1)::before {
  width: 80%;
  animation: skill_1 $time ease;
}
#me-skill-frontend .skill-percentage:nth-child(2)::before {
  width: 80%;
  animation: skill_1 $time ease;
}
#me-skill-frontend .skill-percentage:nth-child(3)::before {
  width: 70%;
  animation: skill_3 $time ease;
}
#me-skill-frontend .skill-percentage:nth-child(4)::before {
  width: 60%;
  animation: skill_4 $time ease;
}

#me-skill-backend .skill-percentage:nth-child(1)::before {
  width: 80%;
  animation: skill_1 $time ease;
}

#me-skill-backend .skill-percentage:nth-child(2)::before {
  width: 90%;
  animation: skill_2 $time ease;
}

#me-skill-backend .skill-percentage:nth-child(3)::before {
  width: 60%;
  animation: skill_4 $time ease;
}

#me-skill-other .skill-percentage:nth-child(1)::before {
  width: 70%;
  animation: skill_3 $time ease;
}

#me-skill-other .skill-percentage:nth-child(2)::before {
  width: 70%;
  animation: skill_3 $time ease;
}

#me-skill-other .skill-percentage:nth-child(3)::before {
  width: 80%;
  animation: skill_1 $time ease;
}

@keyframes skill_1 {
  from {
    width: 0%;
  }
  to {
    width: 80%;
  }
}
@keyframes skill_2 {
  from {
    width: 0%;
  }
  to {
    width: 90%;
  }
}
@keyframes skill_3 {
  from {
    width: 0%;
  }
  to {
    width: 70%;
  }
}
@keyframes skill_4 {
  from {
    width: 0%;
  }
  to {
    width: 60%;
  }
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(720deg);
    transform: rotate(720deg);
  }
}
</style>