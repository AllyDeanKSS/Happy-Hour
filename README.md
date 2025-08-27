The Dankest Jeopardy
Welcome to the ultimate virtual Jeopardy game board, designed for team events, company happy hours, or just a fun night with friends! This project is a fully functional, browser-based game that features two full rounds of questions and a dynamic scoreboard to track individual players' scores.

Key Features
Two Full Rounds: Includes a Jeopardy round and a Double Jeopardy round with new categories and increased point values.

Individual Player Scorekeeping: The scoreboard is designed for individual players, allowing you to easily track each person's points.

Simple Gameplay: Clicking a card reveals the question, and the host can then easily award or deduct points for the correct or incorrect player.

Intuitive Interface: The question modal can be closed by clicking anywhere on the dark overlay, making gameplay smooth and quick.

Easy to Host: The entire game is contained in a single HTML file and can be hosted for free using services like GitHub Pages.

How to Play
Open the Game: Navigate to the game's URL in your web browser. It's best to display this on a large screen or projector for the whole team to see.

Start the Round: The board for the Jeopardy round is displayed by default.

Select a Question: Players can choose a question by clicking on its point value.

Reveal the Answer: The host should read the question aloud. After a player has buzzed in and given their answer, click the "Reveal Answer" button in the modal to show the correct response.

Adjust the Score: After the correct answer is revealed, click the player's name to award or deduct the point value of the question. If no one gets it right, click the "No one got it / Pass" button.

Next Round: Once all questions in the Jeopardy round are answered, a "Start Double Jeopardy" button will appear. Clicking this will automatically load the new categories and higher point values for the second round.

Customization
The game is built with a single, self-contained index.html file, making it easy to edit.

Players: To change the player names, open the index.html file and look for the const players array in the <script> tag. You can add, remove, or change names directly in this list.

Questions: The questions and answers are stored in the const jeopardyData and const doubleJeopardyData objects. Feel free to update the categories, questions, and answers to match your team's interests.

How to Host for Free
This game is perfect for hosting on GitHub Pages, which you've already started. Simply follow these steps:

Add the index.html file to your repository.

Go to your repository's Settings tab, then click on Pages in the left sidebar.

Under "Build and deployment", select "Deploy from a branch" and choose the main branch and the /(root) folder.

Your game will be live at a URL like https://allydeankss.github.io/Happy-Hour/ within a few minutes.
