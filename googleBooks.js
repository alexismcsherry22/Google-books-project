//Search Bar
const searchInput = document.querySelector("#searchInput");
//Search Button
const searchButton = document.querySelector("#searchButton");
//Books Grid
const booksGrid = document.querySelector("#booksGrid");
//Book Info Block
const bookInfoBlock = document.querySelector("#bookInfoBlock");

const searchBookTerms = async (parent, block, search) => {

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=20`);

    const data = await response.json();
    const results = data.items;
    console.log(data);
    // console.log(results);
    const books = results.map((book) => {
        return book.volumeInfo;
    })
    console.log(books);
    
    books.forEach(async (book) => {
        addToNode(parent, block, book);
    })  
}

//create element and display data
const addToNode = (parent, block, nodeContent) => {
    //Block section clone
    block.cloneNode(false);

    //Image
    const nodeImage = document.createElement('img');
    nodeImage.className = ".books-grid__image";
    nodeImage.src = nodeContent.imageLinks;

    //Author
    const nodeAuthor = document.createElement('p');
    nodeAuthor.className = ".books-grid__author";
    nodeAuthor.innerText = nodeContent.authors;

    //Title
    const nodeTitle = document.createElement('p');
    nodeTitle.className = ".books-grid__title"
    nodeTitle.innerText = nodeContent.title;

    //Description
    const nodeDesc = document.createElement('p');
    nodeDesc.className = ".books-grid__desc"
    nodeDesc.innerText = nodeContent.description;

    //Checks
    console.log(nodeImage);
    console.log(nodeAuthor);
    console.log(nodeTitle);
    console.log(nodeDesc);

    // parent.appendChild(node);
    parent.appendChild(block);
    block.appendChild(nodeImage);
    block.appendChild(nodeAuthor);
    block.appendChild(nodeTitle);
    block.appendChild(nodeDesc);
}

//use prevent default as we are using a button that's part of a form
searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    searchBookTerms(booksGrid, bookInfoBlock, searchInput.value);
});

