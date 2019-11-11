import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import app from './app'
import user from './user'
const store = new Vuex.Store({
    modules:{
        app,user
    }
});

export default store;