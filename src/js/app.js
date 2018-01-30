require('../css/style.css');
const $ = require('jquery');

let ppl = require('./people.js');

ppl.forEach(p => {
	$('#people-list').append(`<li>${p.name}</li>`);
});