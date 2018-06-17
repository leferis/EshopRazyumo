//register////////////////////////////////////////////////////////////////////
function Login()
{
	var username = document.getElementById("exampleInputUsername").value;
	var password = document.getElementById("exampleInputPassword1").value;
}


function PostStatusMsg() {
	var xmlhttp = new XMLHttpRequest();
	var user = {
    username : "",
    password : ""
	};
	user.username = document.getElementById("exampleInputUsername").value;
	user.password = document.getElementById("exampleInputPassword1").value;
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 201) {
			var myObj = JSON.parse(this.responseText);
			console.log(document.cookie);
			if(this.responseText != "[]")
			{

			}
	   	}
	};
	xmlhttp.open("POST", "http://localhost:8000/users", true);
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	var body = JSON.stringify(user);
	xmlhttp.send(body);
}
//register////////////////////////////////////////////////////////////

////login//////////////////////////////////////////////
function getLogin() {
	var xmlhttp = new XMLHttpRequest();
	var username = document.getElementById("exampleInputUsername2").value
	var password = document.getElementById("exampleInputPassword2").value
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myObj = JSON.parse(this.responseText);
			console.log(myObj[0].ID);
	   		if(this.responseText != "[]")
	   		{
	   			document.cookie =  myObj[0].ID +  ";" + "path=/";
	   			var x = document.cookie;
	   			// console.log(myObj[0].ID);
	   			//console.log('cookie - ' + x);
	   			window.location.href="store.html";
	   			// myFunction();

	   			// bake_cookie("user", this.responseText);
	   			// var mydata = JSON.parse(read_cookie("user"));
	   			// document.cookie = this.responseText + ";" + "path=/";
	   			// console.log(document.cookie);
	   			// console.log(mydata[0].email);	
	   		}
   		}
	};
	xmlhttp.open("GET", "http://localhost:8000/users/" + username + "/" + password, true);
	xmlhttp.send();


}
//login//////////////////////////////////////////////////////////////////////

