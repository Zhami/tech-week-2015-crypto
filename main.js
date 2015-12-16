"use strict";

var fs				= require('fs');
var path			= require('path');

var cipherFile;
var cipher_text;

var CipherText		= require('./lib/CipherText.js');
var cipherText;
var decrypt 		= require('./lib/decrypt.js');
var KeySet			= require('./lib/KeySet.js');
var keySet;
var plainText;
var rawKeys			= require('./lib/rawKeys.js');
var results2String	= require('./lib/results2String.js');
var results;

cipherFile = path.resolve(__dirname, './cipher.txt');
cipher_text = fs.readFileSync(cipherFile, 'utf8');

cipherText = new CipherText(cipher_text);

keySet = new KeySet(rawKeys);

results = decrypt(cipherText, keySet);

console.log(results2String(results));
