function submitForm() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Check if all fields are filled
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }
    // Simulate form submission (For example, log the data to the console)
    const formData = {
        name: name,
        email: email,
        message: message
    };
    // Display response message
    document.getElementById('response').innerHTML = `
        <h2>Thank you for your submission, ${formData.name}!</h2>
        <p>We will get back to you at ${formData.email} shortly.</p>
        <p>Your message: ${formData.message}</p>
        `;
        document.getElementById('myForm').reset();
        }