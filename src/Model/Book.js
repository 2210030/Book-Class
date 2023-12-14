class Book {
    constructor({ title, author, ISBN, price }) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
      this.price = price;
    }
  
    displayBookInfo() {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`ISBN: ${this.ISBN}`);
      console.log(`Price: ${this.price}`);
    }
  }
  
  export default Book;
  