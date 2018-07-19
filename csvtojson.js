var fs = require('fs');

// Read CSV
var f = fs.readFileSync('test.csv', {encoding: 'utf-8'},  (err) => console.log(err));

// Split on row
f = f.split("\n");

// Get first row for column headers
headers = f.shift().split(",");

var json = [];    
f.forEach((d) => {
    // Loop through each row
    tmp = {}
    row = d.split(",")
    for(var i = 0; i < headers.length; i++){
        tmp[headers[i]] = row[i];
    }
    // Add object to list
    json.push(tmp);
});
var JSONData = JSON.stringify(json).replace(/\\r/g, '');

// Convert object to string, write json to file
fs.writeFileSync('result.json', JSONData, 'utf8', (err) => console.log(err));