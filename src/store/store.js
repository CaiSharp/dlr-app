import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        questions: [],
    },
    mutations: {
        setLocalQuestions: (state, payload) => {
            state.questions = payload;
        }
    },
    actions: {
        setQuestions: ({commit}, payload) => {
            commit('setLocalQuestions', payload);
        }
    },
    getters: {
        getAllQuestions: state => {
            return state.questions;
        }
    }
});