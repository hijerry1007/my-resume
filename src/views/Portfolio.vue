<template>
  <div class="portfolio">
    <div class="title" v-hotkey="keymap">
      <h1>作品集 Portfolio</h1>
      <button id="me-nav-left" @click="start()">&laquo; pre page</button>
      <button id="me-nav-right" @click="start()">next page&raquo;</button>
    </div>
    <section class="timeline">
      <div class="timeline-box">
        <div class="timeline-item">
          <div class="timeline-img"></div>

          <div class="timeline-content timeline-card">
            <div class="timeline-img-header">
              <h2>Card Title</h2>
            </div>
            <div class="date">25 MAY 2016</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-img"></div>

          <div class="timeline-content timeline-card">
            <div class="timeline-img-header">
              <h2>Card Title</h2>
            </div>
            <div class="date">25 MAY 2016</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-img"></div>

          <div class="timeline-content timeline-card">
            <div class="timeline-img-header">
              <h2>Card Title</h2>
            </div>
            <div class="date">25 MAY 2016</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-img"></div>

          <div class="timeline-content timeline-card">
            <div class="timeline-img-header">
              <h2>Card Title</h2>
            </div>
            <div class="date">25 MAY 2016</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
          </div>
        </div>
      </div>
    </section>
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
.portfolio {
  display: flex;
  flex-flow: column;
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

section {
  padding: 50px 0;
}

.timeline-box {
  margin: 0 auto;
  padding: 0 15rem;
}

.timeline {
  position: relative;
  &::before {
    content: "";
    background: #3f51b5;
    width: 5px;
    height: 95%;
    position: absolute;
    left: 50%;
    opacity: 0.5;
  }
}

.timeline-item {
  width: 100%;
  margin-bottom: 70px;
  &:nth-child(even) {
    .timeline-content {
      float: right;
      padding: 40px 30px 10px 30px;

      .date {
        right: auto;
        left: 0;
      }
    }
  }

  &::after {
    content: "";
    display: block;
    clear: both;
  }
}

.timeline-content {
  position: relative;
  width: 45%;
  padding: 10px 30px;
  border-radius: 4px;
  background: #f5f5f5;
  box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);
}

.timeline-img {
  width: 20px;
  height: 20px;
  background: #3f51b5;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-top: 0px;
  margin-left: -8px;
}

.timeline-item {
  .timeline-img-header {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
      url("https://picsum.photos/1000/800/?random") center center no-repeat;
    background-size: cover;
  }
}

.timeline-img-header {
  height: 200px;
  position: relative;
  margin-bottom: 20px;

  h2 {
    color: #ffffff;
    position: absolute;
    bottom: 5px;
    left: 20px;
  }
}

blockquote {
  margin-top: 30px;
  color: #757575;
  border-left-color: #3f51b5;
  padding: 0 20px;
}

.date {
  background: gray;
  display: inline-block;
  color: #ffffff;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
}
</style>