const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function ask(question) {
  return tell(question).then((response) => [
    `Your question was: ${question}`,
    `Your fortune is: ${response}`,
  ]);
}

function getFortune(question) {
  return ask(question).catch(err=>`There was an error: ${err}`);
}

function fullSession(question) {
    //welcome text
   return welcome().then(welcome=>
     getFortune(question)//get q & a
      .then(fortuneArr=>[welcome].concat(fortuneArr)) //combined with welcome
      .then(fortuneSoFar=> goodbye()//say goodbye
      .then(goodbyeMess=> [...fortuneSoFar,goodbyeMess])) //combine goodbye with array so far
    )
   
    
    
}

//ask('What will the weather be like today').then(response=>console.log(response));
fullSession()
.then(console.log);
module.exports = { getFortune, fullSession };
