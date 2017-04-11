describe('basemode arrayReverse.js', function() {
  describe('arrayReverser()', function() {
    it('reverses the array', function() {
      chai.expect(arrayReverser(['blue', 3, 'red'])).to.deep.equal(['red', 3, 'blue']);
      chai.expect(arrayReverser([42.4, 3, 'red', 'magenta'])).to.deep.equal(['magenta', 'red', 3, 42.4]);
    });
  });
});
