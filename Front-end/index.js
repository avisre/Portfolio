document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Assuming you have a function named submitFormToServer to handle the form submission
        submitFormToServer()
            .then(() => {
                // Show success message
                successMessage.style.display = 'block';
                  // Add the fade-out class after 3 seconds
                setTimeout(() => {
                    successMessage.classList.add('fade-out');
                }, 3000);
                // You can also reset the form if needed
                contactForm.reset();
            })
            .catch(error => {
                console.error('Form submission failed:', error);
                // Handle error if necessary
            });
    });
});

