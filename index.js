var readlineSync = require("readline-sync");
const chalk = require("chalk");

var score = 0;

console.log(chalk.bgCyan("Let's find out how well you know me!"));

var userName = readlineSync.question("What's your name? ");

console.log(
  chalk.yellowBright(
    `Hello ${userName}, Enter a / b / c to answer the questions. For each right answer, you'll get 1 point.\n`
  )
);

console.log("LET'S START THE GAME...\n");

function play(question, answer) {
  var userAnswer = readlineSync.question(question + "\n" + "Your Answer : ");
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("You're right! You earned 1 point."));
    score = score + 1;
  } else {
    console.log(chalk.redBright("Sorry, you're wrong"));
  }
  console.log("current score: " + score);
  console.log("-------------");
}

var questions = [
  {
    question: "Where do I live? \na.Mumbai \nb.Delhi \nc.Bihar ",
    answer: "c",
  },
  {
    question: "What's my birth date? \na.Feb 20 \nb.Sept 05 \nc.June 10 ",
    answer: "a",
  },
  {
    question: "What's my specs colour? \na.Red \nb.Black \nc.Blue ",
    answer: "c",
  },
  {
    question: "Which is my favourite place? \na.Bangalore \nb.Home \nc.Simla ",
    answer: "b",
  },
  {
    question:
      "Which food i like the most? \na.Butter Chicken \nb.Chhole Bhature \nc.Pizza ",
    answer: "b",
  },
  {
    question: "Who is my favourite avenger? \na.Iron man \nb.Hulk \nc.Thor ",
    answer: "a",
  },
  {
    question: "Which is my favourite colour? \na.Black \nb.Red \nc.Blue ",
    answer: "a",
  },
  {
    question:
      "Who is my favourite singer? \na.Kumar Sanu \nb.Kishore Kumar \nc.Md. Rafi ",
    answer: "c",
  },
  {
    question:
      "Which is my favourite cartoon? \na.Ben 10 \nb.Doraemon \nc.Shinchan ",
    answer: "b",
  },
  {
    question:
      "Which is my favourite social media platform? \na.Instagram \nb.LinkedIn \nc.Twitter ",
    answer: "c",
  },
];

for (let i = 0; i < questions.length; i++) {
  if (i === 3) {
    if (score >= 2) {
      console.log(
        chalk.bgYellow("Congratulations! You have entered Level 2\n")
      );
    } else {
      console.log(chalk.bgRedBright("Oh no! you failed level 1\n"));
      break;
    }
  }
  if (i === 7) {
    if (score >= 5) {
      console.log(
        chalk.bgYellow(
          "Congratulations! You have entered Level 3. This is grand finale.\n"
        )
      );
    } else {
      console.log(chalk.bgRedBright("Oh no! you failed level 2\n"));
      break;
    }
  }
  let currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.yellowBright("Your final score is " + score + "\n"));

var highScores = [
  {
    name: "Aditya",
    score: 8,
  },
  {
    name: "Kartik",
    score: 6,
  },
  {
    name: "Harsh",
    score: 5,
  },
];

console.log(chalk.bgCyan("----Leaderboard----\n"));

for (let i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + " : " + highScores[i].score);
}
