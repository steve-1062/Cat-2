$(document).ready(function()
{
	$("#submit").hide();
$("#name").keyup(function()
{
if(validatename())
{
	 $("#name").css("border","4px solid green");
	 $("#messagename").html("<p class='text-success'>VALIDATED</p>")
}
else
{
	$("#name").css("border","4px solid red");
	$('#messagename').html("<p class='text-danger'>INCORRECT NAME</p>");
}
 buttonState();
});
$("#address").keyup(function()
{
	if(validateadd())
	{
$("#address").css("border","4px solid green");
$("#messageadd").html("<p class='text-success'>VALIDATED</p>")
}
else
{
	$("#address").css("border","4px solid red");
	$("#messageadd").html("<p class='text-danger'>INVALID ADDRESS</p>")
}
buttonstate();
}); 

$("#email").keyup(function()
{
	if(validateemail())
	{
$("#email").css("border","4px solid green");
$("#messageemail").html("<p class='text-success'>VALIDATED</p>")
}
else
{
	$("#email").css("border","4px solid red");
	$("#messageemail").html("<p class='text-danger'>INVALID EMAIL</p>")
}
buttonstate();
});

$("#phone").keyup(function()
{
	if(validatephone())
	{
$("#phone").css("border","4px solid green");
$("#messagephone").html("<p class='text-success'>VALIDATED</p>")
}
else
{
	$("#phone").css("border","4px solid red");
	$("#messagephone").html("<p class='text-danger'>INVALID PHONE NO</p>")
}
buttonstate();
});

$("#password").keyup(function()
{
	if(validatepass())
	{
$("#password").css("border","4px solid green");
$("#messagepass").html("<p class='text-success'>STRONG PASSWORD</p>")
}

else
{
	$("#password").css("border","4px solid red");
	$("#messagepass").html("<p class='text-danger'>INCORRECT PASSWORD</p>")
}
buttonstate();
});

$("#user").keyup(function()
{
	if(username())
	{
$("#user").css("border","4px solid green");
$("#messageuser").html("<p class='text-success'>VALIDATED</p>")
}
else
{
	$("#user").css("border","4px solid red");
	$("#messageuser").html("<p class='text-danger'>INVALID</p>")
}
buttonstate();
});
$("#age").keyup(function()
{
	if(validateage())
	{
$("#age").css("border","4px solid green");
$("#messageage").html("<p class='text-success'>VALIDATED</p>")
}
else
{
	$("#age").css("border","4px solid red");
	$("#messageage").html("<p class='text-danger'>INVALID</p>")
}
buttonstate();
});
buttonstate();
});



function buttonstate()
{ $("#submit").hide();

	if (validatename()  && validateemail() && validatephone() &&validateage() && username() && validatepass() ) {
		$("#submit").show();
	}
	else
	{
		$("#submit").hide();
	}
}
//+/s+[a-zA-Z]{5,20}
function validatename()
{
	var name=$("#name").val();
	var reg=/^([a-zA-Z]{3,20}) ([a-zA-Z]{2,20})+(\s*)$/;
	if(reg.test(name)){
             return true;
         }else{
             return false;
         }
}
//   /^[1-9]?[0-9]{1}$|^100$/
//+/s+[a-zA-Z]{5,20}
function validatephone()
{
	var phone=$("#phone").val();
	var p=/^[6789]{1}[0-9]{9}$/;
	if(p.test(phone)){
             return true;
         }
         else{
             return false;
         }
}
function validateage()
{

	var age=$("#age").val();
	
	var p1=/^[1-9]?[0-9]{1}$|^100$/;
	if(p1.test(age)){
             return true;
         }
         else{
             return false;
         }
}
function validateemail()
{
	var users=$("#user").val();
	var email=$("#email").val();
	var reg3=/^([a-zA-z0-9.]{4,20})@(c|C)hristuniversity.in$/;
	//var reg3=/^users@(c|C)hristuniversity.in$/;
	var match=/^.*(?=@christuniversity.in)$/;
	if(reg3.test(email))
	{
		return true;
	}
	else if(!match.test(users))
	{
     return false;
	}
	else
	{
		return false;
	}

}



function validatepass()
{
	//special charcter between characters 
	//(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-z][!@#$%^&*?][a-zA-z])(?=.*[~`!@#$%^&*()-_+={}[|\;:"<\]\>,./?])[a-zA-z0-9~`!@#$%^&*()-_+={}[|\;:"<\]\>,./?]{8,20}
	var pass=$("#password").val();
	var strong=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*()-_+={}[|\;:"<\]\>,./?])[a-zA-z0-9~`!@#$%^&*()_+={}[|\;:"<\]\>,./?]{8,20}$/;
	if(strong.test(pass))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function username()
{
	//special charcter between characters 
	//(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-z][!@#$%^&*?][a-zA-z])(?=.*[~`!@#$%^&*()-_+={}[|\;:"<\]\>,./?])[a-zA-z0-9~`!@#$%^&*()-_+={}[|\;:"<\]\>,./?]{8,20}
	var users=$("#user").val();
		var val=/^[A-Z]{1}[a-zA-Z]{4,}$/;
	if(val.test(users))
	{
		return true;
	}
	else
	{
		return false;
	}
}

$(document).ready(function(){
  $("#user").keypress(function(e){
     var keyCode = e.which;
    /*
      48-57 - (0-9)Numbers
    */
 
    if ( !(keyCode <= 48 || keyCode >= 57)) { 
      return false;
    }
  });
});