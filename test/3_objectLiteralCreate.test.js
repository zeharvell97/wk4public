describe('basemode Testing Object Review', function() {
  describe('the threeBooks function', function() {
    it('should return 3 objects in an array', function() {
      var books = threeBooks();
      chai.expect(books).to.have.lengthOf(3);
    });

    it('should return book objects with 4 specific properties', function() {
      var books = threeBooks();
      chai.expect(books[0]).to.have.ownProperty('title');
      chai.expect(books[0]).to.have.ownProperty('author');
      chai.expect(books[0]).to.have.ownProperty('pageCount');
      chai.expect(books[0]).to.have.ownProperty('haveRead');
    });

    it('should have number value for pageCount property', function() {
      var books = threeBooks();
      chai.expect(books[0].pageCount).to.be.a('number');
    });

    it('should have boolean value for haveRead property', function() {
      var books = threeBooks();
      chai.expect(books[0].haveRead).to.be.a('boolean');
    });
  });
});
