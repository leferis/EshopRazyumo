function getLogin() {
	var xmlhttp = new XMLHttpRequest();
	var username = document.getElementById("usernameInput").value
	var password = document.getElementById("exampleInputPassword1").value
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myObj = JSON.parse(this.responseText);
			console.log(myObj[0].id);
	   		if(this.responseText != "[]")
	   		{
	   			document.cookie =  myObj[0].id +  ";" + "path=/";
	   			var x = document.cookie;
	   			console.log(x);
	   			myFunction();
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
function myFunction() {
	window.location='mainpage.html';
}
function PostStatusMsg() {
	var xmlhttp = new XMLHttpRequest();
	var user = {
    username : "",
    email : "",
    password : "",
    database : "youplaydb"
	};
	user.username = document.getElementById("usernameInputReg").value;
	user.email = document.getElementById("InputEmail1").value;
	user.password = document.getElementById("InputPasswordReg").value;
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 201) {
			var myObj = JSON.parse(this.responseText);
			console.log(document.cookie);
			if(this.responseText != "[]")
			{
				document.getElementById("succesmsg").value = "Succes, you can log in now";
			}
	   	}
	};
	xmlhttp.open("POST", "http://localhost:8000/users", true);
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	var body = JSON.stringify(user);
	xmlhttp.send(body);
}
function bake_cookie(name, value) {
  var cookie = [name, '=', JSON.stringify(value), '; domain=.', window.location.host.toString(), '; path=/;'].join('');
  document.cookie = cookie;
}
function read_cookie(name) {
 var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
 result && (result = JSON.parse(result[1]));
 return result;
}