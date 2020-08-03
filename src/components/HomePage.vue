<template>
  <div class="box" v-hotkey="keymap">
    <button id="start" @click="start()">Start</button>
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
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#start {
  margin-top: 25rem;
  border-radius: 4px;
  font-size: 1.4rem;
  border: 4px solid #eee;
  color: #bbb;
  background: white;
  text-transform: uppercase;
  padding: 1rem 2rem;
  letter-spacing: 0.125em;
}
</style>
