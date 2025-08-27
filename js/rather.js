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
const nextButton = document.getElementById('next-button');

// --- Game State ---
let currentQuestionIndex = 0;

// --- Functions ---
function initGame() {
  // Check if all questions have been asked
  if (currentQuestionIndex >= questions.length) {
    // Display a "Game Over" message
    questionText.textContent = "You've reached the end of the questions!";
    optionsContainer.style.display = 'none';
    nextButton.style.display = 'none';
    return;
  }
  
  // Get the current question
  const currentQuestion = questions[currentQuestionIndex];

  // Update HTML with question and options
  questionText.textContent = currentQuestion.question;
  option1Button.textContent = currentQuestion.option1;
  option2Button.textContent = currentQuestion.option2;
  
  // Show the options and hide the next button
  optionsContainer.style.display = 'flex';
  nextButton.style.display = 'none';

  // Enable buttons and reset styles for the new question
  option1Button.disabled = false;
  option2Button.disabled = false;
  option1Button.style.backgroundColor = '';
  option1Button.style.color = '';
  option2Button.style.backgroundColor = '';
  option2Button.style.color = '';
}

function handleSelection(event) {
  // Disable options after a selection is made
  option1Button.disabled = true;
  option2Button.disabled = true;

  // Highlight the selected button
  event.target.style.backgroundColor = 'var(--kiva-green)';
  event.target.style.color = '#fff';

  // Show the next button
  nextButton.style.display = 'block';
}

// --- Event Listeners ---
option1Button.addEventListener('click', handleSelection);
option2Button.addEventListener('click', handleSelection);

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  initGame();
});

// --- Start the game on page load ---
initGame();
