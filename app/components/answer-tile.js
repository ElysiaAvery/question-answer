import Ember from 'ember';

export default Ember.Component.extend({
  vote: 0,
  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    },
    upVote(answer) {
      this.set('vote', answer + this.get('vote'));
    },
    downVote(answer) {
      this.set('vote', this.get('vote') - answer);
    }
  }
});
