import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    makeNewQuestion() {
      var newTime = new Date();
      var params = {
        author: this.get('author') ? this.get('author'):'',
        userQuestion: this.get('userQuestion') ? this.get('userQuestion'):'',
        notes: this.get('notes') ? this.get('notes'):'',
        time: newTime.toDateString()
      };
      this.sendAction('makeNewQuestion', params);
    }
  }
});
