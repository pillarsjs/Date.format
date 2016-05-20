# Date.format
![license](https://img.shields.io/badge/license-MIT-blue.svg ) [![Build Status](https://img.shields.io/travis/pillarsjs/Date.format/master.svg)](https://travis-ci.org/pillarsjs/Date.format) [![npm version](https://img.shields.io/npm/v/date.format.svg)](https://www.npmjs.com/package/date.format) [![Github release](https://img.shields.io/github/release/bifuer/Date.format.svg)](https://github.com/pillarsjs/Date.format) [![npm downloads](https://img.shields.io/npm/dm/date.format.svg)](https://www.npmjs.com/package/date.format)

Languages:[[EN](#),[ES](#dateformat-es)]

Add to [JS Date.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) `.format()` method, allow format the object date in a readable form.  
Call to method with the pattern you want and will return it formated.

> Date.format is based on [String.format](https://github.com/pillarsjs/String.format) > "Hello {name}!".format({name:"Homer"});

[npm](https://www.npmjs.com/package/date.format)

```javascript
Date.prototype.format( pattern [, UTC]);
````
+ **pattern** *(string)*: Pattern  to fomat the date. Values of the date are enclosed in braces: {M}, {D}, etc. See below reference.
+ **UTC** *(boolean)*: true if UTC. False to GMT.
+ return a formated String.


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
+ **Y** or **YYYY**: Year with four digits. **YY** Year 2 digits, 00-99
+ **M**: Month without leading zeros 1-12. **MM** Month 2 digits. 
+ **D**: Day without leading zeros 1-31. **DD** Day 2 digits.
+ **h**: hour without leading zeros 0-23. **hh** hour 2 digits.
+ **m**: minutes without leading zeros 0-59. **mm** minutes 2 digits.
+ **s**: seconds without leading zeros 0-59. **ss** seconds 2 digits.
+ **ms**: milliseconds without leading zeros 0-999. **mss** milliseconds 4 digits.

NEW:

+ **tz**: Timezone difference between UTC and Local Time in minutes
+ **tzh**: Timezone difference between UTC and Local Time in hours

## Licence
MIT

---

## Date.format (es)

Añade a [Date.prototype de JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) el método `.format()`, permitiendo formatear el objeto date de una forma legible. 
Especificamos al método el formato en el que devolverá el objeto date.

> Date.format utiliza [String.format](https://github.com/pillarsjs/String.format) > "Hello {name}!".format({name:"Homer"});

[npm](https://www.npmjs.com/package/date.format)

```javascript
Date.prototype.format( pattern [, UTC]);
````
+ **pattern** *(string)*: patrón con el formato de sustitución de [String.format](#https://github.com/pillarsjs/String.format)
+ **UTC** *(boolean)*: true si el date es UTC. False para GMT.


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

NEW:

+ **tz**: Diferencia de la zona horaria con respecto a UTC en minutos
+ **tzh**: Diferencia de la zona horaria con respecto a UTC en horas

## Licencia
MIT
