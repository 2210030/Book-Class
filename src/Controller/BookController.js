// controllers/BookController.js
class BookController {
    addBooksToInventory(inventory, numBooks) {
      const newBooks = [];
      for (let i = 0; i < numBooks; i++) {
        const newBook = this.createBookFromPrompt();
        newBooks.push(newBook);
      }
      inventory.push(...newBooks);
      return newBooks;
    }
  
    updateBookAttribute(book, attributeToUpdate, newValue) {
      // Check if the attributeToUpdate is a string and exists in the book object
      if (typeof attributeToUpdate === 'string' && attributeToUpdate in book) {
        book[attributeToUpdate] = newValue;
        return true; // Successfully updated
      }
      return false; // Attribute doesn't exist in the book or attributeToUpdate is not a string
    }
    createBookFromPrompt() {
      const title = prompt('Enter book title:');
      const author = prompt('Enter author name:');
      const ISBN = prompt('Enter ISBN:');
      const price = parseFloat(prompt('Enter price:'));
  
      return {
        title,
        author,
        ISBN,
        price,
      };
    }
  }
  
  export default BookController;
  