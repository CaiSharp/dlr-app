<template>
    <div class="container" v-if="question">
        <div class="row">
            <div class="col s12 m6" v-for="answer in question.answers">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <p>{{answer.text}}</p>
                    </div>
                    <div class="card-action">
                        <button
                                class="waves-effect waves-light btn-large">
                            Click me!
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <button
                    class="waves-effect waves-light btn-large">
                Backwards!
            </button>
            <button
                    class="waves-effect waves-light btn-large">
                Forwards!
            </button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                id: parseInt(this.$route.params.id),
                questionsArray: this.getAllQuestions,
                question: undefined
            }
        },
        computed: {
            ...mapGetters(['getAllQuestions']),
        },
        methods: {
            ...mapActions(['setQuestions']),
        },
        created() {
            this.$http.get('http://localhost:3000/questions')
                .then(res => {
                    this.setQuestions(res.body);
                    this.questionsArray = this.getAllQuestions;
                    this.question = this.questionsArray[this.id]
                });
        },
        beforeMount() {
        }
    }
</script>

<style scoped>

</style>