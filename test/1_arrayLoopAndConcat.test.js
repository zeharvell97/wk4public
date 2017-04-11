describe('basemode arrayLoopAndConcat.js', function() {
  describe('concatArrayToString()', function() {
    it('concatentates the values of the array together', function() {
      chai.expect(concatArrayToString([1, 2, 3, 4])).to.equal('1234');
      chai.expect(concatArrayToString([1, 'mohawk', 3, 'four'])).to.equal('1mohawk3four');
    });
  });
});
