<template>
  <div id="nav" v-hotkey="keymap">
    <div class="aboutMe">
      <span v-if="content1" id="content1"></span>
      <p>About Me</p>
    </div>
    <div class="portfolio">
      <span v-if="content2" id="content2"></span>
      <p>Portfolio</p>
    </div>
    <div class="contact">
      <span v-if="content3" id="content3"></span>
      <p>Contact</p>
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
  },
  computed: {
    keymap() {
      return {
        up: this.shiftUp,
        down: this.shiftDown,
        space: this.select,
      };
    },
  },
};
</script>

<style scoped>
#nav {
  margin-top: 25rem;
}
#nav p {
  font-size: 24px;
}

.aboutMe,
.portfolio,
.contact {
  width: 200px;
  position: relative;
  margin: 0 auto;
}

#content1 {
  width: 0px;
  height: 0px;
  animation: navigation 1.4s ease-in-out infinite;
  border-width: 0 3px 3px 0;
  border-style: solid solid solid solid;
  transform: rotate(-45deg);
  padding: 5px;
  position: absolute;
  left: 10px;
  top: 7px;
}

#content2 {
  content: "";
  width: 0px;
  height: 0px;
  animation-name: navigation;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  border-width: 0 3px 3px 0;
  border-style: solid solid solid solid;
  transform: rotate(-45deg);
  padding: 5px;
  position: absolute;
  left: 10px;
  top: 7px;
}

#content3 {
  content: "";
  width: 0px;
  height: 0px;
  animation-name: navigation;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  border-width: 0 3px 3px 0;
  border-style: solid solid solid solid;
  transform: rotate(-45deg);
  padding: 5px;
  position: absolute;
  left: 10px;
  top: 7px;
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