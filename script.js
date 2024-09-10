document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    // Collect the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation (check if fields are not empty)
    if (name && email && message) {
        alert(`Thanks, ${name}! Your message has been sent.`);
        // You could send this data to a server, or reset the form after submission
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
