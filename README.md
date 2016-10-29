# _Question-answer_


#### By _[**Elysia Avery Nason**](https://github.com/elysiaavery)_

## Description
A web app that allows the user to submit a question that can be answered by other users.

## Specs

| Behaviour                                              | Input                                            | Output                                                                                                                                       |
|--------------------------------------------------------|--------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Can instantiate a question JSON object.                | "Is it okay to give a dog a grape?"              | {questions: ([   "author": "Anna"   "question":"Is it okay to give a dog a grape?"   "notes":"i have a new puppy who is only 10 weeks."  ])} |
| Can instantiate a answer JSON object.                  | "Grapes can harm your dog!"                      | {answers: ([ "author":"Polly"  "question":"Grapes can harm your dog!" ])}                                                                    |
| questions and answers have a one-to-many relationship. | question: "" answer1: "" answer2: "" answer3: "" | n/a                                                                                                                                          |

## Setup/Installation Requirements

* In your terminal window:
  * `$ git clone https://github.com/ElysiaAvery/question-answer`
  * Navigate to the question-answer directory: `$ cd question-answer`
  * `$ npm install`
  * `$ bower install`
  * Enter the command: `$ ember s`
* In the browser of your choosing, navigate to "localhost:4200" (tested in Chrome).

## Known Bugs

None

## Support and contact details

Elysia Nason: _elysia.avery@gmail.com_

## Technologies Used

_JavaScript,
Ember.js,
Bower,
Sass_

### License

This webpage is licensed under the GPL license.

Copyright &copy; 2016 **_Elysia Avery Nason_**
