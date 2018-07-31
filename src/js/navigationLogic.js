import {saveData} from "./api";

export function navigateToRndQuestion(){

    if(this.getAllQuestions.length > 0){

        let selectedQuestionIndex = Math.floor((Math.random() * this.getAllQuestions.length));
        let selectedQuestion = this.getAllQuestions[selectedQuestionIndex];

        //QUESTION IS REMOVED FROM POSSIBLE QUESTION POOL && SAVED AS ALREADY VIEWED
        this.markQuestionViewed(selectedQuestion);
        this.removeQuestion(selectedQuestionIndex);

        this.$router.push({name: 'question', params: {id: selectedQuestion.id}});

    }else{
        //SAVE TO SERVER, RESET && REPEAT
        return saveData(this.getPastQuestions)
            .then(()=>{
                this.emptyPastQuestionArray();
                this.setInitStatus(false);

                this.$router.push({name: 'start'});
            });
    }
}