const FILE_PATH = 'input.txt';
let array_of_totals = [];

async function read_file(the_file_path) {
	/**
	 * Read the contents of the input file using the fetch API.
	 */
	let response = await fetch(the_file_path);
	let data = await response.text();
	return data;
}

async function advent_of_code() {
	/**
	 * Main function used to answer the quesiton.
	 */
	let input = await read_file(FILE_PATH);
	let input_array = input.split('\n\n');
	let output_array = [];

	// Split each set of numbers into it's own array item.
	input_array.forEach((item) => {
		output_array.push(item.split('\n'));
	});

	// Parse the array line by line, determining the sum of each array item, and store it in a new array.
	output_array.forEach((sub_array) => {
		let total = 0;
		sub_array.forEach((array_item) => {
			total += parseInt(array_item);
		});
		array_of_totals.push(total);
		total = 0;
	});

	show_answer(
		'Largest: ' +
			find_the_largest(array_of_totals) +
			'<br>' +
			'Sum of Top 3: ' +
			find_the_three_largest()
	);
}

function show_answer(output) {
	/**
	 * Helper function to output the answer in the output paragraph element.
	 */
	document.getElementById('output').innerHTML = output;
}

function find_the_largest(array) {
	/**
	 * Find the largest number in an array.
	 */
	let largest = 0;
	array.forEach((current_number) => {
		if (current_number > largest) {
			largest = current_number;
		}
	});
	return largest;
}

function find_the_three_largest() {
	/**
	 * Find the sum of the three largest numbers in an array.
	 */
	let three_largest = [];
	let sum_of_top_three = 0;

	array_of_totals.sort().reverse();
	three_largest.push(
		array_of_totals[0],
		array_of_totals[1],
		array_of_totals[2]
	);

	three_largest.forEach((number) => {
		sum_of_top_three += number;
	});

	return sum_of_top_three;
}
