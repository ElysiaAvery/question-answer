import Ember from 'ember';

export default Ember.Component.extend({
  showEditForm: false,
  actions: {
    showEditQuestionForm() {
      this.set('showEditForm', true);
    },
    updateQuestion(question) {
      var params = {
        author: this.get('author'),
        userQuestion: this.get('userQuestion'),
        notes: this.get('notes')
      };
      this.set('showEditForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
