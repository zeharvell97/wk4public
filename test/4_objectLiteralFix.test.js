describe('basemode objectLiteralFix.js', function() {
  describe('fixLiteralSyntax()', function() {
    it('returns an object with 4 specific properties', function() {
      var movie = fixLiteralSyntax();
      chai.expect(movie).to.have.ownProperty('name');
      chai.expect(movie).to.have.ownProperty('runtime');
      chai.expect(movie).to.have.ownProperty('releaseYear');
      chai.expect(movie).to.have.ownProperty('director');
    });

    it('has number and string types', function() {
      var movie = fixLiteralSyntax();
      chai.expect(movie.name).to.be.a('string');
      chai.expect(movie.director).to.be.a('string');
      chai.expect(movie.releaseYear).to.have.to.be.a('number');
    });

    it('has runtime property that is a string or number', function() {
      var movie = fixLiteralSyntax();
      if (typeof movie.runtime === 'string') {
        chai.expect(movie.runtime).to.equal('127 mins');
      }

      if (typeof movie.runtime === 'number') {
        chai.expect(movie.runtime).to.equal(127);
      }
    });
  });
});
