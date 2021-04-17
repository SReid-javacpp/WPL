window.onload = function(){

    //there will be one span element for each input field
    // when the page is loaded, we create them and append them to corresponding input element 
	// they are initially empty and hidden

    var spanemail = document.createElement("span");
	spanemail.style.display = "none"; //hide the span element
	
	var email = document.getElementById("email");
    email.parentNode.appendChild(spanemail);
	
    var spanpwd = document.createElement("span");
	spanpwd.style.display = "none"; //hide the span element
	
	var pwd = document.getElementById("pwd");
    pwd.parentNode.appendChild(spanpwd);
	
	var spanconfirm = document.createElement("span");
	spanconfirm.style.display = "none"; //hide the span element
	
	var confirm = document.getElementById("confirm");
    confirm.parentNode.appendChild(spanconfirm);
	

    email.onfocus = function(){
		spanemail.style.display = "block";
        //spanemail.className = "info";
        spanemail.textContent = "The email field should be a valid email address abc@def.xyz";
    }

    email.onblur = function(){
		spanemail.style.display = "none";
		email.classList.remove('error');
    }
    
	pwd.onfocus = function(){
		spanpwd.style.display = "block";
        //spanpwd.className = "info";
        spanpwd.textContent = "Password should include atleast six characters.";
		
    }

    pwd.onblur = function(){
		spanpwd.style.display = "none";
		pwd.classList.remove('error');
    }
	
	confirm.onfocus = function(){
		spanconfirm.style.display = "block";
        //spanconfirm.className = "info";
        spanconfirm.textContent = "Password should include atleast six characters.";
		pwd.classList.remove('error');
    }

    confirm.onblur = function(){
		spanconfirm.style.display = "none";
		confirm.classList.remove('error');
		pwd.classList.remove('error');
    }
 
 
 
	document.getElementById("myForm").addEventListener('submit', function(event) {
        event.preventDefault();
        test(email, pwd, confirm, spanemail, spanpwd, spanconfirm);
    }, false);
	
}


function test(email, pwd, confirm, spanemail, spanpwd, spanconfirm){
	var x = true;
	console.log("submit event started");
	
    
	const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if (regex.test(email.value)) {
		console.log("email clears");
		
	}
	else {
		spanemail.style.display = "block";
		email.classList.add('error');
		spanemail.textContent = "The email field should be a valid email address abc@def.xyz";
		x = false;
	}
	//spanemail.style.display = 'block';
	
	
	
	console.log("one");
	if (pwd.value.length >= 6) {
		console.log("pwd clears");
	}
	else {
		spanpwd.style.display = "block";
		pwd.classList.add('error')
		spanpwd.textContent = "Password must be at least six characters";
		x = false;
	}
	//spanpwd.style.display = 'block';
	
		
	if (confirm.value.length >= 6) {
		console.log("confirms clears");

	}
	else {
		spanconfirm.style.display = "block";
		pwd.classList.add('error')
		confirm.classList.add('error')
		spanconfirm.textContent = "Passwords must match";
		x = false;
	}
	
	
	
	
		//spanconfirm.style.display = 'block';*/
	return x;
}
