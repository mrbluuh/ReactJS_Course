var map = require("lodash/fp/map");
var filter = require("lodash/fp/filter");
var values = require("lodash/fp/values");


const a = [1, 3, 4, 6, 12, 15, 23, 20];

const b = ['a', 'once a time', 'machine learning', 'beer', 'bear', 'beat'];

const c = [ { key: 'abc' }, { key: 1.2 }, { key: false }, { key: null }, { key: undefined }, { key: '' } ];


const oddnumber = filter(numbers => numbers%2 )(a);
const multiplynumber = map(numbers => numbers * 2)(a);
const include_be = filter(array => array.includes('be'))(b);
const nullvalues = filter(nvalues => nvalues.key==false)(c);



console.log(oddnumber);console.log(multiplynumber);console.log(include_be);console.log(nullvalues);