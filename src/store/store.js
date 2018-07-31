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
        removeQuestion: (state, payload) => {
            state.questions.splice(payload, 1);
        },
        pushPastQuestionArray: (state, payload) => {
            state.pastQuestions.push(payload);
        },
        emptyPastQuestionArray: (state) => {
            state.pastQuestions = [];
        },

    },
    actions: {
        setInitStatus: ({commit}, payload) => {
            commit('setInitStatus', payload);
        },
        initQuestions: ({commit}, payload) => {
            commit('setLocalQuestions', payload);
        },
        removeQuestion: ({commit}, payload) => {
            commit('removeQuestion', payload);
        },
        markQuestionViewed: ({commit}, payload) => {
            commit('pushPastQuestionArray', payload);
        },
        emptyPastQuestionArray: ({commit}) => {
            commit('emptyPastQuestionArray');
        }
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