const readline = require("readline");
let questionList = [
  "What's your name? Nicknames are also acceptable: ",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

let arrayAnswer = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(questionList[0], answer => {
  arrayAnswer.push(answer);
  rl.question(questionList[1], answer => {
    arrayAnswer.push(answer);
    rl.question(questionList[2], answer => {
      arrayAnswer.push(answer);
      rl.question(questionList[3], answer => {
        arrayAnswer.push(answer);
        rl.question(questionList[4], answer => {
          arrayAnswer.push(answer);
          rl.question(questionList[5], answer => {
            arrayAnswer.push(answer);
            rl.question(questionList[6], answer => {
              arrayAnswer.push(answer);
              console.log(`Hello ${arrayAnswer[0]} you like doing ${arrayAnswer[1]}, you listen to ${arrayAnswer[2]}. Your favourite meal is ${arrayAnswer[3]}, while your favourite dish during that meal is ${arrayAnswer[4]}. Your favourite sport is ${arrayAnswer[5]} and superpower is ${arrayAnswer[6]}`);
             rl.close();
            });
          });
        });
      });
    });
  });
});



