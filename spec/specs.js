describe('shipping', function(){
  it("will prompt user for input of package dimensions", function() {
    expect(shipping('', '', '')).to.equal("Please enter height, length, and width");
  });

});
