//parie1
function validerFormulaire() {
   
    const title = document.getElementById('title').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('ddate').value;
    const returnDate = document.getElementById('rdate').value;
    const price = document.getElementById('price').value;

    if (title.length < 3) {
        alert("The title must contain at least 3 characters.");
        return false;
    }
    const destinationPattern = /^[A-Za-z\s]{3,}$/;
    if (!destinationPattern.test(destination)) {
        alert("The destination must contain only letters and spaces, and be at least 3 characters long.");
        return false;
    }
    if (new Date(returnDate) <= new Date(departureDate)) {
        alert("The return date must be later than the departure date.");
        return false;
    }
    if (price <= 0) {
        alert("The price must be a positive number.");
        return false;
    }

    alert("Form is valid!");
    return true;
}


//partie2
document.getElementById('offerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const title = document.getElementById('title').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('ddate').value;
    const returnDate = document.getElementById('rdate').value;
    const price = document.getElementById('price').value;
    if (title.length < 3) {
        displayError('title', 'The title must contain at least 3 characters.');
        return;
    } else {
        displaySuccess('title');
    }
    const destinationPattern = /^[A-Za-z\s]{3,}$/;
    if (!destinationPattern.test(destination)) {
        displayError('destination', 'The destination must contain only letters and spaces, and be at least 3 characters long.');
        return;
    } else {
        displaySuccess('destination');
    }
    if (new Date(returnDate) <= new Date(departureDate)) {
        displayError('rdate', 'The return date must be later than the departure date.');
        return;
    } else {
        displaySuccess('rdate');
    }
    if (price <= 0) {
        displayError('price', 'The price must be a positive number.');
        return;
    } else {
        displaySuccess('price');
    }
    alert("Form is successfully submitted!");
});

function displayError(inputId, message) {
    const inputField = document.getElementById(inputId);
    inputField.style.borderColor = "red";
    
    let errorMessage = inputField.nextElementSibling;
    if (!errorMessage || errorMessage.className !== "error") {
        errorMessage = document.createElement("span");
        errorMessage.className = "error";
        inputField.after(errorMessage);
    }
    errorMessage.textContent = message;
    errorMessage.style.color = "red";
}

function displaySuccess(inputId) {
    const inputField = document.getElementById(inputId);
    inputField.style.borderColor = "green";
    
    let successMessage = inputField.nextElementSibling;
    if (successMessage && successMessage.className === "error") {
        successMessage.remove(); 
    }
}
