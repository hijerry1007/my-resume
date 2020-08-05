<template>
  <div class="contact">
    <div class="title" v-hotkey="keymap">
      <h1>Contact</h1>
      <button id="me-nav-left" @click="start()">&laquo; pre page</button>
    </div>

    <div class="contact-box">
      <div class="contact-item">
        <ul>
          <li>
            <span class="list-item"></span>
            <p>+886 912 518 455</p>
          </li>
          <li>
            <span class="list-item"></span>
            <p>jerrydavid123@hotmail.com</p>
          </li>
          <li>
            <span class="list-item"></span>
            <p>Taipei, Taiwan</p>
          </li>
        </ul>
      </div>
      <div class="contact-map"></div>
      <div class="contact-form"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    left() {
      this.$router.push("/portfolio");
    },
  },
  computed: {
    keymap() {
      return {
        left: this.left,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-flow: column;
  margin-top: 3rem;
  height: 100%;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}

.title {
  width: 1200px;
  margin: 0 auto;
  border-bottom: 3px solid;
}

#me-nav-left {
  border: 1px solid;
  border-radius: 4px;
  font-size: 14px;
  color: #bbb;
  background: white;
  text-transform: uppercase;
  letter-spacing: 0.125em;
  margin: 0 10px 10px 0;
}

li {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  margin-right: 35px;
  span {
    margin-bottom: 25px;
  }
}

.list-item {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: olive;
}
</style>