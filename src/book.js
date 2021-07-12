module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}

function createTitle(bookIdea) {
  return `The ${bookIdea}`;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name : name,
    age : age,
    pronouns : pronouns
  }

  return character;
}

function saveReview(newReview, reviews) {
  if (reviews.includes(newReview)) {
    return reviews;
  } else {
    reviews[reviews.length] = newReview;
    return reviews;
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length*20;
}

function writeBook(bookTitle, bookCharacter, genre) {

  var book = {
    title : bookTitle,
    mainCharacter : bookCharacter,
    pageCount : calculatePageCount(bookTitle),
    genre: genre
  }

  return book;
}

function editBook(book) {
  var quarterPages = book.pageCount/4;
  var pages = book.pageCount-quarterPages;

  book.pageCount = pages;

  return book;
}
