const validate= ()=>{
    
    let name= document.forms[myform][name];
    let email= document.forms[myform][e-mail] 
    let title= document.forms[myform][title];
    let message= document.form[myform][message];
     if(name.value ==""|| name.value.indexOf <4){
         window.alert("field must be filled and contain more than 4 characters");
         name.focus();
         return false;
     }
     else if(email.value == "")                                   
     { 
         window.alert("Please enter a valid e-mail address."); 
         email.focus(); 
         return false; 
     } 
    
    else if (email.value.indexOf("@", 0) < 0)                 
     { 
         window.alert("Please enter a valid e-mail address."); 
         email.focus(); 
         return false; 
     } 
    
  else   if (email.value.indexOf(".", 0) < 0)                 
     { 
         window.alert("Please enter a valid e-mail address."); 
         email.focus(); 
         return false; 
     }  
     else if (title.value ==""){
         window.alert("please enter a title");
         title.focus();
     }
     else if (message.value=""){
         window.alert("please enter a message");
         alert.focus();
         return false
     }
    return true
}
  