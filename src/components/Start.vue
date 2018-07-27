<template>
    <div class="container">
        <br>
        <div class="col m12 center">
            <router-link
                    tag="button"
                    :to="{name: 'question', params: {id: selectedQuestionId}}"
                    class="waves-effect waves-light btn-large">Press Play
            </router-link>
            <button
                    class="waves-effect waves-light btn-large"
                    @click="logStuff">Check Store
            </button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import {mapGetters} from 'vuex'

    export default {
        data(){
            return {
                questionsArray: undefined,
                selectedQuestion: undefined,
                selectedQuestionId: undefined,
                pastQuestions: []
            }
        },
        computed: {
            ...mapGetters(['getAllQuestions'])
        },
        methods: {
            ...mapActions(['setQuestions']),

            logStuff(){
                console.log(this.questionsArray);
            },
            pickRandomQuestion(){
                let rndQuestionId = Math.floor((Math.random() * this.questionsArray.length));
                this.selectedQuestionId = rndQuestionId;
                this.selectedQuestion = this.questionsArray[rndQuestionId];
                this.pastQuestions.push(rndQuestionId);
            }
        },
        created(){
            this.$http.get('http://localhost:3000/questions')
                .then(res =>{
                    this.setQuestions(res.body);
                    this.questionsArray = this.getAllQuestions;
                    this.pickRandomQuestion();
                });
        },
        beforeMount(){
        }
    }
</script>

<style scoped>

</style>