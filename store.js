function getProducts() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myObj = JSON.parse(this.responseText);
	   		if(this.responseText != "[]")
	   		{
	   			//document.getElementById("profileimage").src = myObj.picPath;

	   			
	   			console.log(myObj[0].Image);
	   			document.getElementById("profileimage").src = "http://127.0.0.1:8081/api/images/" + myObj[0].Image;
	   			//document.getElementById("displayName").innerHTML = "Login: " + myObj[0].username;
	   			//document.getElementById("displayEmail").innerHTML = "Email: " + myObj[0].email;
	   			//document.getElementById("ProfileButton").innerHTML = myObj[0].username;
	   			// document.getElementById("exampleInputUsername").src = myObj.username;
	   			// document.getElementById("exampleInputEmail1").src = myObj.email;
	   			// document.getElementById("exampleInputPassword1").src = myObj.password;
	   		}
   		}
	};
	xmlhttp.open("GET", "http://localhost:8000/products" , true);
	xmlhttp.send();
}



