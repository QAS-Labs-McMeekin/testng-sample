
/* globals gauge*/

"use strict";

var assert = require("assert");

gauge.step("hello - should - world", function() {
  assert.equal(true, "hello - should - world");
});
