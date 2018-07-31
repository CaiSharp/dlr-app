export function navigateToRndQuestion(){

    if(this.getAllQuestions.length > 0){

        let selectedQuestionIndex = Math.floor((Math.random() * this.getAllQuestions.length));
        let selectedQuestion = this.getAllQuestions[selectedQuestionIndex];

        this.markQuestionViewed(selectedQuestion);
        this.removeQuestion(selectedQuestionIndex);

        this.$router.push({name: 'question', params: {id: selectedQuestion.id}});

        console.log('operation completed')
    }else{
        console.log('no questions left');
        //SAVE TO SERVER, RESET && REPEAT

}
}