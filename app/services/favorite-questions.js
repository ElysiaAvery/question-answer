import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],

  add(question) {
    console.log(question  + "here");
    this.get('questions').pushObject(question);
  }
});
