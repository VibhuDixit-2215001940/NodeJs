const ok = require('give-me-a-joke');
//More prefer to use const as no need to change the pre made module name
// To get a random dad joke
ok.getRandomDadJoke (function(joke) {
    console.log(joke);
});