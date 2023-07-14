
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("contactForm").addEventListener("submit", function(event)
{
    event.preventDefault(); // Prevent form submission
  
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Create an object with the form data
    var formData = {
      name: name,
      email: email,
      message: message
    };
  
    // Send form data to the server
    // Replace "YOUR_SERVER_URL" with the actual server endpoint
    fetch("http://localhost:3000/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(function(response) {
      if (response.ok) {
        // Successful submission
        alert("Thank you for your message!");
        document.getElementById("contactForm").reset(); // Clear the form
      } else {
        // Error occurred
        alert("An error occurred while submitting the form.");
      }
    })
    .catch(function(error) {
      // Network error
      alert("A network error occurred while submitting the form.");
      console.error(error);
    });
  });
});