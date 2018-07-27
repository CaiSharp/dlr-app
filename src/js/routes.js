import Start from '../components/Start.vue'
import Question from '../components/question/Question.vue'

export const routes = [
    {path: '/', name: 'start', component: Start},
    {path: '/question/:id', name: 'question', component: Question, props: true},
    {path: '/*', redirect: {name: 'start'}}
];