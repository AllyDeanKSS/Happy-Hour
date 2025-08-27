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
    question: "Would you rather have to clean the office bathrooms every week or organize the company's annual messy storage closet?",
    option1: "Clean bathrooms",
    option2: "Organize the storage closet"
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
  // --- NEW QUESTIONS ---
  {
    question: "Would you rather only be able to eat sweet foods or only be able to eat savory foods for the rest of your life?",
    option1: "Sweet foods",
    option2: "Savory foods"
  },
  {
    question: "Would you rather have a personal chef or an unlimited gift card for all food delivery services?",
    option1: "Personal chef",
    option2: "Unlimited food delivery"
  },
  {
    question: "Would you rather have a huge home cinema with every movie or a giant library with every book ever written?",
    option1: "Home cinema with every movie",
    option2: "Library with every book"
  },
  {
    question: "Would you rather be an incredible singer or an incredible dancer?",
    option1: "Singer",
    option2: "Dancer"
  },
  {
    question: "Would you rather be able to talk to animals or be able to speak all human languages?",
    option1: "Talk to animals",
    option2: "Speak all languages"
  },
  {
    question: "Would you rather always have to wear a full business suit or always have to wear a clown costume?",
    option1: "Business suit",
    option2: "Clown costume"
  },
  {
    question: "Would you rather live in a cabin in the woods or an apartment in a busy city?",
    option1: "Cabin in the woods",
    option2: "Apartment in the city"
  },
  {
    question: "Would you rather have the power to teleport anywhere in the world or have the power to stop time?",
    option1: "Teleport anywhere",
    option2: "Stop time"
  },
  {
    question: "Would you rather be able to eat whatever you want without gaining weight or be able to sleep for as long as you want without feeling groggy?",
    option1: "Eat anything without gaining weight",
    option2: "Sleep without feeling groggy"
  },
  {
    question: "Would you rather have a pet dragon that is the size of a cat or a pet cat that is the size of a dragon?",
    option1: "Cat-sized dragon",
    option2: "Dragon-sized cat"
  },
  {
    question: "Would you rather only be able to travel by train or only by boat?",
    option1: "Travel by train",
    option2: "Travel by boat"
  },
  {
    question: "Would you rather be able to remember every movie you've ever watched or be able to remember every book you've ever read?",
    option1: "Remember every movie",
    option2: "Remember every book"
  },
  {
    question: "Would you rather be a professional athlete or a world-renowned chef?",
    option1: "Professional athlete",
    option2: "World-renowned chef"
  },
  {
    question: "Would you rather never have to do laundry again or never have to do dishes again?",
    option1: "No laundry",
    option2: "No dishes"
  },
  {
    question: "Would you rather be an incredibly talented painter or an incredibly talented photographer?",
    option1: "Painter",
    option2: "Photographer"
  }
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
