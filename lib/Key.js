"use strict";

var Key;

//=============================================
// Constructor
//=============================================

Key = function (rawKeyString) {
	
	if (!(this instanceof Key)) {
		return new Key(rawKeyString);
	}

	this.rawKeyString	= rawKeyString;
	this.values			= [];
	this.numValues		= 0;
//	this.buffers		= [];

	this.index			= 0;

	this._init(rawKeyString);
};

//=============================================
// Methods - public
//=============================================
Key.prototype.getNextValue = function () {
	var	index		= this.index;
	var value;

	value = this.values[index];

	index += 1;
	if (index >= this.numValues) {
		index = 0;
	}
	this.index = index;

	return value;
};

Key.prototype.reset = function () {
	this.index = 0;
};


//=============================================
// Methods - private
//=============================================
Key.prototype._init = function (rawKeyString) {
	var buff;
	var byteAsString;
	var bytesAsStrings;
	var value;
	var values				= this.values;

	bytesAsStrings = rawKeyString.split(':');

	while ( byteAsString = bytesAsStrings.pop() ) {
		value = parseInt('0x' + byteAsString, 16);
		values.unshift(value);
	}

	this.numValues = values.length;
};

//=============================================
// exports
//=============================================

exports = module.exports = Key;