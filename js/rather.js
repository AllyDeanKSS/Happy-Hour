// --- Game Data ---
const questions = [
  {
    question: "Would you rather work a 4-day week with 10-hour days or a 5-day week with 8-hour days?",
    option1: "4-day, 10-hour days",
    option2: "5-day, 8-hour days"
  },
  {
    question: "Would you rather have a personal chef or a personal masseuse?",
    option1: "Personal chef",
    option2: "Personal masseuse"
  },
  {
    question: "Would you rather have unlimited vacation days but be on call 24/7 or have a set 3 weeks of vacation a year with no work contact?",
    option1: "Unlimited vacation (on call)",
    option2: "Set 3 weeks (no contact)"
  },
  {
    question: "Would you rather have a permanent coffee machine that only makes decaf or a printer that only prints in black and white?",
    option1: "Decaf coffee machine",
    option2: "Black & white printer"
  },
  {
    question: "Would you rather be an expert at a single hobby (like cooking or playing an instrument) or be decent at a dozen different hobbies?",
    option1: "Expert in one hobby",
    option2: "Decent at a dozen hobbies"
  },
  {
    question: "Would you rather commute to work by flying a jetpack or riding a unicycle?",
    option1: "Fly a jetpack",
    option2: "Ride a unicycle"
  },
  {
    question: "Would you rather have to speak in rhymes for the rest of your career or have to sing every email you send?",
    option1: "Speak in rhymes",
    option2: "Sing every email"
  },
  {
    question: "Would you rather have to wear a full business suit to work every day or wear a funny, themed T-shirt every day?",
    option1: "Full business suit",
    option2: "Funny T-shirt"
  },
  {
    question: "Would you rather have the power to teleport to any meeting you're late for or have the power to instantly find any file on your computer?",
    option1: "Teleport to meetings",
    option2: "Instantly find files"
  },
  {
    question: "Would you rather get a $10,000 bonus at the end of the year or a free daily lunch of your choice for a year?",
    option1: "$10,000 bonus",
    option2: "Free daily lunch"
  },
  {
    question: "Would you rather have to manage a project with no budget or with no deadline?",
    option1: "No budget",
    option2: "No deadline"
  },
  {
    question: "Would you rather have a work best friend you share everything with or have no close friends at work but be highly respected by everyone?",
    option1: "Work best friend",
    option2: "Respected but no close friends"
  },
  {
    question: "Would you rather have a meeting that lasts all day but gets everything decided or have multiple short meetings over weeks to get to the same decision?",
    option1: "One long meeting",
    option2: "Multiple short meetings"
  },
  {
    question: "Would you rather only be able to use emojis to communicate with your boss or use only gifs to communicate with your team?",
    option1: "Only emojis with boss",
    option2: "Only gifs with team"
  },
  {
    question: "Would you rather be a successful entrepreneur and work 80 hours a week or have a 9-to-5 job with a great work-life balance and a comfortable salary?",
    option1: "Successful entrepreneur",
    option2: "9-to-5 with work-life balance"
  },
  {
    question: "Would you rather have to clean the office bathrooms every week or organize the company's annual messy storage closet?",
    option1: "Clean bathrooms",
    option2: "Organize the storage closet"
  },
  {
    question: "Would you rather be able to read your coworkers' minds or instantly know the solution to any work problem?",
    option1: "Read coworkers' minds",
    option2: "Instantly know the solution"
  },
  {
    question: "Would you rather have to give a 30-minute presentation on a topic you know nothing about or sit through a 2-hour meeting on a topic you're an expert on?",
    option1: "Present on nothing",
    option2: "Sit through a meeting on an expert topic"
  },
  {
    question: "Would you rather be famous for your job but hated by your peers or be anonymous but loved by everyone you work with?",
    option1: "Famous but hated",
    option2: "Anonymous but loved"
  },
  {
    question: "Would you rather have to work with a team of robots or work with a team of clones of yourself?",
    option1: "Team of robots",
    option2: "Team of clones"
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

  // Check if all questions have been asked
  if (currentQuestionIndex >= questions.length) {
    // Reset to the beginning
    currentQuestionIndex = 0;
  }
  
  // Get the current question
  const currentQuestion = questions[currentQuestionIndex];

  // Update HTML with question and options
  questionText.textContent = currentQuestion.question;
  option1Button.textContent = currentQuestion.option1;
  option2Button.textContent = currentQuestion.option2;
  
  // Increment index for the next question
  currentQuestionIndex++;
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
