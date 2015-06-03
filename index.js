/* jslint node: true */
"use strict";

global.modulesCache = global.modulesCache || {};
if(global.modulesCache['date.format']){
  return;
} else {
  global.modulesCache['date.format'] = true;
}

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
      M: date.getUTCMonth() + 1,
      D: date.getUTCDate(),
      h: date.getUTCHours(),
      m: date.getUTCMinutes(),
      s: date.getUTCSeconds(),
      ms: date.getUTCMilliseconds(),
      tz: 0,
      tzh: 0
    };
  } else {
    d = {
      Y: date.getFullYear(),
      M: date.getMonth() + 1,
      D: date.getDate(),
      h: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds(),
      ms: date.getMilliseconds(),
      tz: date.getTimezoneOffset(),
      tzh: date.getTimezoneOffset() / 60
    };
  }

  d.YYYY = d.Y.toString();
  d.YY = d.Y.toString().slice(2);
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