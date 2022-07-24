

//Search Bar
const searchInput = document.querySelector("#searchInput");
//Search Button
const searchButton = document.querySelector("#searchButton");

const searchBookTerms = async (search) => {

    const booksArray = [];

    const response = fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`, {
        headers: {
            Accept: 'application/json',
        },
    });
    booksArray.push(response);
    const results = await Promise.all(booksArray);
    console.log(results);
    console.log(booksArray);
    results.forEach(async (result) => {
        const {bookInfo} = await result.json();
        //Temporary Check
        console.log(bookInfo);
        //Create a function that can create elements and feed the values
        //addToNode(parent, "p", bookInfo);
    })
    
}

//use prevent default as we are using a button that's part of a form
searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    searchBookTerms(searchInput.value);
});

//use something like this
const addToNode = (parent, nodeType, nodeContent) => {
    const node = document.createElement(nodeType);
    const textNode = document.createTextNode(nodeContent);
    node.appendChild(textNode);
    parent.appendChild(node);
}