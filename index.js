// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  counter2() uses a closure statement while counter1() does not
 * 2. Which of the two uses a closure? How can you tell?
 * the variable is outside of the function.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * If you did not need to access a variable outside of the function.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(score){
   return Math.floor(Math.random() * Math.floor(score));

}
console.log(inning(3));
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 


function finalScore(innings){
innings=9;
  let homeScore = inning(3) * innings * Math.random(2);
  let finalHomeScore = Math.ceil(homeScore);
  let awayScore = inning(3) * innings * Math.random(2);
  let finalAwayScore = Math.floor(awayScore);
  return `the home score was ${finalHomeScore} and the away score ${finalAwayScore}`

}
console.log(finalScore(4))
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(inningNumber) {
  inningNumber = 1;
  let homeScore1st = inning(3) * inningNumber * Math.random(1);
  homeScore1st = Math.ceil(homeScore1st);
  let awayScore1st = inning(3) * inningNumber * Math.random(2);
  awayScore1st = Math.floor(awayScore1st);

  let homeScore2nd = inning(3) * inningNumber * Math.random(1);
  homeScore2nd = Math.ceil(homeScore2nd) + homeScore1st;
  let awayScore2nd = inning(3) * inningNumber * Math.random(2);
  awayScore2nd = Math.floor(awayScore2nd) + awayScore1st;

  let homeScore3rd = inning(3) * inningNumber * Math.random(1);
  homeScore3rd = Math.ceil(homeScore3rd) + homeScore2nd;
  let awayScore3rd = inning(3) * inningNumber * Math.random(1);
  awayScore3rd = Math.floor(awayScore3rd) + awayScore2nd;

  let homeScore4th = inning(3) * inningNumber * Math.random(1);
  homeScore4th = Math.ceil(homeScore4th) + homeScore3rd;
  let awayScore4th = inning(3) * inningNumber * Math.random(2);
  awayScore4th = Math.floor(awayScore4th) + awayScore3rd;

  let homeScore5th = inning(3) * inningNumber * Math.random(1);
  homeScore5th = Math.ceil(homeScore5th) + homeScore4th;
  let awayScore5th = inning(3) * inningNumber * Math.random(2);
  awayScore5th = Math.floor(awayScore5th) + awayScore4th;

  let homeScore6th = inning(3) * inningNumber * Math.random(1);
  homeScore6th = Math.ceil(homeScore6th) + homeScore5th;
  let awayScore6th = inning(3) * inningNumber * Math.random(2);
  awayScore6th = Math.floor(awayScore6th) + awayScore5th;

  let homeScore7th = inning(3) * inningNumber * Math.random(1);
  homeScore7th = Math.ceil(homeScore7th) + homeScore6th;
  let awayScore7th = inning(3) * inningNumber * Math.random(1);
  awayScore7th = Math.floor(awayScore7th) + awayScore6th;

  let homeScore8th = inning(3) * inningNumber * Math.random(1);
  homeScore8th = Math.ceil(homeScore8th) + homeScore7th;
  let awayScore8th = inning(3) * inningNumber * Math.random(1);
  awayScore8th = Math.floor(awayScore8th) + awayScore7th;

  let homeScore9th = inning(3) * inningNumber * Math.random(1);
  homeScore9th = Math.ceil(homeScore9th) + homeScore8th;
  let awayScore9th = inning(3) * inningNumber * Math.random(1);
  awayScore9th = Math.floor(awayScore9th) + awayScore8th;

  // let homeScore1st = inning(3) * inningNumber * Math.random(2);
  // homeScore1st = Math.ceil(homeScore1st);
  // let awayScore1st = inning(3) * inningNumber * Math.random(2);
  // awayScore1st = Math.floor(awayScore1st);


  return `1st inning: ${homeScore1st} - ${awayScore1st}
  2nd inning: ${homeScore2nd} - ${awayScore2nd}
  3rd inning: ${homeScore3rd} - ${awayScore3rd}
  4th inning: ${homeScore4th} - ${awayScore4th}
  5th inning: ${homeScore5th} - ${awayScore5th}
  6th inning: ${homeScore6th} - ${awayScore6th}
  7th inning: ${homeScore7th} - ${awayScore7th}
  8th inning: ${homeScore8th} - ${awayScore8th}
  9th inning: ${homeScore9th} - ${awayScore9th}

  final Score: ${homeScore9th} - ${awayScore9th}
  `

  
}
console.log(scoreboard())


  
   