import Start from './components/Start.vue'
import Question from './components/question/Question.vue'
import Chart from './components/info/Chart.vue'

export const routes = [
    {path: '', name: 'start', component: Start},
    {path: 'question', name: 'question', component: Question},
    {path: 'info', name: 'info', component: Chart, props: true}
    //{path: '/*', redirect: {name: 'home'}}
];