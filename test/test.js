var test = require('unit.js');
require("../");

describe("Date.format ----- ",function(){ 
  describe("---",function(){ 
    it("Unit Test for diferent values",function(){     
     
     var date = new Date('1981-12-11T13:55:00');
      test
        .value(date.format("{Y}/{MM}/{D}"))
          .is('1981/12/11')
     })
  })
});