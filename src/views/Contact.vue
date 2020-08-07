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
            <span class="list-item">
              <font-awesome-icon id="mobile" icon="mobile-alt" />
            </span>
            <p>+886 912 518 455</p>
          </li>
          <li>
            <span class="list-item">
              <font-awesome-icon id="email" icon="envelope" />
            </span>
            <p>jerrydavid123@hotmail.com</p>
          </li>
          <li>
            <span class="list-item">
              <font-awesome-icon id="marker" icon="map-marker-alt" />
            </span>
            <p>Taipei, Taiwan</p>
          </li>
        </ul>
      </div>
      <div class="contact-belowBox">
        <div class="contact-form">
          <div class="contact-form-title">
            <h2>Sending Message</h2>
          </div>
          <form class="form" @submit.prevent="submit">
            <div class="error-message">
              <p v-show="!email.valid">Please enter a valid email address.</p>
            </div>
            <div class="contact-form-content">
              <span class="icon">
                <font-awesome-icon icon="user" />
              </span>
              <input type="text" name="name" id="name" required v-model="name" placeholder="Name" />
            </div>
            <div class="contact-form-content">
              <span class="icon">
                <font-awesome-icon icon="envelope" />
              </span>
              <input
                type="email"
                name="email"
                id="email"
                required
                :class="{ email , error: !email.valid }"
                v-model="email.value"
                placeholder="Email"
              />
            </div>
            <div class="contact-form-content">
              <span class="icon">
                <font-awesome-icon icon="comment-dots" />
              </span>
              <textarea
                class="message"
                name="textarea"
                id="textarea"
                required
                v-model="message.text"
                :maxlength="message.maxlength"
                placeholder="Message"
              ></textarea>
              <span class="counter">{{ message.text.length }} / {{ message.maxlength }}</span>
            </div>
            <button v-if="!isSending" class="contact-form-btn">Send</button>
            <button v-if="isSending" class="contact-form-btn">Sending</button>
          </form>
        </div>
        <div class="contact-map">
          <GmapMap
            :center="{lat:25.0325917, lng:121.5624999}"
            :zoom="7"
            map-type-id="terrain"
            style="width: 400px; height: 400px"
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
            />
          </GmapMap>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: {
        value: "",
        valid: true,
      },
      message: {
        text: "",
        maxlength: 200,
      },
      isSending: false,
      markers: [{ id: 1, position: { lat: 25.0325917, lng: 121.5624999 } }],
    };
  },
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
  padding-top: 1rem;
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
  text-align: center;
  letter-spacing: 0.5em;
  padding-left: 40px;
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
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
  }
}

.list-item {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 1px solid;
  background: white;
  position: relative;
  #mobile {
    position: absolute;
    font-size: 2.5rem;
    right: 25px;
    top: 15px;
  }
  #email {
    position: absolute;
    font-size: 2.3rem;
    right: 20px;
    top: 18px;
  }
  #marker {
    position: absolute;
    font-size: 2.3rem;
    right: 24px;
    top: 16px;
  }

  &:hover {
    opacity: 0.8;
    background: lightgoldenrodyellow;
  }
}

.contact-belowBox {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.contact-map {
  margin: 5rem 0px;
}

.contact-form {
  width: 400px;
  margin-right: 100px;
}

.contact-form-content {
  display: flex;
  flex-direction: column;
  width: 300px;
  position: relative;
}

.icon {
  font-size: 1.6rem;
  position: absolute;
  left: -30px;
  top: 10px;
}

.form {
  padding: 40px 45px 15px 45px;
  border-radius: 4px;
  margin: 25px auto 50px;
  width: 300px;
  height: 450px;
  background-color: #fff;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.8);
}

.contact-form input[type="email"],
.contact-form input[type="text"] {
  border: solid 2px #cfd3ff;
  font-family: "Roboto", sans-serif;
  padding: 10px 7px;
  margin-bottom: 15px;
  margin-left: 8px;
  outline: none;
  border-radius: 4px;
  font-size: 1.2rem;
}

.contact-form textarea {
  width: 276px;
  height: 240px;
  min-width: 276px;
  max-width: 276px;
  min-height: 240px;
  max-height: 240px;
  border: solid 2px #cfd3ff;
  font-family: "Roboto", sans-serif;
  padding: 10px 7px;
  margin-bottom: 15px;
  margin-left: 10px;
  outline: none;
  border-radius: 4px;
  font-size: 1.2rem;
}

.counter {
  position: absolute;
  bottom: 18px;
  right: 10px;
  font-weight: bold;
}

.contact-form-btn {
  width: 150px;
  height: 30px;
  text-align: center;
  vertical-align: middle;
  padding: 4px 42px;
  border: 0px solid #275498;
  border-radius: 10px;
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
  font: normal normal bold 18px verdana;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
}

.contact-form-btn:hover {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#59beff),
    to(#2f65b6)
  );
  background: -moz-linear-gradient(top, #59beff, #2f65b6);
  background: linear-gradient(to bottom, #59beff, #2f65b6);
  color: #ffffff;
}
</style>