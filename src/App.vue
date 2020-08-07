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
  background-image: url(../public/img/bg.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;
  position: relative;
}

#app {
  margin-top: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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