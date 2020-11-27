import { mount } from '@vue/test-utils'
import index from '@/pages/index.vue'

describe('index.vue', () => {
  test('it renders question', () => {
    const wrapper = mount(index)
    expect(wrapper.vm).toBeTruthy()
  })
})
