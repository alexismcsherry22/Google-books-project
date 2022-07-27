import addToNode from "./googleBooks.js";

//function that uses a parent and search
//parent is a node that the books will be put on as child nodes
//search is the inputted value that a user has submitted
export const searchBookTerms = async (parent, search) => {
    //fetch the api 
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=20`);

    //use .json to return a promise of the api data we fetched
    const data = await response.json();
    const results = data.items;

    //map the books because we want to grab the volumeInfo list of objects
    const books = results.map((book) => {
        return book.volumeInfo;
    })
    
    //Check if the parent node has any child nodes
    if (parent.hasChildNodes()) {
        //if it does loop through each child node in parent
        for (let i = parent.childNodes.length - 1; i >= 0; i--) {
            //and remove each child till the node has no children
            parent.removeChild(parent.childNodes[i]);
        }
    }

    //For each book we will use addToNode to format the objects onto the page
    books.forEach(async (book) => {
        addToNode(parent, book);
    })  
}