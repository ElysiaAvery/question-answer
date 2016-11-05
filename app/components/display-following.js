import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  actions: {
    removeFromFollowing(question) {
      this.get('favoriteQuestions').remove(question);
    }
  }
});
