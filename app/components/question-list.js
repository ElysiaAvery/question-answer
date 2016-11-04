import Ember from 'ember';

export default Ember.Component.extend({
  secondHeader: Ember.computed('question.author', 'question.time', function(){
    return 'Asked By: ' + this.get('question.author') + ' on ' + this.get('question.time');
  })
});
