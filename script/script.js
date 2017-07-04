// opens sidenav
function openNav(){
  document.getElementById("mySidenav").style.width="100%";
}
// hides the sidenav
function closeNav(){
  document.getElementById("mySidenav").style.width="0";
}
//alert pops up if the client does not fill in the proper fields
function validateForm(){
	
	var fname = document.forms["myForm"]["fullName"].value;
	var email = document.forms["myForm"]["email"].value;
	var msg = document.forms["myForm"]["message"].value;

	if (fname === "" || email === "" || msg ===""){
		document.getElementById('fullName').style.border = "1px #AAF200 solid";
		document.getElementById('email').style.border = "1px #AAF200 solid";
		document.getElementById('message').style.border = "1px #AAF200 solid";
		alert("Please fill in all required fields");
		return false;
	}
}