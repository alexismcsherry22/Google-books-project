import { searchBookTerms } from "./query.js";

//Search Bar
const searchInput = document.querySelector("#searchInput");
//Search Button
const searchButton = document.querySelector("#searchButton");
//Books Grid
const booksGrid = document.querySelector("#booksGrid");

//create element and display data
const addToNode = (parent, nodeContent) => {
    //Create a div called block that will hold the data for image, author, title, and description
    const block = document.createElement("div");
    block.classList.add("books-grid__block")

    //Image
    const nodeImage = document.createElement('img');
    nodeImage.src = nodeContent.imageLinks?.smallThumbnail ? nodeContent.imageLinks?.smallThumbnail : "https://media.wired.com/photos/5a0201b14834c514857a7ed7/master/pass/1217-WI-APHIST-01.jpg";

    //Author
    const nodeAuthor = document.createElement('p');
    nodeAuthor.innerText = nodeContent.authors ? nodeContent.authors : "Author not found";

    //Title
    const nodeTitle = document.createElement('p');
    nodeTitle.innerText = nodeContent.title ? nodeContent.title : "Title not found";

    //Description
    const nodeDesc = document.createElement('p');
    nodeDesc.innerText = nodeContent.description ? nodeContent.description : "Description not found";

    //place all of the nodes as children of the block node and have block become the child of the parent node
    block.appendChild(nodeImage);
    block.appendChild(nodeAuthor);
    block.appendChild(nodeTitle);
    block.appendChild(nodeDesc);
    parent.appendChild(block);
}

//use prevent default as we are using a button that's part of a form
searchButton.addEventListener('click', (event) => {
    //Stop the form from loading when clicked
    event.preventDefault();
    //If there is no input value, alert the user
    if (!searchInput.value) {
        return alert("Please input value in search bar");
    }
    searchBookTerms(booksGrid, searchInput.value);
    //Reset the search value since we already got the values needed
    searchInput.value = "";
});

export default addToNode;