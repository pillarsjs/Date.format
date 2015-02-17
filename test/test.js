var test = require('unit.js');
require("../");

describe("Date.format ----- ",function(){ 
  describe("---",function(){ 
    it("Unit Test for diferent completes values & GMT",function(){     
     
      var date = new Date();
      date.setFullYear(1981);
      date.setMonth(12-1);
      date.setDate(11);
      date.setHours(13);
      date.setMinutes(54);
      date.setSeconds(59);
      date.setMilliseconds(1);
    
      test
        .value(date.format("{Y}/{MM}/{D} {h}:{m}:{s} {ms}"))
          .is('1981/12/11 13:54:59 1')
        .value(date.format("{YY}/{M}/{D} {hh}:{mm}:{ss} {mss}"))
          .is('81/12/11 13:54:59 0001')
        .value(date.format("{Y}/{MM}/{DD} {h}:{mm}:{ss} {ms}"))
          .is('1981/12/11 13:54:59 1');
     })

    it("Unit Test for all possible datas <10 & GMT",function(){     

      var date = new Date();
      date.setFullYear(2100);
      date.setMonth(5-1);
      date.setDate(1);
      date.setHours(1);
      date.setMinutes(1);
      date.setSeconds(5);
      date.setMilliseconds(436);

      test
        .value(date.format("{Y}/{MM}/{D} {h}:{m}:{s} {ms}"))
          .is('2100/05/1 1:1:5 436')
        .value(date.format("{YY}/{M}/{D} {h}:{m}:{s} {mss}"))
          .is('00/5/1 1:1:5 0436')
        .value(date.format("{Y}/{MM}/{DD} {hh}:{mm}:{ss} {ms}"))
          .is('2100/05/01 01:01:05 436');

     })

    it("Unit Test for diferent completes values & GMT",function(){     
     
      var date = new Date();
      date.setUTCFullYear(1981);
      date.setUTCMonth(12-1);
      date.setUTCDate(11);
      date.setUTCHours(13);
      date.setUTCMinutes(54);
      date.setUTCSeconds(59);
      date.setUTCMilliseconds(899);
    
      test
        .value(date.format("{Y}/{MM}/{D} {h}:{m}:{s} {ms}", true))
          .is('1981/12/11 13:54:59 899')
        .value(date.format("{YY}/{M}/{D} {hh}:{mm}:{ss} {mss}", true))
          .is('81/12/11 13:54:59 0899')
        .value(date.format("{Y}/{MM}/{DD} {h}:{mm}:{ss} {ms}", true))
          .is('1981/12/11 13:54:59 899');
     })

    it("Unit Test for all possible datas <10 & UTC",function(){     

      var date = new Date();
      date.setUTCFullYear(2100);
      date.setUTCMonth(5-1);
      date.setUTCDate(1);
      date.setUTCHours(1);
      date.setUTCMinutes(1);
      date.setUTCSeconds(5);
      date.setUTCMilliseconds(1);

      test
        .value(date.format("{Y}/{MM}/{D} {h}:{m}:{s} {ms}", true))
          .is('2100/05/1 1:1:5 1')
        .value(date.format("{YY}/{M}/{D} {h}:{m}:{s} {mss}", true))
          .is('00/5/1 1:1:5 0001')
        .value(date.format("{Y}/{MM}/{DD} {hh}:{mm}:{ss} {ms}", true))
          .is('2100/05/01 01:01:05 1');

     })

    it("Zeros & UTC",function(){     

      var date = new Date();
      date.setUTCFullYear(2000);
      date.setUTCMonth(1-1);
      date.setUTCDate(1);
      date.setUTCHours(0);
      date.setUTCMinutes(0);
      date.setUTCSeconds(0);
      date.setUTCMilliseconds(0);

      test
        .value(date.format("{h}:{m}:{s} {ms}", true))
          .is('0:0:0 0')
        .value(date.format("{hh}:{mm}:{ss} {mss}", true))
          .is('00:00:00 0000')

     })


  })
});