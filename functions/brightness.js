const request = require('request');
const secure = require('../secure.json');
const lightAccess = `http://192.168.1.8/api/${secure.lightUsername}/lights/`;

var number = process.argv[2];
if(number < 0 || number > 255 || !number) return console.log("Choose a brightness between 0 and 255.");

for(let i = 1; i < 4; i++) {
    request({
        method: 'PUT',
        uri: `${lightAccess}${i}/state`,
        body: `{"bri": ${number}}`
    },() => {});
}