"use strict";

function results2String (results) {
	var charArray		= [];
	var i;
	var j;
	var numValues;
	var numResultSets	= results.length;
	var result;
	var value;

	for (i = 0; i < numResultSets; i += 1) {
		result = results[i];
		numValues = result.length;
		for (j = 0; j < numValues; j += 1) {
			value = result[j];
			charArray.push(String.fromCharCode(value));
		}
	}

	return charArray.join('');
}



//=============================================
// exports
//=============================================

exports = module.exports = results2String;