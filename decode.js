"use strict";

var cipher_text;

var CipherText		= require('./lib/CipherText.js');
var cipherText;
var decrypt 		= require('./lib/decrypt.js');
var KeySet			= require('./lib/KeySet.js');
var keySet;
var plainText;
var rawKeys			= require('./lib/rawKeys.js');
var results2String	= require('./lib/results2String.js');


function decode (cipher_text) {
	var results;
	cipherText = new CipherText(cipher_text);
	keySet = new KeySet(rawKeys);
	results = decrypt(cipherText, keySet);
	return results2String(results);
}

//=============================================
// exports
//=============================================

exports = module.exports = decode;
