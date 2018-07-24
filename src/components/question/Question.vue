<template>
    <div class="container">
        <div class="row">
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <p>{{selectedQuestion.answers[0].text}}</p>
                    </div>
                    <router-link
                            tag="button"
                            :to="{name: 'info', params: {selectedQuestion}}"
                            class="waves-effect waves-light btn-large"
                            :selectedQuestion="selectedQuestion">That's me!
                    </router-link>
                </div>
            </div>
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <p>{{selectedQuestion.answers[1].text}}</p>
                    </div>
                    <div class="card-action">

                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <p>{{selectedQuestion.answers[2].text}}</p>
                    </div>
                    <div class="card-action">
                    </div>
                </div>
            </div>
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <p>{{selectedQuestion.answers[3].text}}</p>
                    </div>
                    <div class="card-action">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {data} from '../../data/database'

    export default {
        data(){
            return {
                questionsArray: data,
                selectedQuestion: undefined,
                pastQuestions: []
            }
        },
        methods: {
            pickRandomQuestion(questionsArray){
                let rndQuestionId = Math.floor((Math.random() * questionsArray.length));
                this.selectedQuestion = questionsArray[rndQuestionId];
                this.pastQuestions.push(rndQuestionId);
            }
        },
        beforeMount(){
            this.pickRandomQuestion(this.questionsArray);
        }
    }
</script>

<style scoped>

</style>