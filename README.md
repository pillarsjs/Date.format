# Date.format
Añade a [Date.prototype de JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) el método `.format()`, permitiendo formatear el objeto date de una forma legible. 
Especificamos al método el formato en el que devolverá el objeto date.
[npm](https://www.npmjs.com/package/date.format)


```javascript
require('date.format');

var date = new Date();
console.log(date.format("Local: Day {Y}/{M}/{D} at {h}:{m}:{s} and {ms}ms"));
console.log(date.format("Local: Day {YY}/{MM}/{DD} at {hh}:{mm}:{ss} and {mss}ms"));
console.log(date.format("UTC: Day {Y}/{M}/{D} at {h}:{m}:{s} and {ms}ms",true));
console.log(date.format("UTC: Day {YY}/{MM}/{DD} at {hh}:{mm}:{ss} and {mss}ms",true));

/*

>> Local: Day 2015/1/15 at 20:44:58 and 803ms
>> Local: Day 2015/01/15 at 20:44:58 and 0803ms
>> UTC: Day 2015/1/15 at 19:44:58 and 803ms
>> UTC: Day 2015/01/15 at 19:44:58 and 0803ms

*/
```
+ **Y**: Año
+ **M**: Mes 
+ **D**: Día
+ **h**: hora
+ **m**: minuto
+ **s**: segundo
+ **ms**: milisegundo

##Example
+ [jsfiddle.net](#)


##Licence
MIT
