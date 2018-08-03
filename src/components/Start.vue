<template>
    <div class="container">
        <div class="welcome--container">
            Kann autonomes fahren...
            <div class="welcome--animation">
                <div><div>Sicherer</div></div>
                <div><div>Billiger</div></div>
                <div><div>Umweltfreundlicher</div></div>
            </div>
            Sein?
        </div>
        <br>
        <button class="btn-large btn-start" @click="navigateToRndQuestion">Play</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import {mapGetters} from 'vuex'
    import {actions} from "../store/actionsNames";
    import {getters} from "../store/gettersNames";
    import {navigateToRndQuestion} from "../js/navigationLogic";
    import {getData} from "../js/api";

    export default {
        computed: {
            ...mapGetters(getters)
        },
        methods: {
            ...mapActions(actions),
            navigateToRndQuestion,
        },
        created(){
            if(this.getInitStatus === false){
                return getData()
                    .then(res =>{
                        this.initQuestions(res.body);
                        this.setInitStatus(true);
                        console.warn(`---Server initialised: ${this.getInitStatus}---`);
                    });
            }
        }
    }
</script>

<style scoped>

</style>