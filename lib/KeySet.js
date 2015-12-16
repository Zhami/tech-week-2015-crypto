"use strict";

var Key				= require('./Key.js');
var KeySet;

//=============================================
// Constructor
//=============================================

KeySet = function (rawKeys) {
	
	if (!(this instanceof KeySet)) {
		return new KeySet(rawKeys);
	}

	this.keys			= [];
	this.numKeys		= 0;

	this._init(rawKeys);
};

//=============================================
// Methods - public
//=============================================
KeySet.prototype.getKey = function (index) {
	return this.keys[index];
};

KeySet.prototype.getNumKeys = function () {
	return this.numKeys;
};
//=============================================
// Methods - private
//=============================================
KeySet.prototype._init = function (rawKeys) {
	var i;
	var key;
	var	keys		= this.keys;
	var keyString;
	var numRawKeys	= rawKeys.length;

	for (i = 0; i < numRawKeys; i += 1) {
		keys[i] = new Key(rawKeys[i]);
	}

	this.numKeys = keys.length;
};

//=============================================
// exports
//=============================================

exports = module.exports = KeySet;