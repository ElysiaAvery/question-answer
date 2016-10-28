import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    destroyQuestion(model) {
      model.destroyRecord();
      this.transitionTo('index');
    },
    updateQuestion(model, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          model.set(key, params[key]);
        }
      });
      model.save();
      this.transitionTo('index');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', question);
    }
  }
});
