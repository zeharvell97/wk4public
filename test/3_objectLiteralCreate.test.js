describe('basemode objectLiteralCreate.js', function() {
  describe('threeBooks()', function() {
    it('returns 3 objects in an array', function() {
      var books = threeBooks();
      chai.expect(books).to.have.lengthOf(3);
    });

    it('returns book objects with 4 specific properties', function() {
      var books = threeBooks();
      books.forEach(function (book) {
        chai.expect(book).to.have.ownProperty('title');
        chai.expect(book).to.have.ownProperty('author');
        chai.expect(book).to.have.ownProperty('pageCount');
        chai.expect(book).to.have.ownProperty('haveRead');
      });
    });

    it('has a number value for pageCount property', function() {
      var books = threeBooks();
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
