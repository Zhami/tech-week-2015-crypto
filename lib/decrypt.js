"use strict";

var cipher			= require('./cipher.js');

function makeIndexSet (n) {
	var i;
	var indexSet = [];

	for (i = 0; i < n; i += 1) {
		indexSet.push(i);
	}
	return indexSet;
}

function isAscii (values) {
	var i;
	var numValues	= values.length;
	var value;

	for (i = 0; i < numValues; i += 1) {
		value = values[i];
		if (!((value >= 32) && (value <=126))) {
			return false;
		}
	}
	return true;
}


function decrypt (cipherText, keySet) {
	var cipherChunk;
	var i;
	var j;
	var index;
	var indexSet;
	var key;
	var keyValue;
	var numCipherChunks;
	var numIndices;
	var plaintText;
	var results;

	results = [];

	indexSet = makeIndexSet(keySet.getNumKeys());

	numCipherChunks = cipherText.getNumChunks();
	for (i = 0; i < numCipherChunks; i += 1) {
		cipherChunk = cipherText.getChunk(i);
		numIndices = indexSet.length;
		for (j = 0; j < numIndices; j += 1) {
			index = indexSet[j];
			key = keySet.getKey(index);
			plaintText = cipher(cipherChunk, key);
			if (isAscii(plaintText)) {
				results.push(plaintText);
				indexSet.splice(indexSet.indexOf(index), 1);
				break;
			}
		}
	}

	return results;
}



//=============================================
// exports
//=============================================

exports = module.exports = decrypt;