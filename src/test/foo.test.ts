import chai from "chai";

import foo  from "../app/foo";

chai.should();

describe(
  "foo",
  function ()
  {
    it(
      "has a 'bar' property of 'biz'",
      function ()
      {
        foo.should.have.property("bar", "biz");
      }
    );

    it(
      "has a 'baz' property of 42",
      function ()
      {
        foo.should.have.property("baz", 42);
      }
    );
  }
);
