import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import App from '../../src/App.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)

let wrapper;
beforeEach(()=>{
  wrapper=shallowMount(App, {
    localVue
  })
})


it("renders", ()=>{
  expect(wrapper.exists()).toBe(true)
})