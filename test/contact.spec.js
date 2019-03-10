import { shallowMount } from '@vue/test-utils'
import Contact from '@/pages/contact.vue'

describe('Contact', () => {
  test('is a Vue instance',  () => {
    const wrapper = shallowMount(Contact)
    expect(wrapper.isVueInstance()).toBeTruthy()

    // @todo mock sendMessage
    return wrapper.vm.submit()
  })
})
