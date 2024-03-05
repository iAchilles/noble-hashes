const { scrypt } = require('../scrypt.js');
let start = Date.now();
scrypt('password', 'salt', { N: 2 ** 15, r: 8, p: 1, dkLen: 32 })
let end = Date.now();
console.log(end - start, 'ms');