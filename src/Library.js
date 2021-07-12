

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};

function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library;
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);

  return library;
}

function checkoutBook(library, book, shelf) {
  for (var i=0; i < library.shelves[shelf].length; i++) {
    if (library.shelves[shelf][i].title === book) {
      library.shelves[shelf].splice(i, 1);

      return `You have now checked out ${book} from the ${library.name}`;
    }
   }
   return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
 }
