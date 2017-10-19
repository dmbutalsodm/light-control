const request = require('request');
const secure = require('../secure.json');
const lightAccess = `http://192.168.1.8/api/${secure.lightUsername}/lights/`;

for(let i = 1; i < 4; i++) {
    request({
        method: 'PUT',
        uri: `${lightAccess}${i}/state`,
        body: `{"sat": 254, "bri":254,"hue": 32569}`
    },() => {});
}