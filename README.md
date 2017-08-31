# Tic-Tac-Toe

<p align="center">
    <img src="http://i.imgur.com/h5ERPyc.png" style="border: solid black 1px;" title="Sketch Mockup of Tic Tac Toe" alt="Sketch Mockup of Tic Tac Toe" />
    A mockup of the game that I designed using Sketch app.

</p>

## Game Description

Tic Tac Toe is a two player game where the goal is for each player to mark their turn as X or an O on a game board with three columns and three rows. The first user to mark three tiles in a row either diagonally, horizontally, or vertically will be the winner. If neither player is able to score three in a row, the game is declared a tie.

After a win has been declared, the user can reset their game and continue playing as many times as they wish. The game can also be reset at any time throughout game play.


## How to Clone and Run this Project

1. Open your terminal and navigate to the directory where you wish to save the project.

2. Once in that directory, copy the following code and press enter:

    `git clone https://github.com/ediesyoum/tic-tac-toe`

3. Once the repository has been cloned, `cd` into the project. There you will see the directory structure for this front-end code.

4. If you decide to make changes, be sure to check your work by opening `index.html` in your preferred browser.


## Interesting Technical Decisions

- Layout - Added all components to a single column to allow for better responsiveness without use of a CSS grid framework.

- Modal with simple JS showing and hiding of a div with an overlay background

- Creating the "play" button to also change to a "reset" button when clicked for easy accessibility throughout the game


## Technologies used

- HTML/CSS
- jQuery
- Vanilla JavaScript
