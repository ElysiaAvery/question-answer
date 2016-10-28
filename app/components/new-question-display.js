import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    makeNewQuestion() {
      var params = {
        author: this.get('author') ? this.get('author'):'',
        question: this.get('question') ? this.get('question'):'',
        notes: this.get('notes') ? this.get('notes'):'',
      };
      this.sendAction('makeNewQuestion', params);
    }
  }
});