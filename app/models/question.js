import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  userQuestion: DS.attr(),
  notes: DS.attr(),
  time: DS.attr(),
  tags: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
