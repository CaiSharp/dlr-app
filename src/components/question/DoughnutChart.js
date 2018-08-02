import {Doughnut} from 'vue-chartjs'

export default {
    extends: Doughnut,
    data () {
        return {
            options: {
                legend: {
                    labels:{
                        fontColor: 'white',
                        fontSize: 25,
                        padding: 40,
                        fontFamily: 'Tajawal',
                        boxWidth: 50
                    },
                    position: 'bottom',
                    fullWidth: true,
                },
                layout: {
                    padding: {
                        bottom: 0,
                        top: 0
                    },
                    marginBottom: 50
                },
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    callbacks: {
                        label(tooltipItem, data) {
                            let dataset = data.datasets[tooltipItem.datasetIndex];
                            let total = dataset.data.reduce((previousValue, currentValue) => {
                                return previousValue + currentValue;
                            });
                            let currentValue = dataset.data[tooltipItem.index];
                            let percentage = Math.floor(((currentValue/total) * 100)+0.5);
                            return `${data.labels[dataset.data.indexOf(currentValue)]} : ${percentage}%`;
                        },
                    }
                }
            }
        }
    },
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
        },
    },
    mounted() {
        this.renderChart({
            labels: this.createLabels(this.question.answers),
            datasets: [
                {
                    data: this.createDataEntries(this.question.answers),
                    backgroundColor: ['#55D8FE', '#FF8373', '#A3A0FB', '#FFDA83']
                },
            ],

        }, this.options);
    }
}