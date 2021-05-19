let year_id = "";
let course_id = "";
let subject_id = "";
let class_id = "";

function handleChange(id) {
	let element = document.getElementById(id);

	switch (id) {
		case "year":
			year_id = element.value;
			break;
		case "course":
			course_id = element.value;
			break;
		case "subject":
			subject_id = element.value;
			break;
		case "class_id":
			class_id = element.value;
			break;
		default:
			break;
	}
}

function handleSearch() {

	if (year_id && course_id && subject_id && class_id ) {
		console.log(year_id, course_id, subject_id, class_id);
	} else {
		alert('Địt con mẹ, select hết vào!');
	}
}