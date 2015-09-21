var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./src/starwars-names.json');

module.exports = {
	all: starWarsNames,
	random: uniqueRandomArray(starWarsNames)
};