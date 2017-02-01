var chai = require('chai');
var objects = require('../assignment/objects.assignment');
var sinon = require('sinon');


describe('Testing Object Review', function() {

  describe('the threeBooks function', function() {
    it('should return 3 objects in an array', function() {
      var books = objects.threeBooks();
      chai.expect(books).to.have.lengthOf(3);
    });

    it('should return book objects with 4 specific properties', function() {
      var books = objects.threeBooks();
      chai.expect(books[0]).to.have.ownProperty('title');
      chai.expect(books[0]).to.have.ownProperty('author');
      chai.expect(books[0]).to.have.ownProperty('pageCount');
      chai.expect(books[0]).to.have.ownProperty('haveRead');
    });
  });

  describe('the fixLiteralSyntax function', function() {
    it('should return an object with 4 specific properties', function() {
      var movie = objects.fixLiteralSyntax();
      chai.expect(movie).to.have.ownProperty('name');
      chai.expect(movie).to.have.ownProperty('runTime');
      chai.expect(movie).to.have.ownProperty('releaseYear');
      chai.expect(movie).to.have.ownProperty('director');
      // @TODO probably should check values but this assignment allows flexibility
    });
  });

  describe('the Book constructor function', function() {
    it('should return an object with 4 specific properties', function() {
      var book = new objects.Book('hp', 'jk rowling', 444, true);
      chai.expect(book).to.have.ownProperty('title');
      chai.expect(book).to.have.ownProperty('author');
      chai.expect(book).to.have.ownProperty('pageCount');
      chai.expect(book).to.have.ownProperty('haveRead');
    });

    it('should return an object with 4 values', function() {
      var book = new objects.Book('hp', 'jk rowling', 444, true);
      chai.expect(book.title).to.equal('hp');
      chai.expect(book.author).to.equal('jk rowling');
      chai.expect(book.pageCount).to.equal(444);
      chai.expect(book.haveRead).to.equal(true);

      var nextBook = new objects.Book(44, 'kris');
      chai.expect(nextBook.title).to.equal(44);
      chai.expect(nextBook.author).to.equal('kris');
      chai.expect(nextBook.pageCount).to.be.undefined;
      chai.expect(nextBook.haveRead).to.be.undefined;
    });
  });

  /**
    Set up a function spy using Sinon. This will count how many times the Book constructor is calledThrice
  **/
  var constructorSpy;

  before('running constructor tests', function() {
    constructorSpy = sinon.spy(objects, "Book");
  });

  after(function() {
    constructorSpy.restore();
  });

  describe('the createBooksWithConstructor function', function() {
    it('should call the Book constructor 3 times', function() {
      var books = objects.createBooksWithConstructor();

      // sinon spy counts the number of times the constructor was called
      chai.expect(constructorSpy.calledThrice).to.be.true;
    });

    it('should return 3 objects in an array', function() {
      var books = objects.createBooksWithConstructor();
      chai.expect(books).to.have.lengthOf(3);
    });

    it('should return book objects with 4 specific properties', function() {
      var books = objects.createBooksWithConstructor();
      chai.expect(books[0]).to.have.ownProperty('title');
      chai.expect(books[0]).to.have.ownProperty('author');
      chai.expect(books[0]).to.have.ownProperty('pageCount');
      chai.expect(books[0]).to.have.ownProperty('haveRead');
    });
  });

});
