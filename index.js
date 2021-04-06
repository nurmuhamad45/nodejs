const http = require('http');
const moment = require('moment');

const { listeners } = require('process');
const server = http.createServer((rew, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Pemograman Web Lanjut Pertemuan 02');
    res.write(moment().calendar());
    res.end();
}).listen(3000)