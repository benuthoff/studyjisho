// Study-Jisho

var dictionary = { // Default value if unable to load...
	title: "Study-Jisho Dictionary",
	version: -1,
	data: [],
	columns: []
}

function writeTable() {
	$('#dictionary_table').empty()
	for (let i=0; i<dictionary.data.length; i++) {
		let tr = $('<tr></tr>');
		let word = dictionary.data[i];
		let keys = Object.keys(word);
		for (let j=0; j<keys.length; j++) {
			tr.append( $('<td></td>').text(word[keys[j]]) );
		}
		$('#dictionary_table').append( tr );
	}
};

$.getJSON('./dictionary.json', function(data) {
	dictionary = data;
	writeTable();
});

$('document').keypress((event)=>{
	if (event.which == 47) {
		$('#searchbar').focus();
	}
});