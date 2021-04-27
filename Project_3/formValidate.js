/*


*/


document.addEventListener("DOMContentLoaded", load);

function load(){
    document.getElementById("contactForm").addEventListener("submit", validate);
    //hide it here or using CSS?
    hideAllErrors();

}

function validate(e){

    hideAllErrors();
    
    if(formHasErrors()){
        e.preventDefault();

        return false;
    }

    return true;
}

function formHasErrors(){

    let errorFlag = false;

    let txt = ["name", "phone", "email"];

    let phoneRegex = new RegExp (/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);
	let emailRegex = new RegExp (/([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/);

    for(let i=0; i<txt.length; i++){
        if(document.getElementById(txt[i]).value == ""){
            document.getElementById(txt[i] + "_error").style.display = "inline";
        
            if(!errorFlag){
                document.getElementById(txt[i]).focus();
                document.getElementById(txt[i]).select();
                
            }
            errorFlag = true;
        }
    }

    if(!phoneRegex.test(document.getElementById(txt[1]).value)){
        document.getElementById("phone_error").style.display = "inline";
        if(!errorFlag){
            document.getElementById(txt[1]).focus();
            document.getElementById(txt[1]).select();
        }
        errorFlag = true;
    }

    if(!emailRegex.test(document.getElementById(txt[2]).value)){
        document.getElementById("email_error").style.display = "inline";
        if(!errorFlag){
            document.getElementById(txt[2]).focus();
            document.getElementById(txt[2]).select();
        }        
        errorFlag = true;
    }

    return errorFlag;
}

function hideAllErrors(){
    let errorfields = document.getElementsByClassName("error");

    for(let i=0; i<errorfields.length; i++){
        errorfields[i].style.display = "none";
    }
}