import Ember from 'ember';

export function mostVote(params) {
  numArray: [],
  add(params) {
    this.get('numArray').pushObject(params);
  },
  // var c = Math.max(numArray);
  // if (highestNumber) {
    // console.log(numArray);
    // return Ember.String.htmlSafe('<i class="heart icon"></i><strong>This Answer is most trusted by other users.</strong>');
  // }
}
export default Ember.Helper.helper(mostVote);
