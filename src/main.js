import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHotKey from 'v-hotkey'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfoCircle, faBirthdayCake, faEnvelopeSquare, faMapMarkerAlt, faTree, faGamepad, faBasketballBall, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons'
// import { brands } from '@fortawesome/free-brands-svg-icons'
// import { regular } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faInfoCircle, faBirthdayCake, faEnvelopeSquare, faMapMarkerAlt, faTree, faGamepad, faBasketballBall, faSuitcaseRolling)
// library.add(brands)
// library.add(regular)
Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.use(VueHotKey)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
