import Ember from 'ember';

export default Ember.Route.extend({
  answerCount: Ember.computed('model.answers.length', function(){
    return this.get('model.answers.length') + ' - Answers';
  }),
  model: function(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    destroyQuestion(model) {
      var answer_deletions = model.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return model.destroyRecord();
      });
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
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
    },
    like(answer, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          answer.set(key, params[key]);
        }
      });
      answer.save();
    },
    dislike(answer, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          answer.set(key, params[key]);
        }
      });
      answer.save();
    }
  }
});
