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
      var params = {
        vote: this.get('vote', this.set('vote', this.get('answer.data.vote') + 1)),
      };
      this.sendAction('like', answer, params);
    },
    downVote(answer) {
      var params = {
        vote: this.get('vote', this.set('vote', this.get('answer.data.vote') - 1)),
      };
      this.sendAction('dislike', answer, params);
    }
  }
});
