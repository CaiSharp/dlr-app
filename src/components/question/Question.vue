<template>
    <div class="container" v-if="question">
        <div class="row">
            <div class="col s12 m6" v-for="answer in question.answers">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <p>{{answer.text}}</p>
                        <br>
                        <p>{{answer.clicked}}</p>
                    </div>
                    <div class="card-action">
                        <button
                                class="waves-effect waves-light btn-large"
                                @click="increaseClickCounter(answer)">
                            Click me!
                        </button>

                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <router-link
                    tag="button"
                    :to="{name: 'start'}"
                    class="waves-effect waves-light btn-large">Backwards!
            </router-link>
            <button
                    class="waves-effect waves-light btn-large"
                    @click="navigateToRndQuestion">
                Forwards!
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

    export default {
        data() {
            return {
                id: undefined,
                question: undefined
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
            },
            increaseClickCounter(answer){
                answer.clicked++;
            },
            navigateToRndQuestion
        },
        created() {
            //ROUTE OBJECT DOESN'T CHANGE ON INITIALIZE, NEEDS TO BE CALLED HERE
            this.setupQuestion();
        }
    }
</script>

<style scoped>

</style>