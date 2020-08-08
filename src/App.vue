<template>
  <div id="app">
    <div id="bubbleBox">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap");

html {
  height: 100%;
  margin: 0;
  background: linear-gradient(
    90deg,
    rgb(250, 250, 255) 0%,
    rgb(109, 109, 250) 25%,
    rgb(109, 109, 250) 65%,
    rgb(250, 250, 250) 100%
  );
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

#bubbleBox {
  position: absolute;
  width: 99%;
  height: 90%;
  overflow: hidden;
}

#bubbleBox div {
  position: absolute;
  border: 5px solid rgba(91, 3, 192, 0.6);
  border-radius: 10px;
}

#bubbleBox div:nth-child(1) {
  width: 30px;
  height: 30px;
  top: 40%;
  left: 93%;
  animation: animate 9s linear infinite;
}

#bubbleBox div:nth-child(2) {
  width: 90px;
  height: 90px;
  top: 80%;
  left: 85%;
  animation: animate 7s linear infinite;
}

#bubbleBox div:nth-child(3) {
  width: 20px;
  height: 20px;
  top: 16%;
  left: 83%;
  animation: animate 6s linear infinite;
}

#bubbleBox div:nth-child(4) {
  width: 80px;
  height: 80px;
  top: 87%;
  left: 8%;
  animation: animate 9s linear infinite;
}

#bubbleBox div:nth-child(5) {
  width: 60px;
  height: 60px;
  top: 56%;
  left: 3%;
  animation: animate 8s linear infinite;
}

#bubbleBox div:nth-child(6) {
  width: 20px;
  height: 20px;
  top: 27%;
  left: 13%;
  animation: animate 9s linear infinite;
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

@keyframes animate {
  0% {
    transform: scale(0) translateY(0) rotate(0);
    opacity: 1;
  }
  100% {
    transform: scale(1.2) translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}
</style>