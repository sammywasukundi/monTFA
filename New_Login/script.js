let loginForm= document.querySelector('.logon-wrap ');
let signupForm= document.querySelector('.signup-wrap ');
let title= document.querySelector('title');

let signupToggleBtn= document.querySelector('#toggle-signup');
let loginToggleBtn= document.querySelector('#toggle-login');

signupToggleBtn.onclick= ()=>{
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
    title.textContent = 'Signup form';
}


loginToggleBtn.onclick= ()=>{
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    title.textContent = 'Login form';
}




function Envoyer(){
    let loginForm= document.querySelector('.logon-wrap ');
    let myRegex=  /^[a-zA-z-\ s]+$/;
    let myRegexEmail=/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    let myRegexCode=/^(?=_*[0-9])(?=_*[!@#$%^&*])[a-zA-z0!@#$%^&*]{0,12}$/;
    
    let myInputNom= document.getElementById("nom");
    let myInputEmail= document.getElementById("email");
    let myInputCode= document.getElementById("password");
   
    
  
    if (myInputEmail.value===""){
    let myError=document.getElementById("error");
    
        myError.innerHTML=" Email";
        myError.style.color="red";
        
        e.preveventDefault();
    } 
    else if(myRegexEmail.test(myInputEmail.value)==false){
            let myError=document.getElementById("error");
            myError.innerHTML="errer";
            myError.style.color="red";
            e.preveventDefault();
    }

    else if (myInput.value===""){
        let myError=document.getElementById("error");
        
            myError.innerHTML="password";
            myError.style.color="red";
            e.preveventDefault();
        } 
        else if(myRegexCode.test(myInputEmail.value)==false){
                let myError=document.getElementById("error");
                myError.innerHTML="Errer";
                myError.style.color="red";
                e.preveventDefault();
        }


    else{ 
        document.location.href="index.html";	
    }
    
    }

    function Connection(){
        let signupForm= document.querySelector('.signup-wrap ');
        let myRegex=  /^[a-zA-z-\ s]+$/;
        let myRegexEmail=/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
        let myRegexCode=/^(?=_*[0-9])(?=_*[!@#$%^&*])[a-zA-z0!@#$%^&*]{0,12}$/;
        
        let myInputNom= document.getElementById("nom1");
        let myInputEmail= document.getElementById("email1");
        let myInputCode= document.getElementById("password1");
       
        
        if (myInputNom.value===""){
            let myError=document.getElementById("error1");
            
                myError.innerHTML=" Nom";
                myError.style.color="red";
                
                e.preveventDefault();
            } 
            else if(myRegex.test(myInputEmail.value)==false){
                    let myError=document.getElementById("error1");
                    myError.innerHTML="errer1";
                    myError.style.color="red";
                    e.preveventDefault();
            }
        
      
        else if (myInputEmail.value===""){
        let myError=document.getElementById("error1");
        
            myError.innerHTML=" Email";
            myError.style.color="red";
            
            e.preveventDefault();
        } 
        else if(myRegexEmail.test(myInputEmail.value)==false){
                let myError=document.getElementById("error1");
                myError.innerHTML="errer";
                myError.style.color="red";
                e.preveventDefault();
        }
    
        else if (myInputCode.value===""){
            let myError=document.getElementById("error1");
            
                myError.innerHTML="password";
                myError.style.color="red";
                e.preveventDefault();
            } 
            else if(myRegexCode.test(myInputEmail.value)==false){
                    let myError=document.getElementById("error1");
                    myError.innerHTML="Erreur";
                    myError.style.color="red";
                    e.preveventDefault();
            }
    
    
        else{ 
            document.location.href="index.html";	
        }
        
        }