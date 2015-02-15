/* jslint node: true */
"use strict";

require('string.format');

Date.format = dateFormat;
Date.prototype.format = function format(pattern,utc){
  return dateFormat(this,pattern,utc);
};

function dateFormat(date,pattern,utc){
  var d;
  if(utc){
    d = {
      Y: date.getUTCFullYear(),
      M: date.getUTCMonth(),
      D: date.getUTCDate(),
      h: date.getUTCHours(),
      m: date.getUTCMinutes(),
      s: date.getUTCSeconds(),
      ms: date.getUTCMilliseconds()
    };
  } else {
    d = {
      Y: date.getFullYear(),
      M: date.getMonth(),
      D: date.getDate(),
      h: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds(),
      ms: date.getMilliseconds()
    };
  }
  d.YY = d.Y.toString();
  d.MM = d.M.toString();
  d.DD = d.D.toString();
  d.hh = d.h.toString();
  d.mm = d.m.toString();
  d.ss = d.s.toString();
  d.mss = d.ms.toString();

  if(d.MM<10){d.MM='0'+d.MM;}
  if(d.DD<10){d.DD='0'+d.DD;}
  if(d.hh<10){d.hh='0'+d.hh;}
  if(d.mm<10){d.mm='0'+d.mm;}
  if(d.ss<10){d.ss='0'+d.ss;}
  while(d.mss.length<4){d.mss='0'+d.mss;}
  
  return pattern.format(d);
}

/* -------------------------------- */

var date = new Date();
console.log(date.format("Local: Day {Y}/{M}/{D} at {h}:{m}:{s} and {ms}ms"));
console.log(date.format("Local: Day {YY}/{MM}/{DD} at {hh}:{mm}:{ss} and {mss}ms"));
console.log(date.format("UTC: Day {Y}/{M}/{D} at {h}:{m}:{s} and {ms}ms",true));
console.log(date.format("UTC: Day {YY}/{MM}/{DD} at {hh}:{mm}:{ss} and {mss}ms",true));


/* -------------------------------- */