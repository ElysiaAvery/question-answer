import Ember from 'ember';

export default Ember.Component.extend({
  vote: 0,
  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    },
    upVote() {
      console.log(this.get('vote'));
      this.set('vote', 1 + this.get('vote'));
    },
    downVote() {
      this.set('vote', this.get('vote') - 1);
    }
  }
});
