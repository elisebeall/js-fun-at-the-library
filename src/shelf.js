
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
    return shelf;
  }
}


function unshelfBook(book, shelf) {
  for (var i=0; i < shelf.length; i++) {
    var removeBook = shelf[i].title.includes(book);

    if (removeBook === true) {
      return shelf.splice(i, 1);
    }
  }
}

function listTitles(shelf) {
  var titles = [];

  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  }

  return titles.join(", ");
}

function searchShelf(shelf, book) {
  var locatedBook = false;

  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title.includes(book)) {
      locatedBook = true;
    }
  }

  return locatedBook;
}
