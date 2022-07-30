# Google Books API Search Engine

## Project Outline

The Google Books Project main requirements was to use both DOM manipulation and Asynchronous programming. The functionality of the search engine was for users have the ability to search through the Google books database and get more details about each title.

## How to use the Project

This project uses HTML, CSS, SCSS, and JavaScript. Does not require any extensions to run.

## Extensions

The Extensions used to build this project are:

-   Live Server by Ritwick Dey
-   SASS package

## MVP

The Project required a single page that included simple styling and included:

-   A Header section that introduces the page.
-   A Form that contains a text input and a submit / search button.
-   A Grid of books

## Book Grid Requirements

-   When the search / submit button is clicked, a request must be sent to the Google Books API using the input value as the search term string
-   The books that are received should be rendered in the books grid.
-   Each book in the grid should have an image, author, title and description
-   The grid should be responsive on different screen sizes
-   Should use async / await when requesting code, NOT .then

## Styling

The Project required a colour palette and a planned design. The styling should use BEM, with each block belonging to its own SCSS file as well as a colour palette file to store palette variables.

## Application Design

The requirements are:

-   The DOM and non-DOM functions should be in their own JavaScript files.
-   non-DOM functions should do 1 thing and be as pure and reusable as possible.
-   Use iterators over loops
-   Parameterize and abstract large pieces of code

Bonus Goals

-   Give feedback when no book results can be found
-   When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

## Project Design and Functionality

I used a basic header with the text describing exactly what the project is (the title of the project). I also used a form that included a search bar and search button that when clicked with an inputted value, would request and receive a response from the api and display the books in a grid format.

The image below shows the book grid after a search has been submitted:

![Screenshot of Site][screenshot]
[screenshot]: /Google-books-project/GoogleBooksScreenshot.png "screenshot"

The whole page responds to the screen size changing as all text elements will shrink or enlarge, and the grid will wrap its elements into more or less columns.

The search bar will also trigger an alert to the user in the case that there is no value in the search bar.

## What to do differently next time

I would implement the bonus goals and spend more time understanding the functionality of async and promises.

## Struggles

Failed to correctly read the api object names which often led to questioning why something would not respond but it was because there was nothing to respond with. For example, I didn't realize that the thumbnail object held its own two objects that were where the values were stored.
