//load the (in the current directory) customer_data.csv using fs module.
const csvFile = './customer_data.csv'
const csvToJson = require('csvjson')
const fs = require('fs')
const path = require('path')

//read thee file.
var data = fs.readFileSync(path.join(__dirname, csvFile), { encoding : 'utf8'})

var jsonOption = {
    delimiter : ',',
    quote     : '"'
};

var jsonData = csvToJson.toObject(data,jsonOption);
console.log(jsonData)