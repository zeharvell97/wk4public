describe('basemode Testing Array Review', function() {
  describe('the arrayReverser function', function() {
    it('should reverse the array', function() {
      chai.expect(arrayReverser(['blue', 3, 'red'])).to.deep.equal(['red', 3, 'blue']);
      chai.expect(arrayReverser([42.4, 3, 'red', 'magenta'])).to.deep.equal(['magenta', 'red', 3, 42.4]);
    });
  });
});
