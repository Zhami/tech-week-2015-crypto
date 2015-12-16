"use strict";

var fs				= require('fs');
var path			= require('path');

var cipherFile;
var cipher_text;

var decode 			= require('./decode.js');

cipherFile = path.resolve(__dirname, './cipher.txt');

cipher_text = fs.readFileSync(cipherFile, 'utf8');

console.log(decode(cipher_text));
