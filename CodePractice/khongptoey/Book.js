// Class Book
// Constructor
// • Constructor(title, author, yearPublished): This initializes the properties
// 'title', 'author', and 'yearPublished'. If they are empty, it assigns 'no title', 'no
// author', and 0 respectively.
// Properties
// • title: type String
// • author: type String
// • yearPublished: type number
class Book {
  constructor(title, author, yearPublished) {
    this.title = title || "No title";
    this.author = author || "no author";
    this.yearPublished = yearPublished || 0;
  }
  getInfo() {
    return `${this.title} by ${this.author}, published in ${this.yearPublished}`;
  }
}
// Create an object Book reference practice 1
const bookEmpty = new Book();
console.log(bookEmpty.getInfo());

const book1 = new Book("Math", "Mark", 2024);
console.log(book1.getInfo());
