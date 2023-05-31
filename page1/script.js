function scaleCircle(element) {
    element.style.transform = "scale(1.1)"; // Scale up the circle
  }
  
  function resetCircle(element) {
    element.style.transform = "scale(1)"; // Reset the circle to its original size
  }
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var message = document.getElementsByName('message')[0].value;
  
    // Prepare email body
    var emailBody = 'Name: ' + name + '\n';
    emailBody += 'Email: ' + email + '\n';
    emailBody += 'Message: ' + message;
  
    // You'll need to implement the server-side code to send the email using the emailBody variable.
  
    // Reset form
    document.getElementById('contactForm').reset();
  });