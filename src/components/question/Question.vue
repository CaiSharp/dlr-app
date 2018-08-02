<template>
    <div class="container">

        <div class="row" v-if="getFinishedStatus">
            <div class="col s12 m12">
                <div class="bubble bubble--question">
                    <p>Endresultat</p>
                </div>
            </div>
        </div>

        <div class="row" v-if="!getFinishedStatus">
            <div class="col s12 m12">
                <div class="bubble bubble--question">
                    <p>{{question.question}}</p>
                </div>
            </div>
        </div>

        <div class="row" v-if="!answered && !getFinishedStatus">
            <div v-for="(answer,index) in question.answers">
                <div :class="['col', 's12', returnAnswerClass(index)]">
                    <div :class="['card-panel','card-panel-' + index]" @click="increaseClickCounter(answer)">
                        <p class="card-answer">{{answer.text}}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" v-if="answered && !getFinishedStatus">
            <div class="col m12 s12">
                <app-doughnut-chart :question="question"></app-doughnut-chart>
            </div>
        </div>

        <div class="row" v-if="getFinishedStatus">
            <div class="col m12 s12">
                <app-multi-doughnut-chart :questions="this.getPastQuestions"></app-multi-doughnut-chart>
            </div>
        </div>

        <div class="row" v-if="answered && !getFinishedStatus">
            <button
                    class="btn-large btn-next"
                    @click="navigateToRndQuestion">
                Next!
            </button>
        </div>
        <div class="row" v-if="getFinishedStatus">
            <button
                    class="btn-large btn-next"
                    @click="saveAndReturn()">
                Finish!
            </button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import {mapGetters} from 'vuex'
    import {actions} from "../../store/actionsNames";
    import {getters} from "../../store/gettersNames";
    import {navigateToRndQuestion} from "../../js/navigationLogic";
    import {saveAndReturn} from "../../js/navigationLogic";
    import DoughnutChart from './DoughnutChart'
    import MultiDoughnutChart from './MultiDoughnutChart'

    export default {
        data() {
            return {
                id: undefined,
                question: undefined,
                answered: false,
            }
        },
        watch: {
            '$route'(){
                this.setupQuestion();
            }
        },
        computed: {
            ...mapGetters(getters),
        },
        methods: {
            ...mapActions(actions),
            rerouteNotInit(){
                this.$router.push({name: 'start'});
            },
            setupQuestion(){
                this.id = this.$route.params.id;
                this.question = this.getPastQuestions.find(el => el.id === this.id);
                this.answered = false;
            },
            increaseClickCounter(answer){
                answer.clicked++;
                this.answered = true;
            },
            navigateToRndQuestion,
            saveAndReturn,
            returnAnswerClass(index){
                let big = 'm7';
                let small = 'm5';

                switch (index) {
                    case 0:
                        return small;
                    case 1:
                        return big;
                    case 2:
                        return big;
                    case 3:
                        return small;
                    default:
                        break;
                }
            }
        },
        components:{
            appDoughnutChart: DoughnutChart,
            appMultiDoughnutChart: MultiDoughnutChart
        },
        created() {
            //ROUTE OBJECT DOESN'T CHANGE ON INITIALIZE, NEEDS TO BE CALLED HERE
            this.setupQuestion();

            if(this.question === undefined){
                this.rerouteNotInit();
            }
        }
    }
</script>

<style scoped>

</style>