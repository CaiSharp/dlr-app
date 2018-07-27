<template>
    <div class="container" v-if="question">
        <div class="row">
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <p>{{question.answers[0].text}}</p>
                    </div>
                    <button
                            class="waves-effect waves-light btn-large">
                        Click me!
                    </button>
                </div>
            </div>
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <p>{{question.answers[1].text}}</p>
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
                        <p>{{question.answers[2].text}}</p>
                    </div>
                    <div class="card-action">
                    </div>
                </div>
            </div>
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <p>{{question.answers[3].text}}</p>
                    </div>
                    <div class="card-action">
                    </div>
                </div>
            </div>
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