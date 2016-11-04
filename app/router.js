import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('questions', {path: '/questions/:question_id'});
  this.route('new-question');
  this.route('following-questions');
});

export default Router;
