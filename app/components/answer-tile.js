import Ember from 'ember';

export default Ember.Component.extend({
  
  vote: 0 ,
  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    },
    upVote(answer) {
      console.log('answer.data.vote');
      if('answer.data.vote'===NaN){
        this.set('answer.data.vote'===0);
      };
      var params = {
        vote: parseInt(this.get('vote', this.set('vote', this.get('answer.data.vote') + 1))),
      };
      this.sendAction('like', answer, params);
    },
    downVote(answer) {
      var params = {
        vote: parseInt(this.get('vote', this.set('vote', this.get('answer.data.vote') - 1))),
      };
      this.sendAction('dislike', answer, params);
    }
  }
});
