/* 
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1.Calculate the average score for each team, using the test data below.
2.Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forger that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks. 😉
4.BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

Test Data: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.
TEST DATA BONUS 1: Dolphins Score 97, 112 and 101. Koalas score 109, 95 and 123.
TEST DATA BONUS 2: Dolphins Score 97, 112 and 101. Koalas Score 109, 95, and 106.

Good Luck 😃
*/

//Test Data:
// const dolphinScore = (96 + 108 + 89) / 3;

//TEST DATA BONUS 1:
// const dolphinScore = (97 + 112 + 101) / 3;

//TEST DATA BONUS 2:
const dolphinScore = (97 + 112 + 101) / 3;
const dolphinAverageScoreFixed = dolphinScore.toFixed(1);

//Test Data:
// const koalaScore = (88 + 91 + 110) / 3;

//TEST DATA BONUS 1:
// const koalaScore = (109 + 95 + 123) / 3;

//TEST DATA BONUS 2:
const koalaScore = (109 + 95 + 106) / 3;
const koalaAverageScoreFixed = koalaScore.toFixed(1);

console.log(`Dolphins average score ${dolphinAverageScoreFixed}`);
console.log(`Koalas average score ${koalaAverageScoreFixed}`);

if (dolphinAverageScoreFixed > koalaAverageScoreFixed && dolphinAverageScoreFixed >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (koalaAverageScoreFixed > dolphinAverageScoreFixed && koalaAverageScoreFixed >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (koalaAverageScoreFixed === dolphinAverageScoreFixed && koalaAverageScoreFixed >= 100 && dolphinAverageScoreFixed >= 100) {
  console.log("Both win the trophy 🏆");
} else {
  console.log("No team wins the trophy 😢");
}