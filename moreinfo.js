/////////////////////////////POST MORE INFO//////////////////////////////////////////
function PostInfo() {
	var xmlhttp = new XMLHttpRequest();
	var userinformation = {
	guid : "",
    firstname : "",
    lastname : "",
    address : "",
    postalcode : ""
	};
	//userinformation.guid = document.getElementById("exampleInputGUID").value;
	console.log('sausainis  ' + document.cookie);
	userinformation.guid = document.cookie;
	userinformation.firstname = document.getElementById("exampleInputFirstName").value;
	userinformation.lastname = document.getElementById("exampleInputLastName").value;
	userinformation.address = document.getElementById("exampleInputAddress").value;
	userinformation.postalcode = document.getElementById("exampleInputPostalCode").value;

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 201) {
			var myObj = JSON.parse(this.responseText);
			console.log(document.cookie);
			if(this.responseText != "[]")
			{

			}
	   	}
	};
	xmlhttp.open("POST", "http://localhost:8000/userinformation", true);
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	var body = JSON.stringify(userinformation);
	xmlhttp.send(body);
}
