import Ember from 'ember';

export default Ember.Component.extend({
  tag: null,
  tags: Ember.String.w('Animals Friends Help Music Work Home'),
  actions: {
    makeNewQuestion() {
      var newTime = new Date();
      var params = {
        author: this.get('author') ? this.get('author'):'',
        userQuestion: this.get('userQuestion') ? this.get('userQuestion'):'',
        notes: this.get('notes') ? this.get('notes'):'',
        tags: this.get('tag'),
        time: newTime.toDateString()
      };
      this.sendAction('makeNewQuestion', params);
    },
    selectTag(tag) {
      this.set('tag', tag);
    }
  }
});
