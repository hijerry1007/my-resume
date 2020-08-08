import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHotKey from 'v-hotkey'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfoCircle, faBirthdayCake, faEnvelopeSquare, faMapMarkerAlt, faTree, faGamepad, faBasketballBall, faSuitcaseRolling, faUser, faEnvelope, faCommentDots, faMobileAlt, faTimes, faMeteor, faHammer, faBullhorn, faAngleDoubleLeft, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import { regular } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCi9FPS8AVTG2rtnCp3dC-Dw_HJCj1KkCQ',
    libraries: 'places',
  }
})

library.add(faInfoCircle, faBirthdayCake, faEnvelopeSquare, faMapMarkerAlt, faTree, faGamepad, faBasketballBall, faSuitcaseRolling, faUser, faEnvelope, faCommentDots, faMobileAlt, faTimes, faMeteor, faHammer, faBullhorn, faCodeBranch, faAngleDoubleLeft,)

// library.add(regular)
Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.use(VueHotKey)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
