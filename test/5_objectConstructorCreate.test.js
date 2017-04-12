describe('basemode objectConstructorCreate.js', function() {

  describe('Book()', function() {
    it('returns an object with 4 specific properties', function() {
      var book = new Book('hp', 'jk rowling', 444, true);
      chai.expect(book).to.have.ownProperty('title');
      chai.expect(book).to.have.ownProperty('author');
      chai.expect(book).to.have.ownProperty('pageCount');
      chai.expect(book).to.have.ownProperty('haveRead');
    });

    it('returns an object with 4 values', function() {
      var book = new Book('hp', 'jk rowling', 444, true);
      chai.expect(book.title).to.equal('hp');
      chai.expect(book.author).to.equal('jk rowling');
      chai.expect(book.pageCount).to.equal(444);
      chai.expect(book.haveRead).to.equal(true);

      var nextBook = new Book(44, 'kris');
      chai.expect(nextBook.title).to.equal(44);
      chai.expect(nextBook.author).to.equal('kris');
      chai.expect(nextBook.pageCount).to.be.undefined;
      chai.expect(nextBook.haveRead).to.be.undefined;
    });
  });

  describe('createBooksWithConstructor()', function() {
    it('returns 3 Book objects in an array', function() {
      var books = createBooksWithConstructor();
      chai.expect(books).to.have.lengthOf(3);
      books.forEach(function (book) {
        chai.expect(book).to.be.a('object');
      });
    });

    it('returns book objects with 4 specific properties', function() {
      var books = createBooksWithConstructor();
      books.forEach(function (book) {
        chai.expect(book).to.have.ownProperty('title');
        chai.expect(book).to.have.ownProperty('author');
        chai.expect(book).to.have.ownProperty('pageCount');
        chai.expect(book).to.have.ownProperty('haveRead');
      });
    });

    it('has a number value for pageCount property', function() {
      var books = createBooksWithConstructor();
      books.forEach(function (book) {
        chai.expect(book.pageCount).to.be.a('number');
      });
    });

    it('has a boolean value for haveRead property', function() {
      var books = threeBooks();
      books.forEach(function (book) {
        chai.expect(book.haveRead).to.be.a('boolean');
      });
    });
  });
});
