document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    // Name Validation
    const name = document.getElementById('name').value.trim();
    if (name === "") {
        document.getElementById('nameError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = "none";
    }
    // Email Validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = "none";
    }
    // Message Validation
    const message = document.getElementById('message').value.trim();
    if (message === "") {
        document.getElementById('messageError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('messageError').style.display = "none";
    }
    // Show success message if all fields are valid
    if (isValid) {
        document.getElementById('successMessage').style.display = "block";
        setTimeout(() => {
            document.getElementById('successMessage').style.display = "none";
            document.getElementById('contactForm').reset();
        }, 3000);
    }
});