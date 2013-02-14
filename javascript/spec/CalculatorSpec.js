beforeEach(function() {
  this.addMatchers({
    sumShouldBe: function(expected) {
      return this.actual === expected;
    }
  });
});

describe("Add", function() {
  it("should return 0 for an empty string input", function() {
    expect(Add("")).toEqual(0);
    });
  it("should return a number for an string input of that number", function() {
      [["1",1],["2",2],["3",3]].forEach(function(x){
        expect(Add(x[0])).toEqual(x[1]);
      });
    });
  it("should return 3 for an string input of '1,2'", function() {
    var result = Add("1,2");
    expect(result).toEqual(3);
    });
  it("should return Error: fred for an string input of '1,2,3,4'", function() {
    expect(function(){Add("1,2,3,4");}).toThrow(Error("fred"));
    });

});
