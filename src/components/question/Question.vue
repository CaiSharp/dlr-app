<template>
    <div class="container">
        <div class="row" v-if="!getFinishedStatus && !info">
            <div class="col s12 m12">
                <div class="bubble bubble--question">
                    <p>{{question.question}}</p>
                </div>
            </div>
        </div>
        <div class="row" v-if="!answered && !getFinishedStatus">
                <app-question-answer :question="question" @answered="questionAnswered"></app-question-answer>
        </div>

        <div class="row" v-if="info && !getFinishedStatus">
            <div class="col s12 m12">
                <div class="bubble bubble--info-headline">
                    <h3>Wusstest du schon..?</h3>
                </div>

                <div class="col s6 m6">
                    <app-doughnut-chart :question="question"></app-doughnut-chart>
                </div>
                <div class="col s6 m6">
                    <div class="bubble bubble--info-text">
                        <p>{{question.infoText}}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" v-if="answered && !getFinishedStatus && !info">
            <div class="col m12 s12">
                <app-doughnut-chart :question="question"></app-doughnut-chart>
            </div>
        </div>

        <div class="row" v-if="getFinishedStatus">
            <div class="canvas--container">
                <div class="col m12 s12">
                    <app-multi-doughnut-chart :questions="this.getPastQuestions"></app-multi-doughnut-chart>
                </div>
                <button
                        v-if="getFinishedStatus"
                        class="btn-large btn-finish"
                        @click="saveAndReturn()">
                    Finish!
                </button>
            </div>
        </div>

        <div class="row">
            <button
                    v-if="answered && !getFinishedStatus"
                    class="btn-large btn-next"
                    @click="navigateToRndQuestion">
                Next
            </button>
            <button
                    v-if="answered && !getFinishedStatus"
                    class="btn-large btn-info"
                    @click="toggleInfo">
                Info
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
    import QuestionAnswer from './QuestionAnswers.vue'

    export default {
        data() {
            return {
                id: undefined,
                question: undefined,
                answered: false,
                info: false
            }
        },
        watch: {
            '$route'() {
                this.setupQuestion();
            }
        },
        computed: {
            ...mapGetters(getters),
        },
        methods: {
            ...mapActions(actions),
            rerouteNotInit() {
                this.$router.push({name: 'start'});
            },
            setupQuestion() {
                this.id = this.$route.params.id;
                this.question = this.getPastQuestions.find(el => el.id === this.id);
                this.answered = false;
                this.info = false;
            },
            questionAnswered() {
                this.answered = true;
            },
            toggleInfo() {
                this.info = !this.info;
            },
            navigateToRndQuestion,
            saveAndReturn,
        },
        components: {
            appDoughnutChart: DoughnutChart,
            appMultiDoughnutChart: MultiDoughnutChart,
            appQuestionAnswer: QuestionAnswer
        },
        created() {
            //ROUTE OBJECT DOESN'T CHANGE ON INITIALIZE, NEEDS TO BE CALLED HERE
            this.setupQuestion();

            if (this.question === undefined) {
                this.rerouteNotInit();
            }
        }
    }
</script>

<style scoped>

</style>