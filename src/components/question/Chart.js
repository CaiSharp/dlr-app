import {Doughnut} from 'vue-chartjs'

export default {
    extends: Doughnut,
    props: ['question'],
    methods: {
        createLabels(answerArray){
            return answerArray.map(el => {
                return el.text
            });
        },
        createDataEntries(answerArray){
            return answerArray.map(el => {
                return el.clicked;
            });
        }
    },
    mounted() {
        this.renderChart({
            labels: this.createLabels(this.question.answers),
            datasets: [
                {
                    data: this.createDataEntries(this.question.answers),
                    backgroundColor: ['#55D8FE', '#FF8373', '#A3A0FB', '#FFDA83']
                }
            ]
        }, {responsive: true, maintainAspectRatio: false})
    }
}