import {Doughnut} from 'vue-chartjs'

export default {
    extends: Doughnut,
    data () {
        return {
            options: {
                title: {
                    display: true,
                    text: 'Touch Me',
                    position: 'left',
                    fontColor: 'white',
                    fontSize: '30',
                    fontFamily: 'Tajawal',
                },
                legend: {
                    labels:{
                        fontColor: 'white',
                        fontSize: 25,
                        padding: 40,
                        fontFamily: 'Tajawal',
                        boxWidth: 50,
                    },
                    position: 'bottom',
                    fullWidth: true,
                    display: true
                },
                layout: {
                    padding: {
                        bottom: 0,
                        top: 50,
                        right: 50
                    },
                    marginBottom: 50
                },
                responsive: true,
                maintainAspectRatio: true,
                tooltips: {
                    callbacks: {
                        label(tooltipItem, data) {
                            let label = data.datasets[tooltipItem.datasetIndex].labels[tooltipItem.index];
                            let dataset = data.datasets[tooltipItem.datasetIndex];
                            let total = dataset.data.reduce((previousValue, currentValue) => {
                                return previousValue + currentValue;
                            });
                            let currentValue = dataset.data[tooltipItem.index];
                            let percentage = Math.floor(((currentValue/total) * 100)+0.5);
                            return `${label} : ${percentage}%`;
                        },
                        title(tooltipItem, data){
                           let datasetIndex = tooltipItem[0].datasetIndex;
                           return data.datasets[datasetIndex].label;
                        }
                    },
                    titleFontSize: 18,
                    titleSpacing: 10,
                    bodyFontSize: 22,
                    bodySpacing: 10,
                    yPadding: 12,
                    xPadding: 20,
                    caretSize: 12,
                    backgroundColor: 'rgba(0,0,0,1)'
                }
            },
            dataCollection: [],
        }
    },
    props: ['questions'],
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
        createDataSets(questionsArray){
            questionsArray.forEach(el => {
                this.dataCollection.push(
                    {
                        data: this.createDataEntries(el.answers),
                        backgroundColor: ['#55D8FE', '#FF8373', '#A3A0FB', '#FFDA83'],
                        label: el.question,
                        labels: this.createLabels(el.answers),
                    }
                );
            });
        },
    },
    created(){
        this.createDataSets(this.questions);
    },
    mounted() {
        this.renderChart({
            datasets: this.dataCollection
        }, this.options);
    }
}