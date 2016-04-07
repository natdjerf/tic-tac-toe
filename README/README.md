Tic-tac-toe README file

Syntax help:
https://confluence.atlassian.com/bitbucketserver/markdown-syntax-guide-776639995.html

Contents of this file:
•	Introduction
•	Requirements
•	General Information:
•	Getting Started
•	Noteworthy Files
•	Project

## Introduction

A single application program designed for an online two-player tic-tac-toe game available in a browser.
The game was designed with simplicity in mind and for the ease of use by the player.

Tic-tac-toe is a is traditionally described as “a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.”*

*https://en.wikipedia.org/wiki/Tic-tac-toe

## Requirements:

*	Be deployed online, where the rest of the world can access it
*	Render a game board in the browser
*	Switch turns between X and O (or whichever markers you select)
*	Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
*	Use jQuery for DOM manipulation and event handling
*	Use AJAX for data storage and retrieval
*	Have login, logout, and change password functionality
*	Visually display the results of retrieving game information
*	Create and Update games.

## General Information:

Programming languages and methods used: html, JavaScript,  jQuery, AJAX, .scss

Created by Natalie Djerf nadjerf@gmail.com

Tic-Tac-Toe version 1.0 4/08/2016

## Getting Started:

Access to play requires an account; a user may sign in or sign up upon landing on the url. Only one player is required to log in for the game.
After signing up, a user will be required to sign in. After signing in, a play game option will prompt. The submission will create a new game.
A click in on the ‘board’ in the location desired will make a play, with the first player being ‘x’. The move will display the player’s mark (‘x’) in the selected location and begin a move counter. After going through a series of checks, the play will be switched to the second player, ‘o’.  The checks include: if the location is available for play, if the move makes that player the winner, if the move results in a tie.
A visual display is made when a winner or tie is returned to signify the end of the game. Naming conventions on functions throughout made for semantic syntax.

A user may chose to begin a new game by clicking the ‘New Game’ button in navigation bar at the time.
A  user may access their account details and sign out by clicking the ‘My Account’ button in the navigation bar. In the Account section, a user may change his/her password, and is required to input the current and new password in the text fields. The ‘Get Games’ button will retrieve the number of games associated with the user.
The ‘Sign Out’ button will end the user’s current session. Another sign in is required upon a page refresh and signing out.

## Noteworthy Files:
* index.html
*	styles: index.scss, colors.scss, typography.scss
*	scripts: app-data.js, index.js
*	auth: api.js, events.js, ui.js

## Project:
*	Wireframe: moqups
*	Initial User Stories:
As a player, I want to easily sign into my account and start a tic-tac-toe with an opponent.
As a player, I want to visualize what the board would look like if I were to play a move before selecting the location.
As a player, I want to see clearly who has won the game.
As a player, I want to keep track of the games played per session and outcomes (wins, ties, opponent wins). *  *Not Currently Available
