var fs = require('fs');
var jf = require('jsonfile')

var jsonfile = 'data1.json';

var data = JSON.parse(fs.readFileSync(jsonfile, 'utf8'));

var outputData = [],
    keys = [];

keys = Object.keys(data);

// loop over the keys array
var i = keys.length;

// while i is greater than zero
// decrement i by 1, then
// run the code in the loop
// 0 is falsy, so the loop no longer run
// when i == 0
while(i--){
  var key = keys[i];
  outputData[i] = data[key]
  outputData[i]['DAY'] = key
  delete outputData[i]['totalCount']
}


var outputJsonObj = outputData;

var outputFile = '001.json'
jf.writeFile(outputFile, outputJsonObj, function(err){
  console.log(err)
})
