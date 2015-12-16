"use strict";

function cipher (cipherValues, key) {
	var cipherValues;
	var i;
	var keyValue;
	var numCipherValues	= cipherValues.length;
	var result			= [];
	var value;

	key.reset();

	for (i = 0; i < numCipherValues; i += 1) {
		value = cipherValues[i];
		keyValue = key.getNextValue();
		result.push(value ^ keyValue);
	}

	return result;
}



//=============================================
// exports
//=============================================

exports = module.exports = cipher;