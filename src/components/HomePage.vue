<template>
  <div class="box">
    <button id="start" v-if="!show" @click="show = !show">Start</button>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      show: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#start {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  font-size: 1.4rem;
  border: 4px solid #eee;
  color: #bbb;
  background: white;
  text-transform: uppercase;
  padding: 1rem 2rem;
  letter-spacing: 0.125em;
}

#nav {
  padding: 0px;
  position: relative;
}

#nav p {
  font-size: 24px;
}

.aboutMe,
.portfolio,
.contact {
  position: relative;
}
</style>
