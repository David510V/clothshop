import chai from 'chai';
import Vuex from "vuex";
import { expect } from 'chai';
// import { render } from '@vue/server-test-utils'
import Home1 from '../../src/App.vue'
import Register from '../../src/components/Auth/register.vue'
import {shallowMount } from "@vue/test-utils";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import spies from 'chai-spies';
import Vue from 'vue'
Vue.use(Vuex)
chai.use(spies);
chai.use(sinonChai);

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

// const localVue = createLocalVue();
// var component = shallowMount(Home1);



describe(" Store Auth Testing", () => {
      let store;
      
      beforeEach(() => {
      const storeAuth = {
      state: {}, 
        actions:{
          register: sinon.stub(),
          storeUser: sinon.stub()
        }
      }
      
        store = new Vuex.Store({
          modules: {
            storeAuth: storeAuth
          }
        })
       })

      it("User NameExist", async () => {
        const wrapper = shallowMount(Register);
        wrapper.find("#sign-up").trigger("click")
        await wrapper.vm.$nextTick()
        expect(storeAuth.actions.register).toHaveBeenCalled()
      });
})
