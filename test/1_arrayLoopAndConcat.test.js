describe('basemode Testing Array Review', function() {
  describe('the concatArrayToString function', function() {
    it('should concatentate the values of the array together', function() {
      chai.expect(concatArrayToString([1, 2, 3, 4])).to.equal('1234');
      chai.expect(concatArrayToString([1, 'mohawk', 3, 'four'])).to.equal('1mohawk3four');
    });
  });
});
