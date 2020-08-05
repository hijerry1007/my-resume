<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
html {
  height: 100%;
  margin: 0;
}

html::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url(../public/img/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
}

.resume {
  width: 100%;
  height: 100%;
  background-image: url(../public/img/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  opacity: 0.5;
  filter: alpha(opacity=50);
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  z-index: 1;
}

/* #app::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url(../public/img/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
} */

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-active {
  transform: translateY(-50%);
  opacity: 0;
}
</style>