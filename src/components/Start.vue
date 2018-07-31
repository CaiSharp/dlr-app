<template>
    <div class="container">
        <br>
        <div class="col m12 center">
            <button
                    class="waves-effect waves-light btn-large"
                    @click="logStuff">Check Store
            </button>
            <button
                    class="waves-effect waves-light btn-large"
                    @click="navigateToRndQuestion">Next Question
            </button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import {mapGetters} from 'vuex'
    import {actions} from "../store/actionsNames";
    import {getters} from "../store/gettersNames";
    import {navigateToRndQuestion} from "../js/navigationLogic";

    export default {
        data(){
            return {

            }
        },
        computed: {
            ...mapGetters(getters)
        },
        methods: {
            ...mapActions(actions),

            logStuff(){
                console.log(this.getAllQuestions);
                console.log(this.getPastQuestions);
            },
            navigateToRndQuestion
        },
        created(){
            if(this.getInitStatus === false){
                this.$http.get('http://localhost:3000/questions')
                    .then(res =>{
                        this.initQuestions(res.body);
                        this.setInitStatus(true);
                        console.warn(`---Server initialised: ${this.getInitStatus}---`);
                    });
            }
        },
        beforeMount(){
        }
    }
</script>

<style scoped>

</style>