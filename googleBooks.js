//change from .then

const searchTerms = async () => {
  const book = await('https://www.googleapis.com/books/v1/volumes?q=search+terms')
  .then((response) => response.json())
  .then((generatedOutput) => {
    let results = generatedOutput.results;
    console.log(results);
  })
}