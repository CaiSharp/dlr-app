<template>
    <div class="container">
        <div class="row">
            <div class="col s12 m12">
                <div class="bubble bubble--question">
                    <p class="white-text">{{question.question}}</p>
                </div>
            </div>
        </div>
        <div class="row" v-if="!answered">
            <div v-for="(answer,index) in question.answers">
                <div :class="['col', 's12', returnAnswerClass(index)]">
                    <div :class="['card-panel','card-panel-' + index]" @click="increaseClickCounter(answer)">
                        <p class="card-answer">{{answer.text}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="answered">
            <app-chart :question="question"></app-chart>
        </div>
        <div class="row" v-if="answered">
            <router-link
                    tag="button"
                    :to="{name: 'start'}"
                    class="waves-effect waves-light btn-large">Home!
            </router-link>
            <button
                    class="waves-effect waves-light btn-large"
                    @click="navigateToRndQuestion">
                Forward!
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
    import Chart from './Chart.js'

    export default {
        data() {
            return {
                id: undefined,
                question: undefined,
                answered: false
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
            appChart: Chart,
        },
        created() {
            //ROUTE OBJECT DOESN'T CHANGE ON INITIALIZE, NEEDS TO BE CALLED HERE
            this.setupQuestion();
        }
    }
</script>

<style scoped>

</style>