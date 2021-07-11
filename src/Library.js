

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
  if (book.genre === "fantasy") {
    library.shelves.fantasy.push(book);
  } else if (book.genre === "nonFiction") {
    library.shelves.nonFiction.push(book);
  } else if (book.genre === "fiction") {
    library.shelves.fiction.push(book);
  }

  return library;
}

function checkoutBook(library, book, shelf) {
  if (shelf === "fantasy") {
    if (library.shelves.fantasy.includes(book)) {
      console.log(`You have now checked out ${book} from the ${library.name}`);

      var removeBookIndex = library.shelves.fantasy.indexOf(book);

      return library.shelves.fantasy.splice(removeBookIndex, 1);
    } else {
      return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
    }
  }
  if (shelf === "nonFiction") {
    if (library.shelves.nonFiction.includes(book)) {
      console.log(`You have now checked out ${book} from the ${library.name}`);

      var removeBookIndex = library.shelves.nonFiction.indexOf(book);

      return library.shelves.nonFiction.splice(removeBookIndex, 1);;
    } else {
      return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
    }
  }
  if (shelf === "fiction") {
    if (library.shelves.fiction.includes(book)) {
      console.log(`You have now checked out ${book} from the ${library.name}`);

      var removeBookIndex = library.shelves.fiction.indexOf(book);

      return library.shelves.fiction.splice(removeBookIndex, 1);
    } else {
      return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
    }
  }
}
