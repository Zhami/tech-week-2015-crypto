"use strict";

var CipherText;

//=============================================
// Constructor
//=============================================

CipherText = function (rawString) {
	
	if (!(this instanceof CipherText)) {
		return new CipherText(rawString);
	}

	this.rawString		= rawString;
	this.values			= [];
	this.numValues		= 0;

	this.index			= 0;

	this._init(rawString);
};

//=============================================
// Methods - public
//=============================================
CipherText.prototype.getChunk = function (index) {
	var startIndex = index * 8;
	return this.values.slice(startIndex, startIndex + 8);
};

CipherText.prototype.getNumChunks = function () {
	return this.numValues / 8;
};

CipherText.prototype.getNextValue = function () {
	var value;

	if (this.index < this.numValues) {
		value = this.values[this.index];
		this.index += 1;
	}

	return value;
};

//=============================================
// Methods - private
//=============================================
CipherText.prototype._init = function (rawString) {
	var twoChars;
	var i;
	var rawStringLength		= rawString.length;
	var value;
	var values				= this.values;

	for (i = 0; i < rawStringLength; i += 2) {
		twoChars = rawString.substr(i, 2);
		value = parseInt('0x' + twoChars, 16);
		values.push(value);
	}
	this.numValues = values.length;
};

//=============================================
// exports
//=============================================

exports = module.exports = CipherText;