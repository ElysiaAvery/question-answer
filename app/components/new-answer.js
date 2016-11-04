import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
    actions: {
      answerFormShow() {
       this.set('addNewAnswer', true);
    },
      saveAnswer() {
      var newTime = new Date();
      var params = {
        author: this.get('author'),
        answer: this.get('answer'),
        question: this.get('question'),
        time: newTime.toDateString(),
        vote: this.get('vote') ? this.get('vote'):'',
    };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
