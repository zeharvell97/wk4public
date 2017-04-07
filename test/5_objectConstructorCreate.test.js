describe('basemode Testing Object Review', function() {

  describe('the Book constructor function', function() {
    it('should return an object with 4 specific properties', function() {
      var book = new Book('hp', 'jk rowling', 444, true);
      chai.expect(book).to.have.ownProperty('title');
      chai.expect(book).to.have.ownProperty('author');
      chai.expect(book).to.have.ownProperty('pageCount');
      chai.expect(book).to.have.ownProperty('haveRead');
    });

    it('should return an object with 4 values', function() {
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

  describe('the createBooksWithConstructor function', function() {
    // var constructorSpy = sinon.spy(window, 'Book');

    // it('should call the Book constructor with new 3 times', function() {
    //   // new constructorSpy('hp', 'jk rowling', 444, true);
    //   createBooksWithConstructor();
    //   // expect(constructorSpy.calledWithNew).to.be.equal(true);
    //   constructorSpy.should.have.been.calledWithNew
    //
    //   // console.log(constructorSpy);
    //
    //   // assert(constructorSpy.calledWithNew());
    //   // constructorSpy.should.have.been.calledWithNew
    //   // expect(constructorSpy.calledWithNew()).to.be.true
    //   // sinon spy counts the number of times the constructor was called
    //   // constructorSpy.should.have.been.calledWithNew
    //   // chai.expect(constructorSpy.calledWithNew()).to.be.true;
    //
    //   constructorSpy.restore();
    // });

    it('should return 3 objects in an array', function() {
      var books = createBooksWithConstructor();
      chai.expect(books).to.have.lengthOf(3);
      chai.expect(books[0]).to.be.a('object');
    });

    it('should return book objects with 4 specific properties', function() {
      var books = createBooksWithConstructor();
      chai.expect(books[0]).to.have.ownProperty('title');
      chai.expect(books[0]).to.have.ownProperty('author');
      chai.expect(books[0]).to.have.ownProperty('pageCount');
      chai.expect(books[0]).to.have.ownProperty('haveRead');
    });

    it('should have number value for pageCount property', function() {
      var books = createBooksWithConstructor();
      chai.expect(books[1].pageCount).to.be.a('number');
    });

    it('should have boolean value for haveRead property', function() {
      var books = threeBooks();
      chai.expect(books[1].haveRead).to.be.a('boolean');
    });
  });
});
