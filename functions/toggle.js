const request = require('request');
const secure = require('../secure.json');
const lightAccess = `http://192.168.1.8/api/${secure.lightUsername}/lights/`;

allOff = () => {
    for(let i = 1; i < 4; i++) {
        request({
            method: 'PUT',
            uri: `${lightAccess}${i}/state`,
            body: `{"on": false}`
        },() => {});
    }
}

allOn = () => {
    for(let i = 1; i < 4; i++) {
        request({
            method: 'PUT',
            uri: `${lightAccess}${i}/state`,
            body: `{"on": true}`
        },() => {});
    }
}

request({
    method: 'GET',
    uri: `${lightAccess}1`,
}, (error, body) => {
    currentStatus = JSON.parse(body.body);
    if (currentStatus.state.on) return allOff();
    return allOn();
});