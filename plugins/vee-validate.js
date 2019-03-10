import Vue from 'vue'
import VeeValidate from 'vee-validate'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VeeValidateLocaleJa from 'vee-validate/dist/locale/ja'


Vue.use(VeeValidate, {
  // @see https://baianat.github.io/vee-validate/configuration.html#configuration
  locale: 'ja',
  dictionary: {
    ja: VeeValidateLocaleJa
  },
  // does not work bug? @see https://github.com/baianat/vee-validate/issues/1426
  events: 'change',
})


// vee-validate
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
