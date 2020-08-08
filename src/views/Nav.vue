<template>
  <div id="nav" v-hotkey="keymap">
    <h1>Jerry's Resume</h1>
    <div class="navContainer">
      <div @click="select" @mouseenter="hover" class="aboutMe" :class="{'hover':content1}">
        <span v-if="content1" id="content1"></span>
        <div class="navicon" :class="{iconhover: content1}">
          <font-awesome-icon icon="meteor" />
        </div>
        <p>About Me</p>
      </div>
      <div @click="select" @mouseenter="hover" class="portfolio" :class="{'hover':content2}">
        <div class="navicon" :class="{iconhover: content2}">
          <font-awesome-icon icon="hammer" />
        </div>
        <span v-if="content2" id="content2"></span>
        <p>Portfolio</p>
      </div>
      <div @click="select" @mouseenter="hover" class="contact" :class="{'hover':content3}">
        <div class="navicon" :class="{iconhover: content3}">
          <font-awesome-icon icon="bullhorn" />
        </div>
        <span v-if="content3" id="content3"></span>
        <p>Contact</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      position: 0,
      content1: true,
      content2: false,
      content3: false,
    };
  },
  methods: {
    shiftUp() {
      switch (this.position) {
        case 0:
          break;
        case 1:
          this.content1 = true;
          this.content2 = false;
          this.content3 = false;
          this.position = 0;
          break;
        case 2:
          this.content1 = false;
          this.content2 = true;
          this.content3 = false;
          this.position = 1;
          break;
      }
    },
    shiftDown() {
      switch (this.position) {
        case 0:
          this.content1 = false;
          this.content2 = true;
          this.content3 = false;
          this.position = 1;
          break;
        case 1:
          this.content1 = false;
          this.content2 = false;
          this.content3 = true;
          this.position = 2;
          break;
        case 2:
          break;
      }
    },
    select() {
      switch (this.position) {
        case 0:
          this.$router.push("/aboutme");
          break;
        case 1:
          this.$router.push("/portfolio");
          break;
        case 2:
          this.$router.push("/contact");
          break;
      }
    },
    hover() {
      const hoverItem = event.target.querySelector("p").innerHTML;
      switch (hoverItem) {
        case "About Me":
          this.position = 0;
          this.content1 = true;
          this.content2 = false;
          this.content3 = false;
          break;
        case "Portfolio":
          this.position = 1;
          this.content1 = false;
          this.content2 = true;
          this.content3 = false;
          break;
        case "Contact":
          this.position = 2;
          this.content1 = false;
          this.content2 = false;
          this.content3 = true;
          break;
      }
    },
  },
  computed: {
    keymap() {
      return {
        up: this.shiftUp,
        down: this.shiftDown,
        space: this.select,
        right: this.select,
        left: () => {
          this.$router.push("/");
        },
        esc: () => {
          this.$router.push("/nav");
        },
      };
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Permanent+Marker&family=Press+Start+2P&family=Yellowtail&display=swap");
#nav {
  padding: 15rem;
  color: #ffffff;
  font-family: "Press Start 2P", cursive;
  box-sizing: border-box;
}
#nav h1 {
  text-align: center;
  letter-spacing: 0.125em;
  font-size: 3rem;
}
#nav p {
  display: inline-block;
  font-size: 24px;
}

.navContainer {
  padding: 50px 0;
}

.aboutMe,
.portfolio,
.contact {
  width: 400px;
  position: relative;
  margin: 0 auto;
  box-sizing: border-box;
  opacity: 0.8;
}

.aboutMe:hover,
.portfolio:hover,
.contact:hover {
  opacity: 1;
}

.hover {
  opacity: 1;
}

.navicon {
  display: inline-block;
  font-size: 24px;
  margin-right: -2rem;
  transform: scale(0);
  transition: 0.3s;
}

.aboutMe:hover .navicon,
.portfolio:hover .navicon,
.contact:hover .navicon {
  font-size: 30px;
  margin-right: 1rem;
  transform: scale(1);
}

.iconhover {
  font-size: 30px;
  margin-right: 1rem;
  transform: scale(1);
}
#content1,
#content2,
#content3 {
  width: 0px;
  height: 0px;
  animation: navigation 1.4s ease-in-out infinite;
  border-width: 0 3px 3px 0;
  border-style: solid solid solid solid;
  transform: rotate(-45deg);
  padding: 5px;
  position: absolute;
  left: -50px;
  top: 32px;
}

@keyframes navigation {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>