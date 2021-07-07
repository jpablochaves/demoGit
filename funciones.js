function login_user() {
	var username = document.getElementById("username").value; 
  	var passwd = document.getElementById("password").value;
	if( username == "prueba" && passwd == "prueba"){
		window.location = "index.html?red=1&usr="+username;		
	}else{		
		window.location = "index.html?red=0&usr="+username;
	}  
}


function get_redirect(){
	const queryString = window.location.search;
	const parameters = new URLSearchParams(queryString);
	redirect_value = parameters.get('red');
	user_value = parameters.get('usr');
	if (redirect_value != null && user_value != null){
		if(redirect_value == 0){
			document.getElementById("msj_error").innerHTML = "El usuario "+user_value+" no se encuentra autorizado";		
		}else{
		/*	document.getElementById("msj_error").innerHTML = ""; */
			window.location = 'welcome.html?user='+user_value;
		}
	}else{
		document.getElementById("msj_error").innerHTML = "";
	}
}