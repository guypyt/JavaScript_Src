class Book {
  constructor(title, author, pages, genre) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
  }
  getSummary() {
    return `Title: ${this.title}, Author:${this.author}, Pages:${this.pages}, Genre:${this.genre}`;
  }
}
const getSumBook = new Book("Harry", "Conan", 345, "Sci-Fi");
console.log(getSumBook.getSummary());

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(newBook) {
    if (newBook instanceof Book) {
      this.books.push(newBook);
      console.log(`Book ${newBook.title},Added`);
    }
  }
  getBooksByGenre(genre) {
    return this.books.filter((book) => book.genre === genre);
  }
  getTotalPagesByGenre(genre) {
    const bookGenre = this.getBooksByGenre(genre);
    return bookGenre.reduce((totalpages, book) => book.pages + totalpages, 0);
  }
}

const book1 = new Book("Harry1", "Conan1", 346, "Sci-Fi");
const book2 = new Book("Harry2", "Conan1", 347, "Sci-Fi");
const book3 = new Book("Harry3", "Conan1", 348, "Fantasy");
const book4 = new Book("JS    ", "Conan1", 999, "Horror");

const myLibrary = new Library();

//Adding books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
console.log(myLibrary.books);

console.log(myLibrary.getBooksByGenre("Horror"));
// console.log(myLibrary.getTotalPagesByGenre("Sci-Fi")); 693

console.log(
  `Total Pages of this book : ${myLibrary.getTotalPagesByGenre("Sci-Fi")}`
);
