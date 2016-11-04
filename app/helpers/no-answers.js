import Ember from 'ember';

export function noAnswers(params) {
  var question = params[0];

  if(question.get('answers').get('length') <= 0) {
    return Ember.String.htmlSafe('<i id="frown" class="frown icon"></i>');
  }
}

export default Ember.Helper.helper(noAnswers);
