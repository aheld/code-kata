describe("Add", function() {
  it("should return 0 for an empty string input", function() {
    var result = Add("");
    expect(result).toEqual(0);
    });
  it("should return 1 for an string input of 1", function() {
    var result = Add("1");
    expect(result).toEqual(1);
    });

});
