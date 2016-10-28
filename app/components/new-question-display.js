import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    makeNewQuestion() {
      var params = {
        author: this.get('author') ? this.get('author'):'',
        userQuestion: this.get('userQuestion') ? this.get('userQuestion'):'',
        notes: this.get('notes') ? this.get('notes'):'',
      };
      this.sendAction('makeNewQuestion', params);
    }
  }
});
