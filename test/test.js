const assert = require("assert");

describe('removeDiacritics', function() {
  var removeDiacritics;

  it('should be successfully initialized', function() {
    removeDiacritics = require('../index.js');
  });

  it('should escape the diacritics', function() {
    assert.equal(removeDiacritics('<div><p>Hello <b>Québec</b></p></div>'), '<div><p>Hello <b>Quebec</b></p></div>');
  });
});
