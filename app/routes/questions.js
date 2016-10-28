import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    destroyPost(model) {
      model.destroyRecord();
      this.transitionTo('index');
    },
    updatePost(model, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          model.set(key, params[key]);
        }
      });
      model.save();
      this.transitionTo('index');
    }
  }
});
