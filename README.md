# Leaderboard

## Overview

This project is a dynamic leaderboard designed to showcase and rank players based on their scores. Built with HTML, CSS, and JavaScript, it offers an engaging and user-friendly interface for tracking and displaying player performance.

## Features

- **Dynamic Sorting:** The leaderboard dynamically sorts players in descending order based on their scores, providing an up-to-date ranking.

- **Responsive Design:** Ensures a seamless user experience on various devices, from desktops to mobile phones.

- **Interactive UI:** Users can interact with the leaderboard, view player details, and see real-time updates.

## Technologies Used

- HTML

- CSS

- JavaScript

## How to Use

1. Clone the repository: `https://github.com/nareshkumarnandam/leaderBoard.git`

2. Open the project in your preferred code editor.

3. Explore the HTML, CSS, and JavaScript files to understand the project structure.

4. Customize the player data in the JavaScript file to match your requirements.

## Sorting Algorithm

The dynamic sorting algorithm is implemented in the JavaScript file. Players are sorted in descending order based on their scores using the Array `sort` method.

```javascript
// Sample sorting code (modify based on your data structure)
players.sort((a, b) => b.score - a.score);