function handleSubmit(event) {
    const outputError = document.getElementById("error");
    outputError.innerHTML = "";
    const inputGivenName = document.getElementById("inputGivenName");
    const inputMiddleName = document.getElementById("inputMiddleName");
    const inputSurnameOfFather = document.getElementById("inputSurnameOfFather");
    const inputSurnameOfMother = document.getElementById("inputSurnameOfMother");
    const inputUsername = document.getElementById("inputUsername");
    const inputEmailAddress = document.getElementById("inputEmailAddress");
    const inputPassword = document.getElementById("inputPassword");
    const inputConfirmPassword = document.getElementById("inputConfirmPassword");
    const inputDateOfBirth = document.getElementById("inputDateOfBirth");
    const inputShippingAddress = document.getElementById("inputShippingAddress");
    let message;
    if (!message && inputGivenName.value.trim() === "") {
        message = "given name is mandatory";
    }
    if (!message && inputMiddleName.value.trim() === "") {
        message = "middle name is mandatory";
    }
    if (!message && inputSurnameOfFather.value.trim() === "") {
        message = "surname of father is mandatory";
    }
    if (!message && inputSurnameOfMother.value.trim() === "") {
        message = "surname of mother is mandatory";
    }
    if (!message && inputUsername.value.trim() === "") {
        message = "username is mandatory";
    }
    if (!message && (!/\d/.test(inputPassword.value) || !/[A-Z]/.test(inputPassword.value))) {
        message = "the password must contain at least one number and at least one uppercase letter";
    }
    if (!message && (inputPassword.value.length < 6 || inputPassword.value.length > 18)) {
        message = "the password must be between 6 and 18 characters long";
    }
    if (!message && inputPassword.value !== inputConfirmPassword.value) {
        message = "the two passwords must be the same";
    }
    const age = (Date.now() - inputDateOfBirth.valueAsDate) / 31557600000; // 365.25 days in milliseconds.
    if (!message && age < 13) {
        message = "you cannot be less than 13 years old to register";
    }
    if (message) {
        outputError.innerHTML = `<p>${message}</p>`;
        event.preventDefault();
    } else {
        alert("submit");
    }
}

document.getElementById("form").addEventListener("submit", handleSubmit);
