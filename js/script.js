function updateButtonStatus() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;
    if (name != "" && email != "" && message != "") {
        enableButton();
        return true;
    } else {
        disableButton();
        return false;
    }
}

function validateName(name) {
    const nameRegex = /^([A-Z][a-z]{1,} ?)+$/;
    let maxLength = name.length<=25;
    return (nameRegex.test(name) && maxLength);
}

function validateEmail(email) {
    const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return regex.test(email);
}

function validateForm() { //todo refactor
    let result = "";
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    if (!validateName(name)) {
        result += "Name must be:\n- 2-25 characters long\n- does not contain only whitespace characters\n- it may contains only letters and space\n- each word in it starts with capital letters.\n";
        highlightField("name", "#ec3b35");
    } else {
        highlightField("name", "white");
    }
    if (!validateEmail(email)) {
        result += "\nInvalid email address!";
        highlightField("email", "#ec3b35");
    } else {
        highlightField("email", "white");
    }
    if (result == "") {
        result += "Form successfully sent!";
        clearFormFields();
        disableButton();
    }
    alert(result);
}

function enableButton() {
    document.getElementById("sendFormButton").disabled = false;
}

function disableButton() {
    document.getElementById("sendFormButton").disabled = true;
}

function clearFormFields() {
    setPropertiesToDefault("name");
    setPropertiesToDefault("email");
    setPropertiesToDefault("message");
    document.getElementById("country").value = "poland";
}

function highlightField(id, color) {
    document.getElementById(id).style.backgroundColor = color;
}

function setPropertiesToDefault(id) {
    document.getElementById(id).value = "";
    highlightField(id, "white");
}

