# Date.format [![npm version](https://img.shields.io/npm/v/date.format.svg)](https://www.npmjs.com/package/date.format) [![npm downloads](https://img.shields.io/npm/dm/date.format.svg)](https://www.npmjs.com/package/date.format) [![Build Status](https://img.shields.io/travis/bifuer/Date.format/master.svg)](https://travis-ci.org/bifuer/Date.format) [![Github release](https://img.shields.io/github/release/bifuer/Date.format.svg)](https://github.com/bifuer/Date.format)


Añade a [Date.prototype de JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) el método `.format()`, permitiendo formatear el objeto date de una forma legible. 
Especificamos al método el formato en el que devolverá el objeto date.
[npm](https://www.npmjs.com/package/date.format)

```javascript
Date.prototype.format( stringDate [, booleanUTC]);
````
+ stringDate: string con el formato de sustitución de [String.format](#https://github.com/bifuer/String.format)
+ booleanUTC: boolean. true si el date es UTC. False para GMT.


```javascript
require('date.format');

var date = new Date();
console.log(date.format("Local: Day {Y}/{M}/{D} at {h}:{m}:{s} and {ms}ms"));
console.log(date.format("Local: Day {YY}/{MM}/{DD} at {hh}:{mm}:{ss} and {mss}ms"));
console.log(date.format("UTC: Day {Y}/{M}/{D} at {h}:{m}:{s} and {ms}ms",true));
console.log(date.format("UTC: Day {YY}/{MM}/{DD} at {hh}:{mm}:{ss} and {mss}ms",true));

/*

>> Local: Day 2015/1/5 at 20:44:58 and 803ms
>> Local: Day 15/01/05 at 20:44:58 and 0803ms
>> UTC: Day 2015/1/5 at 19:44:58 and 803ms
>> UTC: Day 15/01/15 at 19:44:58 and 0803ms

*/
```
+ **Y** y **YYYY**: Año completo. **YY** Año 2 dígitos, 00-99
+ **M**: Mes sin ceros iniciales 1-12. **MM** Mes en 2 dígitos. 
+ **D**: Día sin ceros iniciales 1-31. **DD** Día en 2 dígitos.
+ **h**: hora sin ceros iniciales 0-23. **hh** hora en 2 dígitos.
+ **m**: minutos sin ceros iniciales 0-59. **mm** minutos en 2 dígitos.
+ **s**: segundos sin ceros iniciales 0-59. **ss** segundos en 2 dígitos.
+ **ms**: milisegundos sin ceros iniciales 0-999. **mss** milisegundos 4 dígitos. 


##Licence
MIT
