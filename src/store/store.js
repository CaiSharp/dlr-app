import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        initialized: false,
        questions: [],
        pastQuestions: [],
    },
    mutations: {
        setInitStatus: (state, payload) => {
            state.initialized = payload;
        },
        setLocalQuestions: (state, payload) => {
            state.questions = payload;
        },
        pushPastQuestionArray: (state, payload) => {
            state.pastQuestions.push(payload);
        },
        removeQuestion: (state, payload) => {
            state.questions.splice(payload, 1);
        }
    },
    actions: {
        initQuestions: ({commit}, payload) => {
            commit('setLocalQuestions', payload);
        },
        markQuestionViewed: ({commit}, payload) => {
            commit('pushPastQuestionArray', payload);
        },
        removeQuestion: ({commit}, payload) => {
            commit('removeQuestion', payload);
        },
        setInitStatus: ({commit}, payload) => {
            commit('setInitStatus', payload);
        },
    },
    getters: {
        getAllQuestions: state => {
            return state.questions;
        },
        getPastQuestions: state => {
            return state.pastQuestions;
        },
        getInitStatus: state => {
            return state.initialized;
        }
    }
});