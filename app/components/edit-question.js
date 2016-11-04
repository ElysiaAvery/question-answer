import Ember from 'ember';

export default Ember.Component.extend({
  showEditForm: false,
  tag: null,
  tags: Ember.String.w('Animals Friends Help Music Work Home'),
  actions: {
    showEditQuestionForm() {
      this.set('showEditForm', true);
    },
    updateQuestion(question) {
      var params = {
        author: this.get('author'),
        userQuestion: this.get('userQuestion'),
        notes: this.get('notes'),
        tags: this.get('tag')
      };
      this.set('showEditForm', false);
      this.sendAction('updateQuestion', question, params);
    },
    selectTag(tag) {
      this.set('tag', tag);
    }
  }
});
