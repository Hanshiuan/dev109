window.onload = function () {
    document.getElementById("myform").addEventListener("submit", isValid);
};

function isValid(event) {
    let isValidForm = true;

    clearWarnings();

    if (!checkName("FirstName", "fname")) isValidForm = false;
    if (!checkName("LastName", "lname")) isValidForm = false;
    if (!checkEmail()) isValidForm = false;
    if (!checkPhone()) isValidForm = false;
    if (!checkUsername()) isValidForm = false;
    if (!checkPassword()) isValidForm = false;
    if (!checkRequired("Address", "addressmsg")) isValidForm = false;
    if (!checkRequired("City", "citymsg")) isValidForm = false;
    if (!checkSelect("State", "statemsg")) isValidForm = false;
    if (!checkSelect("Country", "countrymsg")) isValidForm = false;
    if (!checkZip()) isValidForm = false;

    if (!isValidForm) {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
    }

    return isValidForm;
}

function clearWarnings() {
    const warnings = document.querySelectorAll(".warning");
    warnings.forEach(w => w.innerHTML = "");
}

// Generic name check
function checkName(id, msgId) {
    const name = document.getElementById(id).value.trim();
    const pattern = /^[a-zA-Z ,.'-]+$/;
    if (name === "" || name.length > 20) {
        document.getElementById(msgId).innerHTML = `<p>${id} is required and max 20 characters.</p>`;
        return false;
    } else if (!pattern.test(name)) {
        document.getElementById(msgId).innerHTML = `<p>Only letters and ,.'- are allowed.</p>`;
        return false;
    }
    return true;
}

function checkEmail() {
    const email = document.getElementById("Email").value.trim();
    const atpos = email.indexOf("@");
    const dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById("emailmsg").innerHTML = "<p>Invalid email format.</p>";
        return false;
    }
    return true;
}

function checkPhone() {
    const phone = document.getElementById("Phone").value.trim();
    const pattern = /^[0-9\-]+$/;
    if (phone === "" || phone.length > 15 || !pattern.test(phone)) {
        document.getElementById("phonemsg").innerHTML = "<p>Phone must be numeric (or dashes) and max 15 digits.</p>";
        return false;
    }
    return true;
}

function checkUsername() {
    const username = document.getElementById("Username").value.trim();
    if (username === "" || username.length > 12) {
        document.getElementById("usernamemsg").innerHTML = "<p>Username required and max 12 characters.</p>";
        return false;
    }
    return true;
}

function checkPassword() {
    const password = document.getElementById("Password").value;
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,7}$/;
    if (!pattern.test(password)) {
        document.getElementById("passwordmsg").innerHTML = "<p>Password must include uppercase, lowercase, number, special character, and max 7 characters.</p>";
        return false;
    }
    return true;
}

function checkRequired(id, msgId) {
    const val = document.getElementById(id).value.trim();
    if (val === "") {
        document.getElementById(msgId).innerHTML = `<p>${id} is required.</p>`;
        return false;
    }
    return true;
}

function checkSelect(id, msgId) {
    const val = document.getElementById(id).value;
    if (val === "") {
        document.getElementById(msgId).innerHTML = `<p>${id} is required.</p>`;
        return false;
    }
    return true;
}

function checkZip() {
    const country = document.getElementById("Country").value;
    const zip = document.getElementById("ZipCode").value.trim();
    const pattern = /^\d{5}$/;

    if (country === "USA") {
        if (!pattern.test(zip)) {
            document.getElementById("zipmsg").innerHTML = "<p>Zip Code is required (5 digits) for USA.</p>";
            return false;
        }
    }
    return true;
}
