export function navigateToRndQuestion(){

    if(this.getAllQuestions.length > 0){


        let selectedQuestionIndex = Math.floor((Math.random() * this.getAllQuestions.length));
        let selectedQuestion = this.getAllQuestions[selectedQuestionIndex];

        //QUESTION IS REMOVED FROM POSSIBLE QUESTION POOL && SAVED AS ALREADY VIEWED
        this.markQuestionViewed(selectedQuestion);
        this.removeQuestion(selectedQuestionIndex);

        this.$router.push({name: 'question', params: {id: selectedQuestion.id}});

    }else{

        console.log('no questions left');
        //SAVE TO SERVER, RESET && REPEAT
        this.$http.post('http://localhost:3000/', this.getPastQuestions)
            .then(()=>{
                this.emptyPastQuestionArray();
                this.setInitStatus(false);

                this.$router.push({name: 'start'});
            });
}
}