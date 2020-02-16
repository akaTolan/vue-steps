import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

import { BootstrapVue } from 'bootstrap-vue'
import './styles/setup/bootstrap.scss'




// changing the select indicator
// creatElement i with SVG inside
vSelect.props.components.default = () => ({
  OpenIndicator: {
    render: createElement => createElement('i', {
          domProps: {
            innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 7.7 4"><defs><style>  .a{fill:none;stroke:#707070;}</style></defs><path class="a" d="M0.3 0.4l3.5 3 3.5-3"/></svg>'
          }
        }),
  },
});

// Register the component
Vue.component('v-select', vSelect)

// Install BootstrapVue
Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
