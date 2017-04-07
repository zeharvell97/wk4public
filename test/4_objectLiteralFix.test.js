describe('basemode Testing Object Review', function() {
  describe('the fixLiteralSyntax function', function() {
    it('should return an object with 4 specific properties', function() {
      var movie = fixLiteralSyntax();
      chai.expect(movie).to.have.ownProperty('name');
      chai.expect(movie).to.have.ownProperty('runtime');
      chai.expect(movie).to.have.ownProperty('releaseYear');
      chai.expect(movie).to.have.ownProperty('director');
    });

    it('should have number and string types', function() {
      var movie = fixLiteralSyntax();
      chai.expect(movie.name).to.be.a('string');
      chai.expect(movie.director).to.be.a('string');
      chai.expect(movie.releaseYear).to.have.to.be.a('number');
    });

    it('NOT REQUIRED but change runtime from string to number', function() {
      var movie = fixLiteralSyntax();
      chai.expect(movie.runtime).to.be.a('number');
    });
  });
});
