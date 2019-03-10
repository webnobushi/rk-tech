import Vue from 'vue'

// font
import '@/plugins/font'

// atoms
import Button from '@/components/atoms/Button'
import Heading from '@/components/atoms/heading'
import FontIcon from '@/components/atoms/font-icon'
import FormInput from '@/components/atoms/form-input'
import FormSelector from '@/components/atoms/form-selector'
import FormErrorMessage from '@/components/atoms/form-error-message'

// features
import TransitionShow from '@/components/features/transition-show'
import IntersectionShow from '@/components/features/intersection-show'

// template
import LayoutSection from '@/components/template/layout-section'
import LayoutContainer from '@/components/template/layout-container'
import LayoutColumns from '@/components/template/layout-columns'
import LayoutStickyFooter from '@/components/template/layout-sticky-footer'

// components
Vue.component('Button', Button)
Vue.component('Heading', Heading)
Vue.component('FontIcon', FontIcon)
Vue.component('FormInput', FormInput)
Vue.component('FormSelector', FormSelector)
Vue.component('FormErrorMessage', FormErrorMessage)

Vue.component('LayoutSection', LayoutSection)
Vue.component('LayoutContainer', LayoutContainer)
Vue.component('LayoutColumns', LayoutColumns)
Vue.component('LayoutStickyFooter', LayoutStickyFooter)
Vue.component('TransitionShow', TransitionShow)
Vue.component('IntersectionShow', IntersectionShow)
