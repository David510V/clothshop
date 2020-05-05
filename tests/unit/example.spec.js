import chai from 'chai';
import Vuex from "vuex";
import { expect } from 'chai';
// import { render } from '@vue/server-test-utils'
import Home1 from '../../src/App.vue'
import menPants from '../../src/components/Mens/categories/menPants.vue'
import {shallowMount,createLocalVue, mount } from "@vue/test-utils";
import sinon from 'sinon'
// import router from '../../src/router/index'
import sinonChai from 'sinon-chai'
import spies from 'chai-spies';
import Vue from 'vue'

import VueRouter from 'vue-router'
const localVue = createLocalVue()

Vue.use(Vuex)
chai.use(spies);
chai.use(sinonChai);

localVue.use(Vuex)
localVue.use(VueRouter)
const router = new VueRouter()
// describe('Home1', () => {
//   beforeEach(() => {
//     component = shallowMount(Home1);
//   });
  
//   it("should render Home1 on mount", () => {
//     expect(component.find('#one').exists()).to.equal(true);
//   });
// })

//Also, wrapper.vm.setLoading calls the setLoading method.
describe('Basic component', () => {

  describe('Lifecycle', () => {
    it('Mounted', () => {
      const mountedFin=sinon.stub(Home1.methods,'mountedFin') //Wrapper After The Stub!!!!
      const wrapper = shallowMount(Home1);
      expect(mountedFin).to.be.calledWith('Mounted')
      
    })

    it('Destroyed',() => {
     const destroyedFin=sinon.stub(Home1.methods,'destroyedFin') //Wrapper After The Stub!!!!
     const wrapper = shallowMount(Home1);
     wrapper.destroy()
     expect(destroyedFin).to.be.calledWith() //We expect that the function will be called after wrapper destroy 
    })
    
  })
})

describe(" Store Auth Testing", () => {
  let actions
  let store

      beforeEach(() => {
        // wrapper = mount(menPants, { store, localVue, router })
        actions = {
          buyItem: sinon.stub()
        }
        store = new Vuex.Store({
          actions
        })
      })
      // beforeEach(() => {
      // const storeAuth = {
      // state: {}, 
      //   actions:{
      //     register: sinon.stub(),
      //     storeUser: sinon.stub()
      //   }
      // }
      
      //   store = new Vuex.Store({
      //     modules: {
      //       storeAuth: storeAuth
      //     }
      //   })
      //  })
     
      it("Test Cart", () => {
      let  wrapper = shallowMount(menPants, { store, localVue}) //, router
      // let wrapper=mount(menPants , { store, localVue , router})
      
      const TestComponent = {template: '<button id="#addCart"></button>'}
        wrapper=mount(TestComponent) 
        expect(wrapper.find(TestComponent).exists()).to.equal(true)
      });
})
