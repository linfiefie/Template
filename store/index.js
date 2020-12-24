import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		city:"无锡"
	},
    mutations: {
		changeCity(state,newCity){
			state.city = newCity;
		}
	},
    actions: {},
	getters:{
		mcity(state){
			return "我住在"+state.city
		}
	}
})
export default store