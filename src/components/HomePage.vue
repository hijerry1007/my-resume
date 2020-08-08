<template>
  <div class="box" v-hotkey="keymap">
    <button id="start" @click="start()">Welcome</button>
    <p>
      Prees
      <button id="intro-btn">Space</button>
      to Start
    </p>
    <p>
      Press
      <button id="intro-btn">&larr;</button>to previous page
    </p>
    <p>
      Press
      <button id="intro-btn">&rarr;</button>to next page
    </p>
    <p>
      Press
      <button id="intro-btn">ESC</button> back home
    </p>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    start() {
      this.$router.push("/nav");
    },
  },
  computed: {
    keymap() {
      return {
        enter: this.start,
        space: this.start,
        right: () => {
          this.$router.push("/nav");
        },
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Permanent+Marker&family=Press+Start+2P&family=Yellowtail&display=swap");

.box {
  font-family: "Press Start 2P", cursive;
  color: white;
}
#start {
  margin-top: 20rem;
  margin-bottom: 50px;
  border-radius: 4px;
  font-size: 2rem;
  border: 4px solid white;
  color: gray;
  background: white;
  text-transform: uppercase;
  padding: 1.5rem 2.5rem;
  letter-spacing: 0.125em;
  outline: none;
}

#intro-btn {
  font-size: 1rem;
  background: rgb(252, 250, 247);
}
</style>
