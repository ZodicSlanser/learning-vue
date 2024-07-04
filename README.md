# Vue.js Learning Repository

Welcome to my Vue.js learning repository! This is where I document my journey as I learn and experiment with Vue.js. I will update this repository with new code snippets, components, and features as I progress.

## Project Overview

This project serves as a playground for experimenting with various Vue.js features and concepts. The initial setup includes a simple application that manages a list of books and allows user interactions such as toggling favorite books and handling login/logout functionality.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Code Overview](#code-overview)
  - [Data](#data)
  - [Methods](#methods)
  - [Computed Properties](#computed-properties)
- [Styles](#styles)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ZodicSlanser/vue-learning-repo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd vue-learning-repo
   ```
3. Open `index.html` in your favorite browser to view the app.

## Features

- Display a list of books with their details (title, author, age, and cover).
- Toggle favorite status for each book.
- Show/hide book list based on login status.
- Handle login/logout functionality.
- Track and display mouse movement coordinates.
- Log and print differences of handled events.

## Usage

Once the application is running, you can interact with it in the following ways:

- Click the "Log in" button to log in and view the list of books.
- Click the "Log out" button to log out and hide the book list.
- Click on a book item to toggle its favorite status.
- Move your mouse within the application area to see the coordinates update.
- Click anywhere within the application to log the event and display it in the console.

## Code Overview

### Data

The application uses the following data properties:

- `user`: An object representing the user with `name` and `age`.
- `bookCoverURI`: A string representing the base URI for book cover images.
- `books`: An array of book objects, each containing `title`, `author`, `age`, `cover`, and `isFav` (optional).
- `loggedIn`: A boolean indicating the user's login status.
- `showBooks`: A boolean indicating whether to show the book list.
- `loginText`: A string representing the login/logout button text.
- `events`: An array to store handled events.
- `x` and `y`: Numbers representing the mouse coordinates.
- `githubURL`: A string with the URL to the GitHub repository.

### Methods

The application defines several methods:

- `toggleBooks()`: Toggles the visibility of the book list.
- `login()`: Handles user login/logout and updates the book list visibility and button text.
- `handleEvent(e)`: Logs the event and stores it in the `events` array.
- `printDifference()`: Prints the differences of handled events.
- `handleMove(e)`: Updates the mouse coordinates.
- `setFav(book)`: Toggles the favorite status of a book.

### Computed Properties

The application uses the following computed property:

- `favBooks()`: Returns an array of books that are marked as favorites.
