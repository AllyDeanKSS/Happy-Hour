// --- Game Data ---
const questions = [
  {
    question: "Would you rather have the ability to fly or be invisible?",
    option1: "Fly",
    option2: "Be invisible"
  },
  {
    question: "Would you rather have a rewind button for your life or a pause button?",
    option1: "Rewind button",
    option2: "Pause button"
  },
  {
    question: "Would you rather be able to talk to animals or speak all human languages?",
    option1: "Talk to animals",
    option2: "Speak all human languages"
  },
  {
    question: "Would you rather fight a horse-sized duck or 100 duck-sized horses?",
    option1: "Fight one horse-sized duck",
    option2: "Fight 100 duck-sized horses"
  },
  {
    question: "Would you rather have unlimited bacon or unlimited tacos?",
    option1: "Unlimited bacon",
    option2: "Unlimited tacos"
  },
  {
    question: "Would you rather live without music or live without movies?",
    option1: "Live without music",
    option2: "Live without movies"
  },
];

// --- Get DOM Elements ---
const questionText = document.getElementById('question-text');
const option1Button = document.getElementById('option1-button');
const option2Button = document.getElementById('option2-button');
const optionsContainer = document.getElementById('options-container');
const resultsContainer = document.getElementById('results-container');
const resultFill1 = document.getElementById('result-fill1');
const resultFill2 = document.getElementById('result-fill2');
const resultLabel1 = document.getElementById('result-label1');
const resultLabel2 = document.getElementById('result-label2');
const nextButton = document.getElementById('next-button');

// --- Game State ---
let currentQuestionIndex = 0;
let votes = { option1: 0, option2: 0 };
let totalVotes = 0;

// --- Functions ---
function initGame() {
  // Hide results and next button
  resultsContainer.style.display = 'none';
  nextButton.style.display = 'none';
  optionsContainer.style.display = 'flex';
  
  // Reset votes
  votes = { option1: 0, option2: 0 };
  totalVotes = 0;

  // Get a random question
  const randomIndex = Math.floor(Math.random() * questions.length);
  const currentQuestion = questions[randomIndex];

  // Update HTML with question and options
  questionText.textContent = currentQuestion.question;
  option1Button.textContent = currentQuestion.option1;
  option2Button.textContent = currentQuestion.option2;
}

function handleVote(option) {
  votes[option]++;
  totalVotes++;
  
  displayResults();
}

function displayResults() {
  // Hide the option buttons
  optionsContainer.style.display = 'none';
  
  // Show results and next button
  resultsContainer.style.display = 'block';
  nextButton.style.display = 'block';

  // Calculate percentages
  const percent1 = totalVotes === 0 ? 0 : (votes.option1 / totalVotes) * 100;
  const percent2 = totalVotes === 0 ? 0 : (votes.option2 / totalVotes) * 100;

  // Update the result bars
  resultFill1.style.width = `${percent1}%`;
  resultFill2.style.width = `${percent2}%`;
  resultLabel1.textContent = `${votes.option1} Votes (${percent1.toFixed(0)}%)`;
  resultLabel2.textContent = `${votes.option2} Votes (${percent2.toFixed(0)}%)`;
}

// --- Event Listeners ---
option1Button.addEventListener('click', () => handleVote('option1'));
option2Button.addEventListener('click', () => handleVote('option2'));
nextButton.addEventListener('click', initGame);

// --- Start the game on page load ---
initGame();
