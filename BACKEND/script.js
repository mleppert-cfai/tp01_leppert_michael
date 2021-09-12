
var regexNomPrenomVille = new RegExp("^[A-Za-zÀ-ÖØ-öø-ÿ\-]*$");
var regexAdresse = new RegExp("^[0-9]{1,3}[\\s].[\\sA-Za-zÀ-ÖØ-öø-ÿ\-\']*$");
var regexCodePostal = new RegExp("^[0-9]{5}$");
var regexMail = new RegExp("^[A-Za-zÀ-ÖØ-öø-ÿ\-\.]*@[A-Za-zÀ-ÖØ-öø-ÿ\-\.]*[\.].[A-Za-z]$");
var regexTelephone = new RegExp("^([0-9]{2}){5}$");
var regexLogin = new RegExp("^[A-Za-zÀ-ÖØ-öø-ÿ0-9]*$");
var regexPassword = new RegExp("^[\\S]*$");


$(document).ready(function() {

    $(".invalid-input").hide();

    $("form").submit(function(event){
        let nomElement = $("#nom");
        let prenomElement = $("#prenom");
        let civiliteElement = $("#civilite");
        let adresseElement = $("#adresse");
        let villeElement = $("#ville");
        let codePostalElement = $("#codePostal");
        let emailElement = $("#email");
        let telephoneElement = $("#telephone");
        let loginElement = $("#login");
        let passwordElement = $("#password");
        let confirmPasswordElement = $("#confirmPassword");

        let nomInvalid = $("#invalidNom");
        let prenomInvalid = $("#invalidPrenom");
        let civiliteInvalid = $("#invalidCivilite");
        let adresseInvalid = $("#invalidAdresse");
        let villeInvalid = $("#invalidVille");
        let codePostalInvalid = $("#invalidCodePostal");
        let emailInvalid = $("#invalidEmail");
        let telephoneInvalid = $("#invalidTelephone");
        let loginInvalid = $("#invalidLogin");
        let passwordInvalid = $("#invalidPassword");
        let confirmPasswordInvalid = $("#confirmPasswordInvalid");

        validateInput(nomElement, regexNomPrenomVille, nomInvalid, event);
        validateInput(prenomElement, regexNomPrenomVille, prenomInvalid, event);
        validateInput(adresseElement, regexAdresse, adresseInvalid, event);
        validateInput(villeElement, regexNomPrenomVille, villeInvalid, event);
        validateInput(codePostalElement, regexCodePostal, codePostalInvalid, event);
        validateInput(emailElement, regexMail, emailInvalid, event);
        validateInput(telephoneElement, regexTelephone, telephoneInvalid, event);
        validateInput(loginElement, regexLogin, loginInvalid, event);
        validateInput(passwordElement, regexPassword, passwordInvalid, event);

        validateCivilite(civiliteElement, civiliteInvalid, event);

        validatePasswordMatch(passwordElement, confirmPasswordElement, confirmPasswordInvalid, event);

        event.preventDefault();
    });
});

function validateInput(inputElement, regex, invalidElement, event){
    if(! regex.test(inputElement.val())){
        invalidElement.show();
        event.preventDefault();
    }
    else{
        invalidElement.hide();
    }
}

function validateCivilite(civiliteElement, invalidElement, event){
    if(civiliteElement.selectedIndex() == ""){
        invalidElement.show();
        event.preventDefault();
    }
    else{
        invalidElement.hide();
    }

}

function validatePasswordMatch(passwordElement, confirmPasswordElement, invalidElement, event){
    if(passwordElement.val() != confirmPasswordElement.val()){
        invalidElement.show();
        event.preventDefault();
    }
    else{
        invalidElement.hide();
    }
}